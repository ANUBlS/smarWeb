/* Renders a VCL form's component tree at its DFM coordinates with modern styling. */
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react';
import { ChevronDown, ChevronRight, Play, Circle } from 'lucide-react';
import { useTick } from '../runtime/ui';
import { layoutChildren, type Rect } from './layout';
import { iconFor } from './icons';
import { toCss } from '../runtime/vcl/colors';
import { ValueRef } from '../runtime/core';
import { runGuarded } from '../runtime/vcl/component';
import type { TControl, TWinControl } from '../runtime/vcl/controls';
import {
  TPageControl, TTabSheet, TToolButton, TToolBar, TCustomEdit, TCheckBox, TRadioButton, TComboBox, TListBox,
  TCheckListBox, TRadioGroup, TDateTimePicker, TTabControl, TStatusBar, TTreeView, TTreeNode, TListView, TStringGrid,
  TSplitter, TSpeedButton, TButtonControl, TMemo, THeaderControl,
} from '../runtime/vcl/controls';
import {
  TDBGrid, TColumn, TDBLookupComboBox, TDBViewComboBox, TDBNavigator, TDBText, TDBDateTimeEditEh, TDBEdit,
} from '../runtime/vcl/dbcontrols';
import { insets } from '../runtime/vcl/forms';
import type { TCustomForm } from '../runtime/vcl/forms';
import type { TPopupMenu } from '../runtime/vcl/actions';
import { formatDateTime, fromDelphi, toDelphi, settings } from '../runtime/datetime';

/* ------------------------------------------------------------------ helpers */

const run = (p: Promise<unknown> | unknown, where: string) => { void runGuarded(async () => { await p; }, where); };

function fontStyle(c: TControl): CSSProperties {
  const s: CSSProperties = {};
  const f = c.Font;
  if (!f || c.ParentFont) return s;
  const fg = toCss(f.Color);
  if (fg && f.Color !== 0) s.color = fg;
  const st = (f.Style ?? []).map((x) => String(x).toLowerCase());
  if (st.includes('fsbold')) s.fontWeight = 600;
  if (st.includes('fsitalic')) s.fontStyle = 'italic';
  if (st.includes('fsunderline')) s.textDecoration = 'underline';
  if (f.Size && f.Size >= 11) s.fontSize = Math.min(22, Math.round(f.Size * 1.33)) + 'px';
  return s;
}
function bgStyle(c: TControl): CSSProperties {
  if (c.ParentColor) return {};
  const bg = toCss((c as any)._color);
  return bg ? { background: bg } : {};
}
function popupOf(c: TControl): TPopupMenu | null {
  const pm = ((c as any).PopupMenu ?? c.refs.get('popupmenu') ?? null) as TPopupMenu | null;
  // an unresolved/unknown third-party menu component has no Popup: no context menu then
  return pm && typeof (pm as any).Popup === 'function' ? pm : null;
}
function onContext(c: TControl) {
  const pm = popupOf(c);
  if (!pm) return undefined;
  return (e: React.MouseEvent) => { e.preventDefault(); pm.PopupComponent = c; run(pm.Popup(e.clientX, e.clientY), pm.Name); };
}
function rootForm(c: TControl): TCustomForm | null {
  let x: TControl | null = c;
  while (x && !(x as any).isRootContainer) x = x.Parent;
  return x as TCustomForm | null;
}

/** OnKeyDown/OnKeyPress with Form.KeyPreview; returns false when Key was cleared (#0). */
async function keyEvents(c: TControl, e: { key: string; keyCode: number; shift: string[] }, kind: 'down' | 'press') {
  const form = rootForm(c);
  if (kind === 'down') {
    const ref = new ValueRef(e.keyCode);
    if (form?.KeyPreview && form !== c) await form.fire('OnKeyDown', form, ref, e.shift);
    if (ref.value !== 0) await c.fire('OnKeyDown', c, ref, e.shift);
    return ref.value !== 0;
  }
  const ref = new ValueRef(e.key);
  if (form?.KeyPreview && form !== c) await form.fire('OnKeyPress', form, ref);
  if (ref.value !== '\0' && ref.value !== '') await c.fire('OnKeyPress', c, ref);
  return { keep: ref.value !== '\0' && ref.value !== '', key: String(ref.value) };
}
function shiftOf(e: KeyboardEvent): string[] {
  const s: string[] = [];
  if (e.shiftKey) s.push('ssshift');
  if (e.ctrlKey) s.push('ssctrl');
  if (e.altKey) s.push('ssalt');
  return s;
}
function pressChar(e: KeyboardEvent): string | null {
  if (e.ctrlKey || e.altKey || e.metaKey) return null;
  if (e.key === 'Enter') return '\r';
  if (e.key === 'Escape') return '\x1b';
  if (e.key === 'Backspace') return '\b';
  if (e.key.length === 1) return e.key;
  return null;
}
function hasKeyHandlers(c: TControl, press: boolean) {
  const f = rootForm(c);
  const ev = press ? 'OnKeyPress' : 'OnKeyDown';
  return c.hasHandler(ev) || (!!f?.KeyPreview && f.hasHandler(ev));
}

/** Input key handling: OnKeyDown, then OnKeyPress (Key := #0 cancels, replacement chars are inserted). */
function inputKeyHandler(c: TControl, getValue: () => string, setValue: (v: string) => void) {
  return (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const el = e.currentTarget;
    const down = hasKeyHandlers(c, false);
    const ch = pressChar(e);
    const press = ch !== null && hasKeyHandlers(c, true);
    if (down) void keyEvents(c, { key: e.key, keyCode: e.keyCode, shift: shiftOf(e) }, 'down');
    if (!press) return;
    e.preventDefault();
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? start;
    void runGuarded(async () => {
      const r = await keyEvents(c, { key: ch!, keyCode: e.keyCode, shift: shiftOf(e) }, 'press') as { keep: boolean; key: string };
      if (!r.keep) return;
      const v = getValue();
      if (r.key === '\b') {
        const nv = start === end ? v.slice(0, Math.max(0, start - 1)) + v.slice(end) : v.slice(0, start) + v.slice(end);
        setValue(nv);
        requestAnimationFrame(() => { const p = start === end ? Math.max(0, start - 1) : start; el.setSelectionRange?.(p, p); });
      } else if (r.key === '\r' || r.key === '\x1b') {
        if (r.key === '\r' && el.tagName === 'TEXTAREA') setValue(v.slice(0, start) + '\n' + v.slice(end));
      } else if (r.key.length === 1) {
        setValue(v.slice(0, start) + r.key + v.slice(end));
        requestAnimationFrame(() => el.setSelectionRange?.(start + 1, start + 1));
      }
    }, `${c.Name}.OnKeyPress`);
  };
}
function focusHandlers(c: TControl) {
  return {
    onFocus: () => { const f = rootForm(c); if (f) f.ActiveControl = c; run(c.fire('OnEnter', c), c.Name); },
    onBlur: () => run(c.fire('OnExit', c), c.Name),
  };
}

