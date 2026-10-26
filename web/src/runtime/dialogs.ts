/*
 * Modal dialog service used by ShowMessage / MessageDlg / MessageBox /
 * InputQuery.  The React shell renders the queue; each call resolves when the
 * user answers, exactly like the blocking VCL calls it replaces.
 */
import { suspendHold } from './ui';

export type DlgKind = 'warning' | 'error' | 'information' | 'confirmation' | 'custom';
export interface DlgButton { id: string; label: string; result: number }

export interface DialogRequest {
  id: number;
  kind: DlgKind;
  title: string;
  message: string;
  buttons: DlgButton[];
  input?: { label: string; value: string };
  resolve: (r: { result: number; value?: string }) => void;
}

type Listener = () => void;
let seq = 0;
const queue: DialogRequest[] = [];
const listeners = new Set<Listener>();
const emit = () => listeners.forEach((l) => l());

export const dialogs = {
  current: () => queue[0] as DialogRequest | undefined,
  subscribe(l: Listener) { listeners.add(l); return () => { listeners.delete(l); }; },
  open(req: Omit<DialogRequest, 'id' | 'resolve'>): Promise<{ result: number; value?: string }> {
    const unhold = suspendHold(); // the form behind repaints while the box waits (Delphi modal loop)
    return new Promise((resolve) => {
      const r: DialogRequest = {
        ...req, id: ++seq,
        resolve: (x) => { queue.splice(queue.indexOf(r), 1); unhold(); emit(); resolve(x); },
      };
      queue.push(r);
      emit();
    });
  },
};

/* Modal results (Controls.pas) */
export const MR = { mrNone: 0, mrOk: 1, mrCancel: 2, mrAbort: 3, mrRetry: 4, mrIgnore: 5, mrYes: 6, mrNo: 7, mrAll: 8,
  mrNoToAll: 9, mrYesToAll: 10, mrClose: 11 } as const;

const BTN: Record<string, DlgButton> = {
  mbyes: { id: 'yes', label: 'Bəli', result: MR.mrYes },
  mbno: { id: 'no', label: 'Xeyr', result: MR.mrNo },
  mbok: { id: 'ok', label: 'OK', result: MR.mrOk },
  mbcancel: { id: 'cancel', label: 'İmtina', result: MR.mrCancel },
  mbabort: { id: 'abort', label: 'Dayandır', result: MR.mrAbort },
  mbretry: { id: 'retry', label: 'Təkrar', result: MR.mrRetry },
  mbignore: { id: 'ignore', label: 'Keç', result: MR.mrIgnore },
  mball: { id: 'all', label: 'Hamısı', result: MR.mrAll },
  mbnotoall: { id: 'notoall', label: 'Heç biri', result: MR.mrNoToAll },
  mbyestoall: { id: 'yestoall', label: 'Hamısına bəli', result: MR.mrYesToAll },
  mbclose: { id: 'close', label: 'Bağla', result: MR.mrClose },
  mbhelp: { id: 'help', label: 'Kömək', result: 0 },
};

export function buttonsFromSet(set: unknown): DlgButton[] {
  const arr = Array.isArray(set) ? set : [set];
  const out = arr.map((b) => BTN[String(b).toLowerCase()]).filter(Boolean);
  return out.length ? out : [BTN.mbok];
}

const KIND_BY_MT = ['warning', 'error', 'information', 'confirmation', 'custom'] as const;
const TITLE: Record<DlgKind, string> = {
  warning: 'Xəbərdarlıq', error: 'Səhv', information: 'Məlumat', confirmation: 'Təsdiq', custom: 'SmartBank',
};

export async function messageDlg(msg: unknown, mt: unknown, buttons: unknown): Promise<number> {
  const kind = typeof mt === 'number' ? KIND_BY_MT[mt] ?? 'custom' : 'custom';
  const r = await dialogs.open({ kind, title: TITLE[kind], message: String(msg ?? ''), buttons: buttonsFromSet(buttons) });
  return r.result;
}

export async function showMessage(msg: unknown): Promise<void> {
  await dialogs.open({ kind: 'information', title: 'SmartBank', message: String(msg ?? ''), buttons: [BTN.mbok] });
}

/* Windows MessageBox flags */
export const MB = {
  MB_OK: 0, MB_OKCANCEL: 1, MB_ABORTRETRYIGNORE: 2, MB_YESNOCANCEL: 3, MB_YESNO: 4, MB_RETRYCANCEL: 5,
  MB_ICONHAND: 0x10, MB_ICONERROR: 0x10, MB_ICONSTOP: 0x10, MB_ICONQUESTION: 0x20, MB_ICONEXCLAMATION: 0x30,
  MB_ICONWARNING: 0x30, MB_ICONASTERISK: 0x40, MB_ICONINFORMATION: 0x40, MB_DEFBUTTON1: 0, MB_DEFBUTTON2: 0x100,
  MB_DEFBUTTON3: 0x200, MB_APPLMODAL: 0, MB_SYSTEMMODAL: 0x1000, MB_TASKMODAL: 0x2000, MB_TOPMOST: 0x40000,
  IDOK: 1, IDCANCEL: 2, IDABORT: 3, IDRETRY: 4, IDIGNORE: 5, IDYES: 6, IDNO: 7, IDCLOSE: 8,
} as const;

export async function messageBox(text: unknown, caption: unknown, flags: unknown): Promise<number> {
  const f = Number(flags ?? 0);
  const btnSet = f & 0xf;
  const icon = f & 0xf0;
  const sets: Record<number, string[]> = {
    0: ['mbok'], 1: ['mbok', 'mbcancel'], 2: ['mbabort', 'mbretry', 'mbignore'], 3: ['mbyes', 'mbno', 'mbcancel'],
    4: ['mbyes', 'mbno'], 5: ['mbretry', 'mbcancel'],
  };
  const kind: DlgKind = icon === 0x10 ? 'error' : icon === 0x20 ? 'confirmation' : icon === 0x30 ? 'warning'
    : icon === 0x40 ? 'information' : 'custom';
  const r = await dialogs.open({ kind, title: String(caption ?? 'SmartBank'), message: String(text ?? ''),
    buttons: buttonsFromSet(sets[btnSet] ?? ['mbok']) });
  return r.result; // MR values coincide with IDxxx values
}

export async function inputQuery(caption: unknown, prompt: unknown, value: string): Promise<{ ok: boolean; value: string }> {
  const r = await dialogs.open({ kind: 'custom', title: String(caption ?? ''), message: '',
    input: { label: String(prompt ?? ''), value }, buttons: [BTN.mbok, BTN.mbcancel] });
  return { ok: r.result === MR.mrOk, value: r.value ?? value };
}
