/*
 * Window handles and messages, for the parts of SmartBank that talk between modules with
 * PostMessage/SendMessage (e.g. a plugin form closing its modal container with
 * PostMessage(OwnerHandle, WM_USER + 139, mrOk, 0)).  Only handles allocated here receive
 * messages; anything else is a no-op as before.
 */
type Receiver = (msg: number, wParam: number, lParam: number) => unknown;

let next = 0x1000;
const receivers = new Map<number, Receiver>();

export function allocHandle(r: Receiver): number {
  const h = (next += 4);
  receivers.set(h, r);
  return h;
}
export function releaseHandle(h: number) { receivers.delete(h); }

export function postMessage(h: unknown, msg: unknown, w: unknown, l: unknown): boolean {
  const r = receivers.get(Number(h));
  if (!r) return true;
  queueMicrotask(() => { void r(Number(msg), Number(w ?? 0), Number(l ?? 0)); });
  return true;
}

export async function sendMessage(h: unknown, msg: unknown, w: unknown, l: unknown): Promise<number> {
  const r = receivers.get(Number(h));
  if (!r) return 0;
  return Number((await r(Number(msg), Number(w ?? 0), Number(l ?? 0))) ?? 0);
}

export const WM_USER = 1024;
export const WM_MODALRESULT = WM_USER + 139;