/* ------------------------------------------------------------------ containers */

const ORIGIN_AT_CORNER = new Set(['groupbox', 'radiogroup', 'panel']);
/** TToolButton / TSpeedButton are graphic controls in VCL: clicking them never moves the focus
 *  (actions checking Grid.Focused keep working). */
const noFocus = (e: React.MouseEvent) => e.preventDefault();

export function Children({ parent, width, height }: { parent: TControl; width: number; height: number }) {
  const ins = insets(parent);
  const w = Math.max(0, width - ins.l - ins.r);
  const h = Math.max(0, height - ins.t - ins.b);
  const kids = parent.children;
  const rects = layoutChildren(kids, w, h);
  // VCL: aligned children fill the adjusted client rect (below a group box caption, inside bevels), but
  // free children of panels / group boxes keep Left/Top relative to the control's own corner
  if (ORIGIN_AT_CORNER.has(parent.kind) && (ins.l || ins.t)) {
    for (const k of kids) {
      const a = k.Align || 'alnone';
      const r = rects.get(k);
      if (r && (a === 'alnone' || a === 'alcustom')) rects.set(k, { ...r, left: r.left - ins.l, top: r.top - ins.t });
    }
  }
  return (
    <div style={{ position: 'absolute', left: ins.l, top: ins.t, width: w, height: h }}>
      {kids.map((k) => {
        const r = rects.get(k);
        return r ? <Ctl key={k.Name + ':' + kids.indexOf(k)} c={k} r={r} /> : null;
      })}
    </div>
  );
}

function Ctl({ c, r }: { c: TControl; r: Rect }) {
  c.rect = r;
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => { c.dom = ref.current; });
  const base: CSSProperties = { left: r.left, top: r.top, width: r.width, height: r.height };
  const title = c.ShowHint || c.Hint ? c.Hint.split('|')[0] || undefined : undefined;
  const common = { ref, className: 'vc', style: base, title, onContextMenu: onContext(c), 'data-name': c.Name } as const;
  const el = renderKind(c, r, common);
  return el;
}

type Common = { ref: React.RefObject<HTMLDivElement | null>; className: string; style: CSSProperties; title?: string; onContextMenu?: (e: React.MouseEvent) => void };

