/*
 * Global UI invalidation: any runtime state change (property set, dataset
 * scroll, …) schedules one re-render of the open forms on the next frame.
 *
 * Paint hold — Delphi semantics: the VCL is single-threaded, so nothing is
 * repainted while an event handler runs; the user only sees the state the
 * handler leaves behind. The web runtime is async (every query is awaited), so
 * without a hold the browser would paint every intermediate state — buttons
 * disabled/enabled by OnUpdate, grids scrolling through DisableControls loops,
 * captions rewritten several times — which shows up as flicker.
 *
 *   beginHold()/endHold()   wrap event handlers (runGuarded, idle OnUpdate)
 *   suspendHold()           while a modal form or message box waits for the user
 *   flushNow()              Application.ProcessMessages / Repaint
 *
 * A handler that keeps running longer than HOLD_MS is treated like a long
 * operation and repaints normally until it ends (progress bars, status texts).
 */
import { useSyncExternalStore } from 'react';

const HOLD_MS = 1200;

let tick = 0;
let scheduled = false;
let pending = false;
const listeners = new Set<() => void>();

type Level = { holds: number; expired: boolean; timer: number | null };
const levels: Level[] = [{ holds: 0, expired: false, timer: null }];
const top = () => levels[levels.length - 1];
const held = () => { const l = top(); return l.holds > 0 && !l.expired; };

function render() {
  pending = false;
  tick++;
  listeners.forEach((l) => l());
}

export function invalidate() {
  if (held()) { pending = true; return; }
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    if (held()) { pending = true; return; }
    render();
  });
}


export function beginHold() {
  const l = top();
  if (l.holds++ === 0) {
    l.expired = false;
    l.timer = window.setTimeout(() => { l.timer = null; if (l.holds > 0) { l.expired = true; if (pending) invalidate(); } }, HOLD_MS);
  }
}

export function endHold() {
  const l = top();
  if (l.holds === 0) return;
  if (--l.holds === 0) {
    if (l.timer) { clearTimeout(l.timer); l.timer = null; }
    l.expired = false;
    if (pending) invalidate();
  }
}

/** Run fn with painting held (see header). */
export async function held_<T>(fn: () => Promise<T> | T): Promise<T> {
  beginHold();
  try { return await fn(); } finally { endHold(); }
}

/** A modal loop starts: repaint freely (handlers inside the modal hold on their own level). */
export function suspendHold(): () => void {
  const lvl: Level = { holds: 0, expired: false, timer: null };
  levels.push(lvl);
  if (pending) invalidate();
  let done = false;
  return () => {
    if (done) return;
    done = true;
    const i = levels.lastIndexOf(lvl);
    if (i > 0) levels.splice(i, 1);
    if (lvl.timer) clearTimeout(lvl.timer);
    if (pending) invalidate();
  };
}

/** Application.ProcessMessages: paint the current state now. */
export function flushNow() {
  scheduled = false;
  render();
}

export function subscribe(l: () => void) { listeners.add(l); return () => { listeners.delete(l); }; }
export function useTick() { return useSyncExternalStore(subscribe, () => tick); }

/* Busy cursor (Screen.Cursor := crHourGlass / crSQLWait) */
let busy = 0;
const busyListeners = new Set<() => void>();
export function setScreenCursor(c: number) { busy = c; busyListeners.forEach((l) => l()); }
export function useScreenCursor() {
  return useSyncExternalStore((l) => { busyListeners.add(l); return () => { busyListeners.delete(l); }; }, () => busy);
}
