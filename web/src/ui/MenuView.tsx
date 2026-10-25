/* Menu bar + dropdowns used by the shell and by forms with a TMainMenu / TPopupMenu. */
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import type { TMenuItem } from '../runtime/vcl/actions';
import { runGuarded } from '../runtime/vcl/component';

export interface MenuSpec {
  caption: string;
  enabled?: boolean;
  checked?: boolean;
  shortcut?: string;
  separator?: boolean;
  children?: MenuSpec[];
  onClick?: () => void;
  icon?: ReactNode;
}

export function shortcutText(sc: number): string {
  if (!sc) return '';
  const key = sc & 0xff;
  const parts: string[] = [];
  if (sc & 0x4000) parts.push('Ctrl');
  if (sc & 0x2000) parts.push('Shift');
  if (sc & 0x8000) parts.push('Alt');
  let k = '';
  if (key >= 112 && key <= 123) k = 'F' + (key - 111);
  else if (key === 13) k = 'Enter';
  else if (key === 27) k = 'Esc';
  else if (key === 46) k = 'Del';
  else if (key === 45) k = 'Ins';
  else k = String.fromCharCode(key);
  parts.push(k);
  return parts.join('+');
}

/** Convert VCL menu items to specs (evaluated at render, so Enabled/Checked stay live). */
export function fromMenuItems(items: TMenuItem[]): MenuSpec[] {
  return items.filter((m) => m.Visible).map((m) => (m.Caption === '-' ? { caption: '-', separator: true } : {
    caption: m.Caption.replace(/&(?!&)/g, ''),
    enabled: m.Enabled,
    checked: m.Checked,
    shortcut: shortcutText(m.ShortCut),
    children: m.items.length ? fromMenuItems(m.items) : undefined,
    onClick: m.items.length ? undefined : () => { void runGuarded(() => m.Click(), m.Name); },
  }));
}

export function Dropdown({ items, onClose, style }: { items: MenuSpec[]; onClose: () => void; style?: React.CSSProperties }) {
  return (
    <div className="dropdown" role="menu" style={style}>
      {items.map((it, i) => it.separator ? <div key={i} className="dd-sep" /> : <DropItem key={i} it={it} onClose={onClose} />)}
    </div>
  );
}

function DropItem({ it, onClose }: { it: MenuSpec; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  if (it.children) {
    return (
      <div className="dd-sub" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <button className="dd-item" role="menuitem" disabled={it.enabled === false} onClick={() => setOpen((o) => !o)}>
          <span className="chk">{it.checked ? <Check size={13} /> : it.icon}</span>{it.caption}
          <span className="sc"><ChevronRight size={13} /></span>
        </button>
        {open && <Dropdown items={it.children} onClose={onClose} />}
      </div>
    );
  }
  return (
    <button className="dd-item" role="menuitem" disabled={it.enabled === false}
      onClick={() => { onClose(); it.onClick?.(); }}>
      <span className="chk">{it.checked ? <Check size={13} /> : it.icon}</span>{it.caption}
      {it.shortcut ? <span className="sc">{it.shortcut}</span> : null}
    </button>
  );
}

export function MenuBar({ items, className = 'win-menu' }: { items: MenuSpec[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open === null) return;
    const h = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(null); };
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('mousedown', h);
    document.addEventListener('keydown', k);
    return () => { document.removeEventListener('mousedown', h); document.removeEventListener('keydown', k); };
  }, [open]);
  return (
    <div className={className} ref={ref} role="menubar">
      {items.map((m, i) => (
        <div className="mb-item" key={i} onMouseEnter={() => open !== null && setOpen(i)}>
          <button className="mb-btn" aria-expanded={open === i} disabled={m.enabled === false}
            onClick={() => (m.children ? setOpen(open === i ? null : i) : m.onClick?.())}>{m.caption}</button>
          {open === i && m.children && <Dropdown items={m.children} onClose={() => setOpen(null)} />}
        </div>
      ))}
    </div>
  );
}