function renderKind(c: TControl, r: Rect, p: Common): ReactNode {
  const dis = !c.Enabled;
  switch (c.kind) {
    case 'label': case 'dbtext': {
      const align = (c as any).Alignment === 'tacenter' ? 'center' : (c as any).Alignment === 'tarightjustify' ? 'right' : 'left';
      const wrap = (c as any).WordWrap;
      return (
        <div {...p} className={`vc v-label${wrap ? ' wrap' : ''}`} style={{ ...p.style, textAlign: align, ...fontStyle(c), ...bgStyle(c), color: dis ? 'var(--muted)' : fontStyle(c).color, cursor: c.hasHandler('OnClick') ? 'pointer' : undefined, height: wrap ? p.style.height : undefined, width: (c as any).AutoSize && !wrap && align === 'left' ? undefined : p.style.width }}
          onClick={() => run(c.Click(), c.Name)} onDoubleClick={() => run(c.fire('OnDblClick', c), c.Name)}>
          {c.Caption.replace(/&(?!&)/g, '')}
        </div>
      );
    }
    case 'statictext':
      return <div {...p} className="vc v-label" style={{ ...p.style, ...fontStyle(c), ...bgStyle(c), border: (c as any).BorderStyle !== 'sbsnone' ? '1px solid var(--rule)' : undefined, padding: '1px 3px' }}>{c.Caption}</div>;
    case 'panel': case 'form': {
      const pnl = c as any;
      const bordered = (pnl.BevelOuter && pnl.BevelOuter !== 'bvnone') || pnl.BorderStyle === 'bssingle';
      const placeholder = pnl.placeholderClass;
      return (
        <div {...p} className={`vc v-panel${bordered ? ' bordered' : ''}`} style={{ ...p.style, ...bgStyle(c), ...fontStyle(c) }}
          onClick={(e) => { if (e.target === e.currentTarget && c.hasHandler('OnClick')) run(c.Click(), c.Name); }}
          onDoubleClick={(e) => { if (e.target === e.currentTarget) run(c.fire('OnDblClick', c), c.Name); }}>
          {c.Caption && !placeholder ? <div className={`pcap${pnl.Alignment === 'taleftjustify' ? ' left' : ''}`}>{c.Caption}</div> : null}
          {placeholder && !c.children.length ? <div className="v-placeholder" style={{ position: 'absolute', inset: 0 }}>{placeholder}</div> : null}
          <Children parent={c} width={r.width} height={r.height} />
        </div>
      );
    }
    case 'scrollbox':
      return <div {...p} className="vc v-panel bordered" style={{ ...p.style, overflow: 'auto', ...bgStyle(c) }}><Children parent={c} width={r.width} height={Math.max(r.height, maxBottom(c))} /></div>;
    case 'groupbox':
      return (
        <div {...p} className="vc v-group" style={{ ...p.style, ...bgStyle(c), ['--gb-bg' as any]: toCss((c as any)._color) && !c.ParentColor ? toCss((c as any)._color) : 'var(--surface)', ...fontStyle(c), top: r.top + 6, height: Math.max(0, r.height - 6) }}>
          {c.Caption ? <div className="legend">{c.Caption.replace(/&(?!&)/g, '')}</div> : null}
          <div style={{ position: 'absolute', left: 0, top: -6, width: r.width, height: r.height }}>
            <Children parent={c} width={r.width} height={r.height} />
          </div>
        </div>
      );
    case 'controlbar':
      return <div {...p} className="vc v-controlbar" style={{ ...p.style, ...bgStyle(c) }}><Children parent={c} width={r.width} height={r.height} /></div>;
    case 'toolbar': return <ToolBarView c={c as TToolBar} p={p} r={r} />;
    case 'toolbutton': return <ToolButtonView b={c as TToolButton} style={p.style} />;
    case 'edit': case 'dbedit': case 'currency': case 'spin': return <EditView c={c as TCustomEdit} p={p} />;
    case 'memo': case 'dbmemo': return <MemoView c={c as TMemo} p={p} />;
    case 'button': return <ButtonView c={c as TButtonControl} p={p} />;
    case 'speedbutton': {
      const b = c as TSpeedButton;
      const Ic = iconFor(b.Name, b.Caption, b.Hint, (b as any)._action?.Name);
      return (
        <div {...p}>
          <button className={`v-btn${b.Flat ? ' flat' : ''}${b.Down ? ' down' : ''}`} style={{ width: '100%', height: '100%', padding: 0, ...fontStyle(c) }} disabled={dis}
            onClick={() => run(b.Click(), b.Name)} aria-pressed={b.GroupIndex ? b.Down : undefined} onMouseDown={noFocus} tabIndex={-1}>
            {b.Caption ? b.Caption.replace(/&(?!&)/g, '') : Ic ? <Ic size={14} /> : null}
          </button>
        </div>
      );
    }
    case 'checkbox': case 'radio': {
      const cb = c as TCheckBox;
      const isRadio = c.kind === 'radio';
      return (
        <div {...p}>
          <label className={`v-check${dis ? ' disabled' : ''}`} style={{ height: '100%', ...fontStyle(c), flexDirection: (cb as any).Alignment === 'taleftjustify' ? 'row-reverse' : undefined, justifyContent: (cb as any).Alignment === 'taleftjustify' ? 'flex-end' : undefined }}>
            <input type={isRadio ? 'radio' : 'checkbox'} checked={cb.Checked} disabled={dis} onChange={() => run(cb.userToggle(), cb.Name)} {...focusHandlers(c)} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{cb.Caption.replace(/&(?!&)/g, '')}</span>
          </label>
        </div>
      );
    }
    case 'radiogroup': {
      const g = c as TRadioGroup;
      const items = g.Items.list();
      const cols = Math.max(1, (g as any).Columns || 1);
      return (
        <div {...p} className="vc v-group v-radiogroup" style={{ ...p.style, top: r.top + 6, height: r.height - 6, ...fontStyle(c) }}>
          {g.Caption ? <div className="legend">{g.Caption}</div> : null}
          <div className="items" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, top: 10 }}>
            {items.map((it, i) => (
              <label key={i} className={`v-check${dis ? ' disabled' : ''}`}>
                <input type="radio" checked={g.ItemIndex === i} disabled={dis} onChange={() => run(g.userSelect(i), g.Name)} />{it}
              </label>
            ))}
          </div>
        </div>
      );
    }
    case 'combo': case 'viewcombo': return <ComboView c={c as TComboBox} p={p} />;
    case 'lookup': return <LookupView c={c as TDBLookupComboBox} p={p} />;
    case 'listbox': case 'checklist': return <ListBoxView c={c as TListBox} p={p} />;
    case 'datetime': case 'dbdate': return <DateView c={c} p={p} />;
    case 'pagecontrol': return <PageControlView c={c as TPageControl} p={p} r={r} />;
    case 'tabsheet': return <div {...p} className="vc" style={{ ...p.style, ...bgStyle(c) }}><Children parent={c} width={r.width} height={r.height} /></div>;
    case 'tabcontrol': {
      const t = c as TTabControl;
      return (
        <div {...p} className="vc v-pagecontrol">
          <div className="v-tabs" role="tablist">{t.Tabs.list().map((s, i) => <button key={i} role="tab" className={`v-tab${t.TabIndex === i ? ' on' : ''}`} onClick={() => run(t.userSelect(i), t.Name)}>{s}</button>)}</div>
          <Children parent={c} width={r.width} height={r.height} />
        </div>
      );
    }
    case 'statusbar': {
      const s = c as TStatusBar;
      const panels = s.Panels.all() as any[];
      return (
        <div {...p} className="vc v-status">
          {s.SimplePanel || !panels.length ? <div style={{ flex: 1 }}>{s.SimpleText}</div>
            : panels.map((pp, i) => <div key={i} style={{ width: i === panels.length - 1 ? undefined : pp.Width, flex: i === panels.length - 1 ? 1 : 'none' }}>{pp.Text}</div>)}
        </div>
      );
    }
    case 'progress': {
      const pb = c as any;
      const min = pb.Min ?? 0, max = pb.Max ?? 100;
      const pct = max > min ? ((pb.Position - min) / (max - min)) * 100 : 0;
      return <div {...p} className="vc v-progress" role="progressbar" aria-valuenow={pb.Position}><div style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} /></div>;
    }
    case 'bevel': {
      const b = c as any;
      const sh = String(b.Shape);
      const bw: CSSProperties = sh === 'bstopline' ? { borderTopWidth: 1 } : sh === 'bsbottomline' ? { borderBottomWidth: 1 } : sh === 'bsleftline' ? { borderLeftWidth: 1 } : sh === 'bsrightline' ? { borderRightWidth: 1 } : sh === 'bsspacer' ? {} : { borderWidth: 1, borderRadius: 3 };
      return <div {...p} className="vc v-bevel" style={{ ...p.style, ...bw, pointerEvents: 'none' }} />;
    }
    case 'shape': {
      const s = c as any;
      return <div {...p} style={{ ...p.style, background: toCss(s.Brush?.Color) ?? 'transparent', border: `1px solid ${toCss(s.Pen?.Color) ?? 'var(--rule)'}`, borderRadius: String(s.Shape).includes('circle') || String(s.Shape).includes('ellipse') ? '50%' : String(s.Shape).includes('round') ? 6 : 0 }} />;
    }
    case 'splitter': return <SplitterView c={c as TSplitter} p={p} r={r} />;
    case 'image': return <div {...p} style={{ ...p.style, pointerEvents: c.hasHandler('OnClick') ? undefined : 'none' }} onClick={() => run(c.Click(), c.Name)} />;
    case 'dbgrid': return <GridView g={c as TDBGrid} p={p} r={r} />;
    case 'stringgrid': return <StringGridView g={c as TStringGrid} p={p} />;
    case 'treeview': return <TreeViewView t={c as TTreeView} p={p} />;
    case 'listview': return <ListViewView l={c as TListView} p={p} />;
    case 'header': {
      const h = c as THeaderControl;
      return <div {...p} className="vc v-header">{(h.Sections.all() as any[]).map((s, i) => <div key={i} style={{ width: s.Width }}>{s.Text}</div>)}</div>;
    }
    case 'navigator': {
      const n = c as TDBNavigator;
      const ds = n.DataSource?.DataSet;
      const labels: Record<string, string> = { nbfirst: '⏮', nbprior: '◀', nbnext: '▶', nblast: '⏭', nbinsert: '+', nbdelete: '−', nbedit: '✎', nbpost: '✓', nbcancel: '✕', nbrefresh: '↻' };
      const titles: Record<string, string> = { nbfirst: 'Birinci', nbprior: 'Əvvəlki', nbnext: 'Növbəti', nblast: 'Sonuncu', nbinsert: 'Əlavə et', nbdelete: 'Sil', nbedit: 'Redaktə', nbpost: 'Yadda saxla', nbcancel: 'İmtina', nbrefresh: 'Yenilə' };
      const editing = ds?.isEditing();
      return (
        <div {...p} className="vc v-nav">
          {n.VisibleButtons.map((b) => {
            const bl = String(b).toLowerCase();
            const off = !ds?.Active || (['nbpost', 'nbcancel'].includes(bl) ? !editing : ['nbfirst', 'nbprior'].includes(bl) ? ds.Bof : ['nbnext', 'nblast'].includes(bl) ? ds.Eof : false);
            return <button key={bl} className="v-btn" title={titles[bl]} disabled={dis || off} onClick={() => run(n.BtnClick(bl), n.Name)}>{labels[bl]}</button>;
          })}
        </div>
      );
    }
    case 'updown': {
      const u = c as any;
      return (
        <div {...p} style={{ ...p.style, display: 'grid' }}>
          <button className="v-btn" style={{ padding: 0 }} onClick={() => { u.Position = Math.min(u.Max, u.Position + u.Increment); run(c.fire('OnClick', c, 'btnext'), c.Name); }}>▴</button>
          <button className="v-btn" style={{ padding: 0 }} onClick={() => { u.Position = Math.max(u.Min, u.Position - u.Increment); run(c.fire('OnClick', c, 'btprev'), c.Name); }}>▾</button>
        </div>
      );
    }
    default:
      if (c.children.length) return <div {...p} className="vc" style={{ ...p.style, ...bgStyle(c) }}><Children parent={c} width={r.width} height={r.height} /></div>;
      return null;
  }
}

