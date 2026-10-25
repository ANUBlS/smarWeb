/* MDI workspace windows, modal forms, dialogs, popup menus and toasts. */
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Minus, Square, X, Copy, AlertTriangle, XCircle, Info, HelpCircle } from 'lucide-react';
import { windows, type FormWindow } from '../runtime/vcl/forms';
import { FormBody } from './FormView';
import { ErrorBoundary } from './ErrorBoundary';
import { MenuBar, Dropdown, fromMenuItems } from './MenuView';
import { useTick } from '../runtime/ui';
import { dialogs } from '../runtime/dialogs';
import { popupStore } from '../runtime/vcl/actions';
import { toasts } from '../runtime/toast';
import { TDataSet } from '../runtime/data/dataset';
import { runGuarded } from '../runtime/vcl/component';
import { TButtonControl } from '../runtime/vcl/controls';
import type { TCustomForm } from '../runtime/vcl/forms';

export function useWindows() {
  return useSyncExternalStore(windows.subscribe, () => windows.list);
}

function editState(form: TCustomForm): 'edit' | 'insert' | null {
  for (const c of form.owned) {
    if (c instanceof TDataSet) {
      if (c.State === 'dsinsert') return 'insert';
      if (c.State === 'dsedit') return 'edit';
    }
  }
  return null;
}

