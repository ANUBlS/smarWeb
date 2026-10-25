/** Non-blocking notifications (bottom-right), used for runtime gaps and API notices. */
export interface Toast { id: number; text: string; kind: 'warn' | 'info' }
let seq = 0;
let items: Toast[] = [];
const ls = new Set<() => void>();
export function toast(text: string, kind: Toast['kind'] = 'warn') {
  const t = { id: ++seq, text, kind };
  items = [...items.slice(-3), t];
  ls.forEach((l) => l());
  setTimeout(() => { items = items.filter((x) => x !== t); ls.forEach((l) => l()); }, 6000);
}
export const toasts = {
  get: () => items,
  subscribe(l: () => void) { ls.add(l); return () => { ls.delete(l); }; },
  dismiss(id: number) { items = items.filter((x) => x.id !== id); ls.forEach((l) => l()); },
};