function maxBottom(c: TControl) {
  return c.children.reduce((m, k) => Math.max(m, k.Top + k.Height + 8), 0);
}

/* ------------------------------------------------------------------ editors */

function EditView({ c, p }: { c: TCustomEdit; p: Common }) {
  const isNum = c.kind === 'currency' || c.kind === 'spin';
  const db = c instanceof TDBEdit;
  const field = db ? (c as TDBEdit).Field : null;
  const editingDs = !!field?.DataSet?.isEditing();
  const [draft, setDraft] = useState<string | null>(null);
  const value = draft ?? c.Text;
  const ro = c.ReadOnly || (db && (!!field?.ReadOnly || !field));
  const commit = (v: string) => { setDraft(null); run(c.userInput(v), c.Name); };
  const right = isNum || (field && (field.fieldType === 'float' || field.fieldType === 'integer'));
  return (
    <div {...p}>
      <input className={`v-input${right ? ' num' : ''}${editingDs && !ro ? ' db-edit' : ''}`} value={value} readOnly={ro} disabled={!c.Enabled}
        type={c.PasswordChar && c.PasswordChar !== '#0' && c.PasswordChar !== '\0' ? 'password' : 'text'}
        maxLength={c.MaxLength || undefined} style={fontStyle(c)} spellCheck={false}
        onChange={(e) => { if (db && field && field.fieldType !== 'string') setDraft(e.target.value); else commit(e.target.value); }}
        onKeyDown={inputKeyHandler(c, () => value, (v) => commit(v))}
        onFocus={(e) => { focusHandlers(c).onFocus(); if (c.AutoSelect) e.currentTarget.select(); }}
        onBlur={() => { if (draft !== null) commit(draft); focusHandlers(c).onBlur(); }}
        onDoubleClick={() => run(c.fire('OnDblClick', c), c.Name)} onClick={() => run(c.fire('OnClick', c), c.Name)} />
    </div>
  );
}

function MemoView({ c, p }: { c: TMemo; p: Common }) {
  const value = c.Text;
  const ro = c.ReadOnly;
  return (
    <div {...p}>
      <textarea className="v-input" value={value} readOnly={ro} disabled={!c.Enabled} style={{ ...fontStyle(c), ...bgStyle(c), whiteSpace: (c as any).WordWrap === false ? 'pre' : undefined }}
        onChange={(e) => run(c.userInput(e.target.value), c.Name)}
        onKeyDown={inputKeyHandler(c, () => value, (v) => run(c.userInput(v), c.Name))} {...focusHandlers(c)} />
    </div>
  );
}

function ButtonView({ c, p }: { c: TButtonControl; p: Common }) {
  const Ic = iconFor((c as any).Kind === 'bkok' ? 'ok' : (c as any).Kind === 'bkcancel' ? 'cancel' : (c as any).Kind === 'bkclose' ? 'close' : '', c.Caption, c.Name);
  const cap = c.Caption.replace(/&(?!&)/g, '');
  const k = String((c as any).Kind ?? '');
  const caption = cap || (k === 'bkok' ? 'OK' : k === 'bkcancel' ? 'İmtina' : k === 'bkclose' ? 'Bağla' : k === 'bkyes' ? 'Bəli' : k === 'bkno' ? 'Xeyr' : '');
  return (
    <div {...p}>
      <button className={`v-btn${c.Default ? ' default' : ''}`} style={{ width: '100%', height: '100%', ...fontStyle(c) }} disabled={!c.Enabled}
        onClick={() => run(c.Click(), c.Name)} {...focusHandlers(c)}>
        {Ic && p.style.width as number > 60 ? <Ic size={14} /> : null}{caption}
      </button>
    </div>
  );
}

function ComboView({ c, p }: { c: TComboBox; p: Common }) {
  const items = c instanceof TDBViewComboBox ? c.rowsText() : c.Items.list();
  const dropList = c.Style === 'csdropdownlist' || c instanceof TDBViewComboBox || c.Style === 'csownerdrawfixed';
  const idx = c.ItemIndex;
  if (dropList) {
    return (
      <div {...p}>
        <select className="v-input" value={idx} disabled={!c.Enabled} style={fontStyle(c)}
          onChange={(e) => run(c.userSelect(Number(e.target.value)), c.Name)} {...focusHandlers(c)}>
          {idx < 0 ? <option value={-1} /> : null}
          {items.map((s, i) => <option key={i} value={i}>{s}</option>)}
        </select>
      </div>
    );
  }
  const listId = `dl-${c.Name}-${(c as any).__uid ??= Math.random().toString(36).slice(2)}`;
  return (
    <div {...p}>
      <input className="v-input" list={listId} value={c.Text} disabled={!c.Enabled} style={fontStyle(c)}
        onChange={(e) => {
          const i = items.indexOf(e.target.value);
          run(i >= 0 ? c.userSelect(i) : c.userText(e.target.value), c.Name);
        }}
        onKeyDown={inputKeyHandler(c, () => c.Text, (v) => run(c.userText(v), c.Name))} {...focusHandlers(c)} />
      <datalist id={listId}>{items.map((s, i) => <option key={i} value={s} />)}</datalist>
    </div>
  );
}

