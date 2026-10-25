/*
 * Global UI invalidation: any runtime state change (property set, dataset
 * scroll, …) schedules one re-render of the open forms on the next frame.
 */
import { useSyncExternalStore } from 'react';

let tick = 0;
let scheduled = false;
const listeners = new Set<() => void>();

export function invalidate() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    tick++;
    listeners.forEach((l) => l());
  });
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