function useSize(ref: React.RefObject<HTMLElement | null>) {
  const [s, setS] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setS({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    setS({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, [ref]);
  return s;
}

function TitleBar({ w, onDrag, modal }: { w: FormWindow; onDrag?: (e: React.PointerEvent) => void; modal?: boolean }) {
  const st = editState(w.form);
  const close = () => void runGuarded(() => w.form.Close(), `${w.form.Name}.Close`);
  return (
    <div className={`win-title${st ? ' editing' : ''}`} onPointerDown={onDrag} onDoubleClick={() => { if (!modal) { w.maximized = !w.maximized; windows.emit(); } }}>
      <h2>{w.form.Caption || w.form.Name}</h2>
      {st ? <span className="state">{st === 'insert' ? 'Yeni qeyd daxil edilir' : 'Redaktə rejimi'}</span> : null}
      {!modal ? (
        <>
          <button className="wbtn" title="Aşağı endirmək" onClick={(e) => { e.stopPropagation(); w.minimized = true; windows.activeId = 0; windows.emit(); }}><Minus size={14} /></button>
          <button className="wbtn" title={w.maximized ? 'Bərpa et' : 'Böyüt'} onClick={(e) => { e.stopPropagation(); w.maximized = !w.maximized; windows.emit(); }}>{w.maximized ? <Copy size={12} /> : <Square size={12} />}</button>
        </>
      ) : null}
      <button className="wbtn close" title="Bağlamaq" onClick={(e) => { e.stopPropagation(); close(); }}><X size={15} /></button>
    </div>
  );
}

function WindowBody({ form, minW, minH }: { form: TCustomForm; minW?: number; minH?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);
  const menu = form.Menu;
  const w = Math.max(size.w, minW ?? 0);
  const h = Math.max(size.h, minH ?? 0);
  return (
    <>
      {menu && menu.Items.items.length ? <MenuBar items={fromMenuItems(menu.Items.items)} /> : null}
      <div className="win-body" ref={ref}>
        {size.w > 0 ? <ErrorBoundary name={form.Name}><FormBody form={form} width={w} height={h} /></ErrorBoundary> : null}
      </div>
    </>
  );
}

export function Workspace({ splash }: { splash: React.ReactNode }) {
  useTick();
  const list = useWindows();
  const mdi = list.filter((w) => w.kind !== 'modal');
  const active = windows.activeId;
  const activeWin = mdi.find((w) => w.id === active && !w.minimized);
  const coverBySplash = !activeWin || !activeWin.maximized;
  return (
    <div className="workspace">
      {coverBySplash ? <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>{splash}</div> : null}
      {mdi.filter((w) => !w.minimized && (!w.maximized || w.id === active)).map((w) => <MdiWindow key={w.id} w={w} active={w.id === active} />)}
    </div>
  );
}

function MdiWindow({ w, active }: { w: FormWindow; active: boolean }) {
  const drag = (e: React.PointerEvent) => {
    if (w.maximized || (e.target as HTMLElement).closest('button')) return;
    const sx = e.clientX, sy = e.clientY, ox = w.x, oy = w.y;
    const mv = (ev: PointerEvent) => { w.x = Math.max(0, ox + ev.clientX - sx); w.y = Math.max(0, oy + ev.clientY - sy); windows.emit(); };
    const up = () => { window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', mv);
    window.addEventListener('pointerup', up);
  };
  const resize = (e: React.PointerEvent) => {
    e.stopPropagation();
    const sx = e.clientX, sy = e.clientY, ow = w.w, oh = w.h;
    const mv = (ev: PointerEvent) => { w.w = Math.max(280, ow + ev.clientX - sx); w.h = Math.max(140, oh + ev.clientY - sy); windows.emit(); };
    const up = () => { window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', mv);
    window.addEventListener('pointerup', up);
  };
  return (
    <section className={`win${w.maximized ? ' max' : ''}${active ? '' : ' inactive'}`} aria-label={w.form.Caption}
      style={w.maximized ? { zIndex: 5 } : { left: w.x, top: w.y, width: w.w, height: w.h + 31, zIndex: active ? 6 : 4 }}
      onPointerDown={() => { if (!active) windows.activate(w.id); }}>
      <TitleBar w={w} onDrag={drag} />
      <WindowBody form={w.form} minW={w.maximized ? Math.min(w.form.designWidth, 700) : undefined} minH={w.maximized ? 200 : undefined} />
      {!w.maximized ? <div onPointerDown={resize} style={{ position: 'absolute', right: 0, bottom: 0, width: 14, height: 14, cursor: 'nwse-resize' }} /> : null}
    </section>
  );
}

export function ModalLayer() {
  useTick();
  const list = useWindows();
  const modals = list.filter((w) => w.kind === 'modal');
  return (
    <>
      {modals.map((w, i) => (
        <div key={w.id} className="modal-backdrop" style={{ zIndex: 900 + i * 2 }}>
          <ModalWindow w={w} />
        </div>
      ))}
    </>
  );
}

function ModalWindow({ w }: { w: FormWindow }) {
  const f = w.form;
  const width = Math.min(window.innerWidth - 24, f.designWidth);
  const height = Math.min(window.innerHeight - 60, f.designHeight + (f.Menu ? 22 : 0));
  const onKey = (e: React.KeyboardEvent) => {
    const tag = (e.target as HTMLElement).tagName;
    const buttons = f.owned.filter((c): c is TButtonControl => c instanceof TButtonControl && c.Visible && c.Enabled);
    if (e.key === 'Enter' && tag !== 'TEXTAREA' && tag !== 'BUTTON' && !f.KeyPreview) {
      const def = buttons.find((b) => b.Default);
      if (def) { e.preventDefault(); void runGuarded(() => def.Click(), def.Name); }
    } else if (e.key === 'Escape') {
      const cancel = buttons.find((b) => b.Cancel);
      if (cancel) { e.preventDefault(); void runGuarded(() => cancel.Click(), cancel.Name); }
    }
  };
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={f.Caption} style={{ width: width + 2 }} onKeyDown={onKey}>
      <TitleBar w={w} modal />
      <div style={{ height, display: 'flex', flexDirection: 'column' }}>
        <WindowBody form={f} minW={f.designWidth} minH={f.designHeight} />
      </div>
    </div>
  );
}

export function DialogLayer() {
  const d = useSyncExternalStore(dialogs.subscribe, dialogs.current);
  const [val, setVal] = useState('');
  const first = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (d) { setVal(d.input?.value ?? ''); setTimeout(() => first.current?.focus(), 20); } }, [d]);
  if (!d) return null;
  const Ic = d.kind === 'error' ? XCircle : d.kind === 'warning' ? AlertTriangle : d.kind === 'confirmation' ? HelpCircle : Info;
  return (
    <div className="modal-backdrop" style={{ zIndex: 1100 }}>
      <div className="modal dlg" role="alertdialog" aria-modal="true" aria-label={d.title}
        onKeyDown={(e) => { if (e.key === 'Escape') { const c = d.buttons.find((b) => b.id === 'cancel' || b.id === 'no') ?? (d.buttons.length === 1 ? d.buttons[0] : null); if (c) d.resolve({ result: c.result, value: val }); } }}>
        <div className="win-title"><h2>{d.title}</h2></div>
        {d.message ? <div className="dlg-body"><span className={`dlg-icon ${d.kind}`}><Ic size={22} /></span><p>{d.message}</p></div> : null}
        {d.input ? (
          <form className="dlg-input" onSubmit={(e) => { e.preventDefault(); d.resolve({ result: 1, value: val }); }}>
            <label>{d.input.label}</label>
            <input className="v-input" style={{ height: 28 }} autoFocus value={val} onChange={(e) => setVal(e.target.value)} />
          </form>
        ) : null}
        <div className="dlg-buttons">
          {d.buttons.map((b, i) => (
            <button key={b.id} ref={i === 0 ? first : undefined} className={`v-btn${i === 0 ? ' default' : ''}`} style={{ height: 28, minWidth: 80 }}
              onClick={() => d.resolve({ result: b.result, value: val })}>{b.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PopupLayer() {
  useTick();
  const p = useSyncExternalStore(popupStore.subscribe, () => (popupStore.get()?.menu ?? null));
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!p) return;
    const h = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) popupStore.close(); };
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') popupStore.close(); };
    setTimeout(() => document.addEventListener('mousedown', h), 0);
    document.addEventListener('keydown', k);
    return () => { document.removeEventListener('mousedown', h); document.removeEventListener('keydown', k); };
  }, [p]);
  if (!p) return null;
  const st = popupStore.get()!;
  const x = Math.min(st.x, window.innerWidth - 240);
  const y = Math.min(st.y, window.innerHeight - 40 - p.Items.items.length * 26);
  return (
    <div ref={ref} style={{ position: 'fixed', left: x, top: Math.max(4, y), zIndex: 1150 }}>
      <Dropdown items={fromMenuItems(p.Items.items)} onClose={() => popupStore.close()} style={{ position: 'static' }} />
    </div>
  );
}

export function ToastLayer() {
  const list = useSyncExternalStore(toasts.subscribe, toasts.get);
  return (
    <div className="toasts" aria-live="polite">
      {list.map((t) => <div key={t.id} className="toast"><span style={{ flex: 1 }}>{t.text}</span><button onClick={() => toasts.dismiss(t.id)} aria-label="Bağla"><X size={13} /></button></div>)}
    </div>
  );
}