function LookupView({ c, p }: { c: TDBLookupComboBox; p: Common }) {
  const opts = c.options();
  const key = c.KeyValue;
  const cur = opts.findIndex((o) => String(o.key) === String(key));
  return (
    <div {...p}>
      <select className="v-input" value={cur} disabled={!c.Enabled || c.ReadOnly} style={fontStyle(c)}
        onChange={(e) => { const o = opts[Number(e.target.value)]; if (o) run(c.userSelect(o.key), c.Name); }} {...focusHandlers(c)}>
        {cur < 0 ? <option value={-1}>{key !== null && key !== undefined && key !== '' ? String(key) : ''}</option> : null}
        {opts.map((o, i) => <option key={i} value={i}>{o.cols.join('   ')}</option>)}
      </select>
    </div>
  );
}

function ListBoxView({ c, p }: { c: TListBox; p: Common }) {
  const items = c.Items.list();
  const isCheck = c instanceof TCheckListBox;
  return (
    <div {...p} className="vc v-list" tabIndex={0} {...focusHandlers(c)}>
      {items.map((s, i) => {
        const sel = c.MultiSelect ? c.sel.has(i) : c.ItemIndex === i;
        return (
          <div key={i} className={`li${sel ? ' sel' : ''}`} onClick={(e) => run(c.userSelect(i, e.ctrlKey), c.Name)} onDoubleClick={() => run(c.fire('OnDblClick', c), c.Name)}>
            {isCheck ? <input type="checkbox" checked={!!(c as TCheckListBox).checks.get(i)} onChange={() => run((c as TCheckListBox).userCheck(i), c.Name)} onClick={(e) => e.stopPropagation()} /> : null}
            {s}
          </div>
        );
      })}
    </div>
  );
}

function DateView({ c, p }: { c: TControl; p: Common }) {
  const isEh = c instanceof TDBDateTimeEditEh;
  const dt = c as TDateTimePicker;
  const kind = isEh ? 'dtkdate' : String(dt.Kind);
  const val: number | null = isEh ? ((c as TDBDateTimeEditEh).Value as number | null) : dt.DateTime;
  const toInput = (v: number | null) => {
    if (v === null || v === undefined || typeof v !== 'number' || isNaN(v)) return '';
    return kind === 'dtktime' ? formatDateTime('hh:nn', v) : formatDateTime('yyyy-mm-dd', v);
  };
  const off = (dt as any).ShowCheckbox && !(dt as any).Checked;
  return (
    <div {...p} style={{ ...p.style, display: 'flex', gap: 4, alignItems: 'center' }}>
      {(dt as any).ShowCheckbox ? <input type="checkbox" checked={!!(dt as any).Checked} onChange={(e) => { (dt as any).Checked = e.target.checked; run(dt.fire('OnChange', dt), c.Name); }} /> : null}
      <input className="v-input" type={kind === 'dtktime' ? 'time' : 'date'} value={toInput(val)} disabled={!c.Enabled || off}
        title={val ? formatDateTime(settings.ShortDateFormat, val) : undefined}
        onChange={(e) => {
          const s = e.target.value;
          if (!s) { if (isEh) run((c as TDBDateTimeEditEh).userSet(null), c.Name); return; }
          let v: number;
          if (kind === 'dtktime') { const [h, m] = s.split(':').map(Number); v = Math.floor(val ?? 0) + (h * 60 + m) / 1440; }
          else { const [y, mo, d] = s.split('-').map(Number); v = toDelphi(new Date(y, mo - 1, d)) + ((val ?? 0) % 1); }
          run(isEh ? (c as TDBDateTimeEditEh).userSet(v) : dt.userSet(v), c.Name);
        }} {...focusHandlers(c)} />
    </div>
  );
}
void fromDelphi;

function PageControlView({ c, p, r }: { c: TPageControl; p: Common; r: Rect }) {
  const pages = c.pages().filter((x) => x.TabVisible);
  const active = c.ActivePage;
  return (
    <div {...p} className="vc v-pagecontrol">
      <div className="v-tabs" role="tablist">
        {pages.map((pg) => (
          <button key={pg.Name} role="tab" aria-selected={pg === active} className={`v-tab${pg === active ? ' on' : ''}`} disabled={!pg.Enabled}
            onClick={() => run(c.userSelect(pg), c.Name)}>{pg.Caption.replace(/&(?!&)/g, '')}</button>
        ))}
      </div>
      {active ? (
        <div style={{ position: 'absolute', left: 4, top: 24, width: r.width - 8, height: r.height - 28 }}>
          <Ctl key={active.Name} c={active} r={{ left: 0, top: 0, width: r.width - 8, height: r.height - 28 }} />
        </div>
      ) : null}
    </div>
  );
}

function SplitterView({ c, p, r }: { c: TSplitter; p: Common; r: Rect }) {
  const horiz = c.Align === 'alleft' || c.Align === 'alright';
  const onDown = (e: React.PointerEvent) => {
    const parent = c.Parent;
    if (!parent) return;
    // the control aligned on the same side just before the splitter is resized
    const sibs = parent.children.filter((k) => k !== c && k.Visible && k.Align === c.Align);
    const target = c.Align === 'alleft' ? sibs.filter((k) => k.Left < c.Left).sort((a, b) => b.Left - a.Left)[0]
      : c.Align === 'alright' ? sibs.filter((k) => k.Left > c.Left).sort((a, b) => a.Left - b.Left)[0]
        : c.Align === 'altop' ? sibs.filter((k) => k.Top < c.Top).sort((a, b) => b.Top - a.Top)[0]
          : sibs.filter((k) => k.Top > c.Top).sort((a, b) => a.Top - b.Top)[0];
    if (!target) return;
    const start = horiz ? e.clientX : e.clientY;
    const startSize = horiz ? target.Width : target.Height;
    const sign = c.Align === 'alright' || c.Align === 'albottom' ? -1 : 1;
    const move = (ev: PointerEvent) => {
      const d = ((horiz ? ev.clientX : ev.clientY) - start) * sign;
      const v = Math.max(c.MinSize, startSize + d);
      if (horiz) target.Width = v; else target.Height = v;
      target.Repaint();
    };
    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); void c.fire('OnMoved', c); };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  void r;
  return <div {...p} className={`vc v-splitter ${horiz ? 'h' : 'v'}`} onPointerDown={onDown} />;
}

/* ------------------------------------------------------------------ toolbar */

function ToolBarView({ c, p, r }: { c: TToolBar; p: Common; r: Rect }) {
  const kids = [...c.children].filter((k) => k.Visible).sort((a, b) => (a.Top - b.Top) || (a.Left - b.Left));
  return (
    <div {...p} className={`vc v-toolbar${c.Wrapable ? ' wrap' : ''}`} style={{ ...p.style, ...bgStyle(c) }}>
      {kids.map((k) => {
        if (k instanceof TToolButton) return <ToolButtonView key={k.Name} b={k} bar={c} />;
        return (
          <div key={k.Name} style={{ position: 'relative', width: k.Width, height: Math.min(k.Height, r.height - 2), flex: 'none' }}>
            <Ctl c={k} r={{ left: 0, top: 0, width: k.Width, height: Math.min(k.Height, r.height - 2) }} />
          </div>
        );
      })}
    </div>
  );
}

function ToolButtonView({ b, bar, style }: { b: TToolButton; bar?: TToolBar; style?: CSSProperties }) {
  const st = String(b.Style);
  if (st === 'tbsseparator' || st === 'tbsdivider') return <div className="tb-sep" style={{ marginLeft: Math.max(0, (b.Width || 8) / 2 - 4), marginRight: Math.max(0, (b.Width || 8) / 2 - 4) }} />;
  const a: any = b.Action;
  const Ic = iconFor(a?.Name, b.Name, b.Caption, b.Hint) ?? (!b.Caption ? Circle : null);
  const showCap = bar ? bar.ShowCaptions : !!b.Caption;
  const capBelow = showCap && bar && !bar.List && bar.Height >= 34;
  const ref = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => { b.dom = ref.current; });
  const click = () => {
    if (st === 'tbsdropdown' && (b.DropdownMenu || b.refs.get('dropdownmenu')) && !b.hasHandler('OnClick') && !a) {
      const pm: TPopupMenu = (b.DropdownMenu ?? b.refs.get('dropdownmenu')) as TPopupMenu;
      const rr = ref.current!.getBoundingClientRect();
      if (typeof (pm as any).Popup === 'function') run(pm.Popup(rr.left, rr.bottom), pm.Name);
      return;
    }
    run(b.Click(), b.Name);
  };
  const dd = st === 'tbsdropdown' ? (b.DropdownMenu ?? b.refs.get('dropdownmenu')) as TPopupMenu | null : null;
  return (
    <span style={{ display: 'inline-flex', ...style }}>
      <button ref={ref} className={`tb-btn${capBelow ? ' cap-below' : ''}${b.Down ? ' down' : ''}`} disabled={!b.Enabled} title={b.Hint || b.Caption}
        aria-pressed={st === 'tbscheck' ? b.Down : undefined} onClick={click} style={{ minWidth: bar && !showCap ? bar.ButtonWidth : undefined, ...fontStyle(b) }}
        onMouseDown={noFocus} tabIndex={-1}>
        {Ic ? <span className="ic"><Ic size={capBelow ? 16 : 14} /></span> : null}
        {showCap && b.Caption ? <span>{b.Caption.replace(/&(?!&)/g, '')}</span> : null}
      </button>
      {dd && (a || b.hasHandler('OnClick')) ? (
        <button className="tb-btn" style={{ padding: '0 2px' }} disabled={!b.Enabled} onClick={(e) => { const rr = (e.currentTarget as HTMLElement).getBoundingClientRect(); run(dd.Popup(rr.left, rr.bottom), dd.Name); }}><ChevronDown size={12} /></button>
      ) : null}
    </span>
  );
}

/* ------------------------------------------------------------------ grid */

const ROW_H = 22;

function GridView({ g, p, r }: { g: TDBGrid; p: Common; r: Rect }) {
  const ds = g.DataSet;
  const [scroll, setScroll] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const cols = g.visibleColumns();
  const ind = g.Options.includes('dgindicator');
  const titles = g.Options.includes('dgtitles');
  const rowSelect = g.Options.includes('dgrowselect');
  const multi = g.Options.includes('dgmultiselect');
  const active = !!ds?.Active;
  const count = active ? ds!.view.length : 0;
  const insertAt = active ? ds!.insertIndex() : -1;
  const total = count + (insertAt >= 0 ? 1 : 0);
  const cur = active ? ds!.currentIndex : -1;
  const viewH = r.height - (titles ? ROW_H : 0);
  const first = Math.max(0, Math.floor(scroll / ROW_H) - 5);
  const last = Math.min(total, first + Math.ceil(viewH / ROW_H) + 12);
  const rowsKey = active ? ds!.rows : null;
  // in-place cell editor (dgEditing), as TDBGrid's InplaceEditor
  const [ed, setEd] = useState<{ row: number; col: number; text: string } | null>(null);
  const editRow = insertAt >= 0 ? insertAt : cur;
  const canEdit = (ci: number) => {
    const col = cols[ci]; const f = col?.Field;
    return !!f && !!g.DataSource && g.Options.includes('dgediting') && !rowSelect && !g.ReadOnly && !(col as any).ReadOnly
      && !f.ReadOnly && f.FieldKind === 'fkdata' && f.fieldType !== 'boolean' && !(ds as any)?.ReadOnly;
  };
  const openEd = (initial?: string) => {
    const ci = g.SelectedIndex;
    if (!active || editRow < 0 || !canEdit(ci)) return false;
    setEd({ row: editRow, col: ci, text: initial ?? cols[ci].Field!.Text });
    return true;
  };
  const commitEd = async (text: string) => {
    const e = ed; setEd(null);
    box.current?.focus({ preventScroll: true });
    if (!e) return;
    const f = cols[e.col]?.Field;
    if (!f || text === f.Text) return;
    await g.DataSource!.editField(f, f.fieldType === 'string' ? text : f.fromString(text));
  };
  useEffect(() => { if (ed && (ed.row !== editRow || ed.col !== g.SelectedIndex)) setEd(null); }, [editRow, g.SelectedIndex]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { g.markStylesDirty(); }, [rowsKey, count, g]);
  useEffect(() => { if (active) void g.computeStyles(); });
  // keep current row visible
  useEffect(() => {
    const el = box.current;
    if (!el || cur < 0) return;
    const top = cur * ROW_H;
    if (top < el.scrollTop) el.scrollTop = top;
    else if (top + ROW_H > el.scrollTop + viewH) el.scrollTop = top + ROW_H - viewH;
  }, [cur, viewH]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!ds || !active) return;
    const shift = shiftOf(e);
    if (hasKeyHandlers(g, false)) void keyEvents(g, { key: e.key, keyCode: e.keyCode, shift }, 'down');
    const ch = pressChar(e);
    if (ch && hasKeyHandlers(g, true)) void runGuarded(() => keyEvents(g, { key: ch, keyCode: e.keyCode, shift }, 'press'), g.Name);
    const page = Math.max(1, Math.floor(viewH / ROW_H) - 1);
    const go = (i: number) => { e.preventDefault(); run(ds.gotoIndex(Math.max(0, Math.min(count - 1, i))), g.Name); };
    if ((e.key === 'F2' || e.key === 'Enter') && openEd()) { e.preventDefault(); return; }
    if (ch && !e.ctrlKey && !e.altKey && !e.metaKey && openEd(ch)) { e.preventDefault(); return; }
    switch (e.key) {
      case 'ArrowDown': go(cur + 1); break;
      case 'ArrowUp': go(cur - 1); break;
      case 'PageDown': go(cur + page); break;
      case 'PageUp': go(cur - page); break;
      case 'Home': if (e.ctrlKey) go(0); break;
      case 'End': if (e.ctrlKey) go(count - 1); break;
      case 'ArrowLeft': e.preventDefault(); g.SelectedIndex = Math.max(0, g.SelectedIndex - 1); break;
      case 'ArrowRight': e.preventDefault(); g.SelectedIndex = Math.min(cols.length - 1, g.SelectedIndex + 1); break;
      case 'Escape': if (ds.isEditing()) { e.preventDefault(); run(ds.Cancel(), g.Name); } break;
      case ' ': if (multi && e.ctrlKey) { e.preventDefault(); g.SelectedRows.CurrentRowSelected = !g.SelectedRows.CurrentRowSelected; } break;
    }
  };

  const rows: ReactNode[] = [];
  for (let i = first; i < last; i++) {
    const isInsertRow = insertAt >= 0 && i === insertAt;
    const viewIdx = insertAt >= 0 && i > insertAt ? i - 1 : i;
    const values = isInsertRow ? ds!.editBuffer! : (cur === viewIdx && ds!.isEditing() && insertAt < 0 ? ds!.editBuffer! : ds!.rowValues(viewIdx));
    if (!values) continue;
    const rowObj = isInsertRow ? null : ds!.rows[ds!.view[viewIdx]];
    const styles = rowObj ? g.styles.get(rowObj) : undefined;
    const isCur = isInsertRow || (insertAt < 0 && viewIdx === cur);
    const msel = rowObj ? g.SelectedRows.set.has(rowObj) : false;
    const cls = [isCur ? (rowSelect ? 'rowsel' : 'cur') : '', msel ? 'msel' : '', isCur && ds!.isEditing() ? 'editing' : ''].join(' ');
    rows.push(
      <tr key={isInsertRow ? 'ins' : viewIdx} className={cls} style={{ height: ROW_H }}
        onDoubleClick={() => { if (!g.hasHandler('OnDblClick') && openEd()) return; run(g.userDblClick(), g.Name); }}>
        {ind ? <td className="ind">{isCur ? (ds!.isEditing() ? (isInsertRow ? '*' : '✎') : <Play size={9} fill="currentColor" />) : msel ? '•' : ''}</td> : null}
        {cols.map((col, ci) => {
          const f = col.Field;
          const v = values[col.FieldName.toUpperCase()];
          const text = f ? f.toDisplay(v) : v === null || v === undefined ? '' : String(v);
          const st = styles?.get(ci);
          const isNum = f ? f.fieldType === 'float' || f.fieldType === 'integer' : typeof v === 'number';
          const align = col.Alignment ? (col.Alignment === 'tarightjustify' ? 'right' : col.Alignment === 'tacenter' ? 'center' : 'left') : undefined;
          const colBg = col.Color !== -2147483643 ? toCss(col.Color) : undefined;
          return (
            <td key={ci} className={`${isNum && !align ? 'num' : ''}${isCur && ci === g.SelectedIndex ? ' cell-sel' : ''}`}
              style={{ textAlign: align, background: !isCur && st?.bg !== undefined ? toCss(st.bg) : !isCur ? colBg : undefined, color: !isCur && st?.fg !== undefined ? toCss(st.fg) : undefined, fontWeight: st?.bold ? 600 : undefined, fontStyle: st?.italic ? 'italic' : undefined, textDecoration: st?.strike ? 'line-through' : undefined }}
              onMouseDown={(e) => {
                if (ed && isCur && ci === ed.col) return;
                // VCL TDBGrid: only the left button moves the record / changes the selection (right = popup)
                if (e.button !== 0) return;
                const again = isCur && ci === g.SelectedIndex && !e.ctrlKey && !e.shiftKey;
                if (!isInsertRow) run(g.userClickCell(viewIdx, ci, { ctrl: e.ctrlKey || e.metaKey, shift: e.shiftKey }), g.Name);
                if (again) { e.preventDefault(); openEd(); }
              }}>
              {ed && isCur && ci === ed.col ? (
                <>{(col as any).PickList?.Count ? (
                  <datalist id={`pl-${g.Name}-${ci}`}>{String((col as any).PickList.Text).split('\r\n').filter((x: string) => x !== '').map((x: string) => <option key={x} value={x} />)}</datalist>
                ) : null}
                <input className="cell-ed" autoFocus value={ed.text} spellCheck={false} style={{ textAlign: align ?? (isNum ? 'right' : 'left') }}
                  list={(col as any).PickList?.Count ? `pl-${g.Name}-${ci}` : undefined}
                  maxLength={f?.fieldType === 'string' && f.Size ? f.Size : undefined}
                  onChange={(ev) => setEd({ ...ed, text: ev.target.value })}
                  onFocus={(ev) => ev.currentTarget.select()}
                  onBlur={() => run(commitEd(ed.text), g.Name)}
                  onKeyDown={(ev) => {
                    ev.stopPropagation();
                    if (ev.key === 'Enter') { ev.preventDefault(); run(commitEd(ed.text), g.Name); }
                    else if (ev.key === 'Escape') { ev.preventDefault(); setEd(null); box.current?.focus({ preventScroll: true }); }
                    else if (ev.key === 'Tab') {
                      ev.preventDefault();
                      const next = Math.max(0, Math.min(cols.length - 1, g.SelectedIndex + (ev.shiftKey ? -1 : 1)));
                      run(commitEd(ed.text).then(() => { g.SelectedIndex = next; }), g.Name);
                    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
                      ev.preventDefault();
                      const to = Math.max(0, Math.min(count - 1, cur + (ev.key === 'ArrowUp' ? -1 : 1)));
                      run(commitEd(ed.text).then(() => ds!.gotoIndex(to)), g.Name);
                    }
                  }} /></>
              ) : f?.fieldType === 'boolean' ? (v ? '✓' : '') : text}
            </td>
          );
        })}
        <td style={{ border: 0, background: 'transparent' }} />
      </tr>,
    );
  }
  const colW = (col: TColumn) => Math.max(24, col.Width || 64);
  return (
    <div {...p} className={`vc v-grid${g.Options.includes('dgcollines') ? '' : ' nolines'}`} ref={(el) => { box.current = el; (p.ref as any).current = el; }}
      tabIndex={0} onKeyDown={onKey} onScroll={(e) => setScroll(e.currentTarget.scrollTop)} {...focusHandlers(g)}
      style={{ ...p.style, ...fontStyle(g) }}>
      <table style={{ width: (ind ? 14 : 0) + cols.reduce((s, c) => s + colW(c), 0) + 2 }}>
        <colgroup>
          {ind ? <col style={{ width: 14 }} /> : null}
          {cols.map((c, i) => <col key={i} style={{ width: colW(c) }} />)}
          <col />
        </colgroup>
        {titles ? (
          <thead>
            <tr>
              {ind ? <th className="ind" /> : null}
              {cols.map((c, i) => <th key={i} title={c.DisplayName} onClick={() => run(g.userTitleClick(i), g.Name)} style={{ textAlign: c.Title.Alignment === 'tarightjustify' ? 'right' : c.Title.Alignment === 'tacenter' ? 'center' : undefined }}>{c.Title.Caption || c.Field?.DisplayLabel || c.FieldName}</th>)}
              <th style={{ borderRight: 0 }} />
            </tr>
          </thead>
        ) : null}
        <tbody>
          {first > 0 ? <tr style={{ height: first * ROW_H }}><td colSpan={cols.length + 2} style={{ padding: 0, border: 0 }} /></tr> : null}
          {rows}
          {last < total ? <tr style={{ height: (total - last) * ROW_H }}><td colSpan={cols.length + 2} style={{ padding: 0, border: 0 }} /></tr> : null}
        </tbody>
      </table>
      {active && total === 0 ? <div className="empty">Qeyd yoxdur</div> : null}
    </div>
  );
}

function StringGridView({ g, p }: { g: TStringGrid; p: Common }) {
  const rows: ReactNode[] = [];
  for (let rr = 0; rr < g.RowCount; rr++) {
    const cells: ReactNode[] = [];
    for (let cc = 0; cc < g.ColCount; cc++) {
      const fixed = rr < g.FixedRows || cc < g.FixedCols;
      const txt = g.cells.get(`${cc},${rr}`) ?? '';
      cells.push(fixed ? <th key={cc} style={{ width: g.colW.get(cc) ?? g.DefaultColWidth, position: rr < g.FixedRows ? 'sticky' : undefined }}>{txt}</th>
        : <td key={cc} className={g.Row === rr && g.Col === cc ? 'cell-sel' : ''} onMouseDown={() => run(g.userSelect(cc, rr), g.Name)}>{txt}</td>);
    }
    rows.push(<tr key={rr} className={g.Row === rr ? 'cur' : ''}>{cells}</tr>);
  }
  return <div {...p} className="vc v-grid" tabIndex={0}><table><tbody>{rows}</tbody></table></div>;
}

function TreeViewView({ t, p }: { t: TTreeView; p: Common }) {
  const render = (nodes: TTreeNode[], d: number): ReactNode[] => nodes.flatMap((n) => [
    <div key={`${d}-${n.AbsoluteIndex}`} className={`tnode${t.Selected === n ? ' sel' : ''}`} style={{ ['--d' as any]: d }}
      onClick={() => run(t.userSelect(n), t.Name)} onDoubleClick={() => run(t.fire('OnDblClick', t), t.Name)}>
      <span className="tw" onClick={(e) => { e.stopPropagation(); if (n.nodes.length) { n.Expanded = !n.Expanded; t.Repaint(); } }}>
        {n.nodes.length ? (n.Expanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />) : null}
      </span>{n.Text}
    </div>,
    ...(n.Expanded ? render(n.nodes, d + 1) : []),
  ]);
  return <div {...p} className="vc v-tree" tabIndex={0}>{render(t.Items.roots, 0)}</div>;
}

function ListViewView({ l, p }: { l: TListView; p: Common }) {
  const cols = l.Columns.all() as any[];
  return (
    <div {...p} className="vc v-grid" tabIndex={0}>
      <table>
        {cols.length ? <thead><tr>{cols.map((c, i) => <th key={i} style={{ width: c.Width }}>{c.Caption}</th>)}</tr></thead> : null}
        <tbody>
          {l.Items.arr.map((it, i) => (
            <tr key={i} className={it.Selected ? 'cur' : ''} onMouseDown={() => run(l.userSelect(i), l.Name)} onDoubleClick={() => run(l.fire('OnDblClick', l), l.Name)}>
              <td>{l.Checkboxes ? <input type="checkbox" checked={it.Checked} onChange={() => { it.Checked = !it.Checked; l.Repaint(); }} /> : null}{it.Caption}</td>
              {it.SubItems.list().map((s, k) => <td key={k}>{s}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ root */

export function FormBody({ form, width, height }: { form: TCustomForm; width: number; height: number }) {
  useTick();
  form.rect = { left: 0, top: 0, width, height };
  return (
    <div style={{ position: 'relative', width, height, ...bgStyleForm(form) }}>
      <Children parent={form as unknown as TWinControl} width={width} height={height} />
    </div>
  );
}
function bgStyleForm(f: TCustomForm): CSSProperties {
  const c = (f as any)._color;
  if (f.ParentColor || c === -2147483633) return { background: 'var(--surface)' };
  return { background: toCss(c) ?? 'var(--surface)' };
}
export { TTabSheet };
