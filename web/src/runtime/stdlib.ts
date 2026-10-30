/*
 * Root globals: Delphi RTL / VCL functions, constants and exception types
 * that transpiled code reaches when an identifier is not declared in any unit.
 */
import { NOTFOUND, Found, routine, Ref, PasException, AbortSignal, PType, TObject, isPObj, pointerHandle, derefPointer } from './core';
import { getBuiltin } from './env';
import { num, str, rangeOf } from './pascal';
import {
  toDelphi, encodeDate, encodeTime, decode, formatDateTime, parseDate, nowDelphi, todayDelphi, settings,
} from './datetime';
import { messageDlg, showMessage, messageBox, inputQuery, MR, MB } from './dialogs';
import { logger } from './log';
import { postMessage, sendMessage } from './messages';

const G = new Map<string, unknown>();
const def = (name: string, v: unknown) => G.set(name.toLowerCase(), v);
const fn = (name: string, f: (...a: any[]) => any) => G.set(name.toLowerCase(), routine(f, name));

export function rootLookup(lname: string): Found {
  if (G.has(lname)) return G.get(lname);
  const b = getBuiltin(lname);
  if (b) return builtinType(lname, b);
  if (/^t[a-z]/.test(lname) || /^e[a-z]/.test(lname) || /^i[a-z]/.test(lname)) return genericType(lname);
  const enumName = enumConstant(lname);
  if (enumName !== undefined) return enumName;
  return NOTFOUND;
}

/* Unit-qualified RTL/VCL names (System.Delete, SysUtils.Format, Math.Max, Windows.MessageBox …)
   resolve to the same runtime globals as the bare names. */
class UnitQualifier extends TObject {
  constructor(public unitName: string) { super(); }
  pget(l: string): Found { return rootLookup(l); }
  pset() { return false; }
}
for (const u of ['System', 'SysUtils', 'StrUtils', 'Math', 'DateUtils', 'Variants', 'Windows', 'Classes', 'Dialogs',
  'Forms', 'Controls', 'Graphics', 'Messages', 'ShellAPI', 'DB', 'Types', 'WinApi.Windows', 'System.SysUtils',
  'System.Classes', 'System.Variants', 'System.StrUtils', 'System.Math', 'System.DateUtils', 'Vcl.Forms', 'Vcl.Dialogs']) {
  G.set(u.toLowerCase(), new UnitQualifier(u));
}

/* ------------------------------------------------------------------ types */

const typeCache = new Map<string, PType>();

export function builtinType(lname: string, ctor = getBuiltin(lname)!): PType {
  let t = typeCache.get(lname);
  if (!t) {
    const name: string = (ctor as any).pascalName ?? lname;
    t = {
      __type: true,
      name,
      async create(args: any[]) {
        const o = new ctor() as any;
        if (typeof o.Create === 'function') await o.Create(...args);
        return o;
      },
      isAncestorOf: (n: string) => {
        const l = n.toLowerCase();
        for (let p = ctor.prototype; p && p !== Object.prototype; p = Object.getPrototypeOf(p)) {
          if ((p.constructor as any)?.pascalName?.toLowerCase() === l) return true;
        }
        return false;
      },
    };
    typeCache.set(lname, t);
  }
  return t;
}

function genericType(lname: string): PType {
  let t = typeCache.get(lname);
  if (!t) {
    const isExc = lname.startsWith('e');
    t = {
      __type: true,
      name: lname,
      async create(args: any[]) {
        if (isExc) return new PasException(properName(lname), str(args[0]), ['exception']);
        return new TObject();
      },
    };
    typeCache.set(lname, t);
  }
  return t;
}

const properName = (l: string) => l.charAt(0).toUpperCase() + l.slice(1);

/** Exception classes with Create/CreateFmt/CreateRes. */
function excType(name: string, parents: string[]): PType {
  const t: PType & Record<string, unknown> = {
    __type: true,
    name,
    async create(args: any[]) {
      const e = new PasException(name, str(args[0]), parents);
      if (name === 'EOracleError' && args[1] !== undefined) (e as any).errorCode = num(args[1]);
      return e;
    },
    isAncestorOf: (n: string) => [name.toLowerCase(), ...parents].includes(n.toLowerCase()),
  };
  return t;
}

const EXC: Record<string, string[]> = {
  Exception: [],
  EAbort: ['exception'],
  EConvertError: ['exception'],
  EDatabaseError: ['exception'],
  EOracleError: ['edatabaseerror', 'exception'],
  EAccessViolation: ['eexternal', 'exception'],
  EZeroDivide: ['ematherror', 'exception'],
  EDivByZero: ['eintoverflow', 'exception'],
  EMathError: ['exception'],
  EInvalidOp: ['ematherror', 'exception'],
  EOverflow: ['ematherror', 'exception'],
  EVariantError: ['exception'],
  EListError: ['exception'],
  EStringListError: ['exception'],
  EInOutError: ['exception'],
  EOleException: ['eoleerror', 'exception'],
  EOleError: ['exception'],
  EOleSysError: ['eoleerror', 'exception'],
  EInvalidCast: ['exception'],
  EInvalidPointer: ['exception'],
  EComponentError: ['exception'],
  EIntOverflow: ['exception'],
  ERangeError: ['exception'],
  ESmartError: ['exception'],
  ESessionKilled: ['exception'],
};
for (const [n, p] of Object.entries(EXC)) def(n, excType(n, p.length ? p : ['exception']));
// Exception.Create / CreateFmt
for (const n of Object.keys(EXC)) {
  const t = G.get(n.toLowerCase()) as any;
  t.def = undefined;
}

/* ------------------------------------------------------------------ constants */

for (const [k, v] of Object.entries(MR)) def(k, v);
for (const [k, v] of Object.entries(MB)) def(k, v);
['mtWarning', 'mtError', 'mtInformation', 'mtConfirmation', 'mtCustom'].forEach((n, i) => def(n, i));
['mbYes', 'mbNo', 'mbOK', 'mbCancel', 'mbAbort', 'mbRetry', 'mbIgnore', 'mbAll', 'mbNoToAll', 'mbYesToAll', 'mbHelp',
  'mbClose'].forEach((n) => def(n, n));
def('mbYesNoCancel', ['mbYes', 'mbNo', 'mbCancel']);
def('mbYesNo', ['mbYes', 'mbNo']);
def('mbOKCancel', ['mbOK', 'mbCancel']);
def('mbAbortRetryIgnore', ['mbAbort', 'mbRetry', 'mbIgnore']);
def('mbAbortIgnore', ['mbAbort', 'mbIgnore']);
def('EmptyStr', '');
def('True', true);
def('False', false);
def('S_OK', 0);
def('S_FALSE', 1);
def('E_FAIL', -2147467259);
def('WM_USER', 1024);
// Indy SSL options (TIdSSLIOHandlerSocketOpenSSL) — used only to configure the handler
['sslmUnassigned', 'sslmClient', 'sslmServer', 'sslmBoth'].forEach((n, i) => def(n, i));
['sslvSSLv2', 'sslvSSLv23', 'sslvSSLv3', 'sslvTLSv1', 'sslvTLSv1_1', 'sslvTLSv1_2'].forEach((n, i) => def(n, i));
['hoInProcessAuth', 'hoKeepOrigProtocol', 'hoForceEncodeParams', 'hoNoParseMetaHTTPEquiv', 'hoWaitForUnexpectedData'].forEach((n, i) => def(n, i));
// ShlObj special folders (SHGetSpecialFolderPath / SHGetFolderPath)
Object.entries({ CSIDL_DESKTOP: 0, CSIDL_PROGRAMS: 2, CSIDL_PERSONAL: 5, CSIDL_MYDOCUMENTS: 5, CSIDL_FAVORITES: 6,
  CSIDL_STARTUP: 7, CSIDL_RECENT: 8, CSIDL_DESKTOPDIRECTORY: 16, CSIDL_FONTS: 20, CSIDL_APPDATA: 26,
  CSIDL_LOCAL_APPDATA: 28, CSIDL_COMMON_APPDATA: 35, CSIDL_WINDOWS: 36, CSIDL_SYSTEM: 37, CSIDL_PROGRAM_FILES: 38,
  CSIDL_FLAG_CREATE: 0x8000, MAX_PATH: 260 }).forEach(([k, v]) => def(k, v));
fn('SHGetSpecialFolderPath', async (_h, r: Ref) => { if (r && typeof (r as any).set === 'function') await r.set('C:\\Users\\Public\\Desktop'); return true; });
fn('SHGetFolderPath', () => 0);
def('WM_CLOSE', 16);
def('LOCALE_SYSTEM_DEFAULT', 2048);
def('LOCALE_USER_DEFAULT', 1024);
def('HInstance', 0);
def('MainThreadID', 0);
def('Win32Platform', 2);
/** SBTranslateProc (UI language switching) — its source is empty in the repository; calls are no-ops. */
def('SBTranslateProc', new Proxy({}, { get: (_t, k) => (k === 'pget' ? () => routine(() => undefined) : k === 'pset' ? () => true : undefined) }));
fn('TranslateAllCompForms', () => undefined);
fn('FileSize', () => 0);
fn('GetPropInfo', () => null);
fn('SetPropValue', () => undefined);
fn('GetPropValue', () => null);
fn('IsPublishedProp', () => false);
def('Null', null);
def('Unassigned', undefined);
def('nil', null);
def('MaxInt', 2147483647);
def('MaxLongInt', 2147483647);
def('MinInt', -2147483648);
def('PI', Math.PI);
def('sLineBreak', '\r\n');
def('CRLF', '\r\n');

// Delphi colours (BGR). Rendering maps them to CSS.
const COLORS: Record<string, number> = {
  clBlack: 0x000000, clMaroon: 0x000080, clGreen: 0x008000, clOlive: 0x008080, clNavy: 0x800000,
  clPurple: 0x800080, clTeal: 0x808000, clGray: 0x808080, clSilver: 0xc0c0c0, clRed: 0x0000ff, clLime: 0x00ff00,
  clYellow: 0x00ffff, clBlue: 0xff0000, clFuchsia: 0xff00ff, clAqua: 0xffff00, clWhite: 0xffffff,
  clMoneyGreen: 0xc0dcc0, clSkyBlue: 0xf0caa6, clCream: 0xf0fbff, clMedGray: 0xa4a0a0, clLtGray: 0xc0c0c0,
  clDkGray: 0x808080, clNone: 0x1fffffff, clDefault: 0x20000000,
  clScrollBar: -0x7fffffff + 0 - 1 + 1, clBackground: -2147483647, clActiveCaption: -2147483646,
  clInactiveCaption: -2147483645, clMenu: -2147483644, clWindow: -2147483643, clWindowFrame: -2147483642,
  clMenuText: -2147483641, clWindowText: -2147483640, clCaptionText: -2147483639, clActiveBorder: -2147483638,
  clInactiveBorder: -2147483637, clAppWorkSpace: -2147483636, clHighlight: -2147483635,
  clHighlightText: -2147483634, clBtnFace: -2147483633, clBtnShadow: -2147483632, clGrayText: -2147483631,
  clBtnText: -2147483630, clInactiveCaptionText: -2147483629, clBtnHighlight: -2147483628, cl3DDkShadow: -2147483627,
  cl3DLight: -2147483626, clInfoText: -2147483625, clInfoBk: -2147483624,
};
for (const [k, v] of Object.entries(COLORS)) def(k, v);

const CURSORS: Record<string, number> = {
  crDefault: 0, crNone: -1, crArrow: -2, crCross: -3, crIBeam: -4, crSize: -22, crSizeNESW: -6, crSizeNS: -7,
  crSizeNWSE: -8, crSizeWE: -9, crUpArrow: -10, crHourGlass: -11, crDrag: -12, crNoDrop: -13, crHSplit: -14,
  crVSplit: -15, crMultiDrag: -16, crSQLWait: -17, crNo: -18, crAppStart: -19, crHelp: -20, crHandPoint: -21,
};
for (const [k, v] of Object.entries(CURSORS)) def(k, v);

const VK: Record<string, number> = {
  VK_BACK: 8, VK_TAB: 9, VK_RETURN: 13, VK_SHIFT: 16, VK_CONTROL: 17, VK_MENU: 18, VK_ESCAPE: 27, VK_SPACE: 32,
  VK_PRIOR: 33, VK_NEXT: 34, VK_END: 35, VK_HOME: 36, VK_LEFT: 37, VK_UP: 38, VK_RIGHT: 39, VK_DOWN: 40,
  VK_INSERT: 45, VK_DELETE: 46, VK_F1: 112, VK_F2: 113, VK_F3: 114, VK_F4: 115, VK_F5: 116, VK_F6: 117, VK_F7: 118,
  VK_F8: 119, VK_F9: 120, VK_F10: 121, VK_F11: 122, VK_F12: 123, VK_ADD: 107, VK_SUBTRACT: 109,
};
for (const [k, v] of Object.entries(VK)) def(k, v);

/** Enum identifiers (dsEdit, alTop, fsBold…) are represented as lower-case string tokens. */
const ENUM_LOWER = new Set<string>();
function enumConstant(lname: string): string | undefined {
  return ENUM_LOWER.has(lname) ? lname : undefined;
}
/** Register enum identifiers found in generated code (see tools/build.py → enums.json). */
export function registerEnumNames(names: string[]) {
  for (const n of names) ENUM_LOWER.add(n.toLowerCase());
}

/* ------------------------------------------------------------------ helpers */

function isRef(v: unknown): v is Ref { return v instanceof Ref; }
async function deref(v: unknown) { return isRef(v) ? v.get() : v; }

function convError(s: unknown, what = 'valid integer value') {
  return new PasException('EConvertError', `'${str(s)}' is not a ${what}`, ['exception']);
}

function parseFloatStrict(s: unknown): number | null {
  if (typeof s === 'number') return s;
  const t = str(s).trim().replace(/\s/g, '');
  if (!t) return null;
  const norm = settings.DecimalSeparator === ',' ? t.replace(/\./g, '').replace(',', '.') : t.replace(',', '.');
  if (!/^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/.test(norm)) return null;
  return Number(norm);
}

function parseIntStrict(s: unknown): number | null {
  if (typeof s === 'number') return Math.trunc(s);
  const t = str(s).trim();
  if (/^[-+]?\d+$/.test(t)) return parseInt(t, 10);
  if (/^\$[0-9a-f]+$/i.test(t)) return parseInt(t.slice(1), 16);
  return null;
}

/** Delphi's Round uses banker's rounding. */
export function bankersRound(x: number): number {
  const r = Math.round(x);
  if (Math.abs(x % 1) === 0.5) return 2 * Math.round(x / 2);
  return r;
}

function groupThousands(intPart: string, sep: string) {
  return intPart.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

function fixed(v: number, digits: number, thousands: boolean) {
  const s = Math.abs(v).toFixed(digits);
  let [ip, fp] = s.split('.');
  if (thousands) ip = groupThousands(ip, settings.ThousandSeparator);
  return (v < 0 && Number(s) !== 0 ? '-' : '') + ip + (fp ? settings.DecimalSeparator + fp : '');
}

/** Delphi FormatFloat with sections (pos;neg;zero), '0', '#', ',', '.', E+ */
export function formatFloat(fmt: string, value: unknown): string {
  const v = num(value);
  const sections = splitSections(fmt);
  let f = sections[0];
  let val = v;
  if (v < 0 && sections[1] !== undefined) { f = sections[1]; val = -v; }
  else if (v === 0 && sections[2] !== undefined) f = sections[2];
  if (!/[0#]/.test(f)) return f.replace(/["']/g, '');
  // literal prefix/suffix
  const m = /^([^0#.,]*)([0#.,]+(?:[eE][+-]0+)?)(.*)$/.exec(f.replace(/["']([^"']*)["']/g, '$1'));
  if (!m) return String(v);
  const [, pre, pat, post] = m;
  const thousands = pat.includes(',');
  const p = pat.replace(/,/g, '');
  const dot = p.indexOf('.');
  const ipat = dot < 0 ? p : p.slice(0, dot);
  const fpat = dot < 0 ? '' : p.slice(dot + 1);
  const minFrac = (fpat.match(/0/g) ?? []).length;
  const maxFrac = fpat.length;
  const minInt = (ipat.match(/0/g) ?? []).length;
  let s = Math.abs(val).toFixed(maxFrac);
  let [ip, fp = ''] = s.split('.');
  while (fp.length > minFrac && fp.endsWith('0')) fp = fp.slice(0, -1);
  if (minInt === 0 && ip === '0') ip = '';
  ip = ip.padStart(minInt, '0');
  if (thousands) ip = groupThousands(ip, settings.ThousandSeparator);
  const neg = val < 0 && Number(s) !== 0 && sections[1] === undefined ? '-' : '';
  return pre + neg + ip + (fp ? settings.DecimalSeparator + fp : '') + post;
}

function splitSections(f: string): string[] {
  const out: string[] = [];
  let cur = '';
  let q: string | null = null;
  for (const c of f) {
    if (q) { cur += c; if (c === q) q = null; continue; }
    if (c === '"' || c === "'") { q = c; cur += c; continue; }
    if (c === ';') { out.push(cur); cur = ''; continue; }
    cur += c;
  }
  out.push(cur);
  return out;
}

/** Delphi Format(): %[index:][-][width][.prec]type */
export function format(fmt: string, args: unknown[]): string {
  let ai = 0;
  return str(fmt).replace(/%(?:(\d+|\*):)?(-)?(\d+|\*)?(?:\.(\d+|\*))?([sdufegnmxp%])/gi, (all, idx, left, width, prec, t) => {
    if (t === '%') return '%';
    if (idx !== undefined) ai = idx === '*' ? num(args[ai++]) : Number(idx);
    let w = width === '*' ? num(args[ai++]) : width !== undefined ? Number(width) : 0;
    const p = prec === '*' ? num(args[ai++]) : prec !== undefined ? Number(prec) : undefined;
    const a = args[ai++];
    let out: string;
    switch (t.toLowerCase()) {
      case 's': out = str(a); if (p !== undefined) out = out.slice(0, p); break;
      case 'd': out = String(Math.trunc(num(a))); if (p !== undefined) out = out.padStart(p, '0'); break;
      case 'u': out = String(Math.abs(Math.trunc(num(a)))); break;
      case 'f': out = fixed(num(a), p ?? 2, false); break;
      case 'n': out = fixed(num(a), p ?? 2, true); break;
      case 'm': out = fixed(num(a), p ?? settings.CurrencyDecimals, true) + ' ' + settings.CurrencyString; break;
      case 'e': out = num(a).toExponential(p !== undefined ? p - 1 : 14).toUpperCase(); break;
      case 'g': out = str(num(a)); break;
      case 'x': out = Math.trunc(num(a)).toString(16).toUpperCase(); if (p !== undefined) out = out.padStart(p, '0'); break;
      case 'p': out = '00000000'; break;
      default: out = all;
    }
    if (w && out.length < w) out = left ? out.padEnd(w) : out.padStart(w);
    return out;
  });
}

function floatToStr(v: unknown) {
  const n = num(v);
  if (Number.isInteger(n)) return String(n);
  return String(Number(n.toPrecision(15))).replace('.', settings.DecimalSeparator);
}

function toDateValue(v: unknown): number {
  if (typeof v === 'number') return v;
  if (v instanceof Date) return toDelphi(v);
  if (typeof v === 'string') return parseDate(v) ?? 0;
  return num(v);
}

/* ------------------------------------------------------------------ string routines */

fn('IntToStr', (v) => String(Math.trunc(num(v))));
fn('Int64ToStr', (v) => String(Math.trunc(num(v))));
fn('IntToHex', (v, d) => Math.trunc(num(v)).toString(16).toUpperCase().padStart(num(d), '0'));
fn('StrToInt', (s) => { const r = parseIntStrict(s); if (r === null) throw convError(s); return r; });
fn('StrToInt64', (s) => { const r = parseIntStrict(s); if (r === null) throw convError(s); return r; });
fn('StrToIntDef', (s, d) => parseIntStrict(s) ?? d);
fn('StrToInt64Def', (s, d) => parseIntStrict(s) ?? d);
fn('TryStrToInt', async (s, r: Ref) => { const v = parseIntStrict(s); if (v === null) return false; await r.set(v); return true; });
fn('StrToFloat', (s) => { const r = parseFloatStrict(s); if (r === null) throw convError(s, 'valid floating point value'); return r; });
fn('StrToFloatDef', (s, d) => parseFloatStrict(s) ?? d);
fn('StrToCurr', (s) => { const r = parseFloatStrict(s); if (r === null) throw convError(s, 'valid floating point value'); return r; });
fn('StrToCurrDef', (s, d) => parseFloatStrict(s) ?? d);
fn('TryStrToFloat', async (s, r: Ref) => { const v = parseFloatStrict(s); if (v === null) return false; await r.set(v); return true; });
fn('TryStrToCurr', async (s, r: Ref) => { const v = parseFloatStrict(s); if (v === null) return false; await r.set(v); return true; });
fn('FloatToStr', floatToStr);
fn('CurrToStr', floatToStr);
fn('FloatToStrF', (v, f, prec, digits) => {
  const ff = String(f).toLowerCase();
  if (ff === 'ffgeneral') return floatToStr(v);
  if (ff === 'ffexponent') return num(v).toExponential(num(prec) - 1);
  return fixed(num(v), num(digits), ff === 'ffnumber' || ff === 'ffcurrency');
});
fn('CurrToStrF', (v, f, digits) => fixed(num(v), num(digits), String(f).toLowerCase() !== 'fffixed'));
fn('FormatFloat', (f, v) => formatFloat(str(f), v));
fn('FormatCurr', (f, v) => formatFloat(str(f), v));
fn('Format', (f, args) => format(str(f), Array.isArray(args) ? args : [args]));
fn('BoolToStr', (b, useStr) => (useStr ? (b ? 'True' : 'False') : (b ? '-1' : '0')));
fn('StrToBool', (s) => /^(true|1|-1|yes)$/i.test(str(s).trim()));
fn('Trim', (s) => str(s).replace(/^[\s\x00-\x20]+|[\s\x00-\x20]+$/g, ''));
fn('TrimLeft', (s) => str(s).replace(/^[\s\x00-\x20]+/, ''));
fn('TrimRight', (s) => str(s).replace(/[\s\x00-\x20]+$/, ''));
for (const n of ['UpperCase', 'AnsiUpperCase', 'WideUpperCase', 'AnsiUpperCaseFileName']) fn(n, (s) => str(s).toLocaleUpperCase('az'));
for (const n of ['LowerCase', 'AnsiLowerCase', 'WideLowerCase']) fn(n, (s) => str(s).toLocaleLowerCase('az'));
fn('UpCase', (c) => str(c).toUpperCase());
fn('Copy', (s, i, n) => {
  if (Array.isArray(s)) return s.slice(num(i), num(i) + (n === undefined ? s.length : num(n)));
  const st = str(s); const start = Math.max(1, num(i)); const len = n === undefined ? st.length : num(n);
  return len <= 0 ? '' : st.substr(start - 1, len);
});
for (const n of ['Pos', 'AnsiPos']) fn(n, (sub, s) => str(s).indexOf(str(sub)) + 1);
fn('PosEx', (sub, s, off) => str(s).indexOf(str(sub), (off === undefined ? 1 : num(off)) - 1) + 1);
fn('Length', (s) => (Array.isArray(s) ? s.length : isPObj(s) && (s as any).Count !== undefined ? (s as any).Count : str(s).length));
fn('Delete', async (r: Ref, i, n) => { const s = str(await r.get()); const st = num(i) - 1; await r.set(s.slice(0, st) + s.slice(st + num(n))); });
fn('Insert', async (sub, r: Ref, i) => { const s = str(await r.get()); const st = num(i) - 1; await r.set(s.slice(0, st) + str(sub) + s.slice(st)); });
fn('StringReplace', (s, a, b, flags) => {
  const fl = (Array.isArray(flags) ? flags : [flags]).map((x) => String(x).toLowerCase());
  const all = fl.includes('rfreplaceall');
  const re = new RegExp(str(a).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), (all ? 'g' : '') + (fl.includes('rfignorecase') ? 'i' : ''));
  return str(a) === '' ? str(s) : str(s).replace(re, () => str(b));
});
fn('AnsiReplaceStr', (s, a, b) => str(s).split(str(a)).join(str(b)));
fn('ReplaceStr', (s, a, b) => str(s).split(str(a)).join(str(b)));
fn('AnsiReplaceText', (s, a, b) => str(s).replace(new RegExp(str(a).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), str(b)));
fn('QuotedStr', (s) => "'" + str(s).replace(/'/g, "''") + "'");
fn('AnsiQuotedStr', (s, q) => str(q) + str(s).split(str(q)).join(str(q) + str(q)) + str(q));
fn('AnsiDequotedStr', (s, q) => { const t = str(s); const c = str(q); return t.startsWith(c) && t.endsWith(c) ? t.slice(1, -1).split(c + c).join(c) : t; });
fn('DequotedStr', (s) => str(s).replace(/^'(.*)'$/, '$1').replace(/''/g, "'"));
fn('Chr', (n) => String.fromCharCode(num(n)));
fn('Ord', (c) => (typeof c === 'string' ? c.charCodeAt(0) || 0 : typeof c === 'boolean' ? (c ? 1 : 0) : num(c)));
fn('Succ', (c) => (typeof c === 'string' ? String.fromCharCode(c.charCodeAt(0) + 1) : num(c) + 1));
fn('Pred', (c) => (typeof c === 'string' ? String.fromCharCode(c.charCodeAt(0) - 1) : num(c) - 1));
fn('StringOfChar', (c, n) => str(c).charAt(0).repeat(Math.max(0, num(n))));
fn('DupeString', (s, n) => str(s).repeat(Math.max(0, num(n))));
fn('LeftStr', (s, n) => str(s).slice(0, num(n)));
fn('RightStr', (s, n) => (num(n) <= 0 ? '' : str(s).slice(-num(n))));
fn('MidStr', (s, i, n) => str(s).substr(num(i) - 1, num(n)));
fn('AnsiLeftStr', (s, n) => str(s).slice(0, num(n)));
fn('AnsiRightStr', (s, n) => (num(n) <= 0 ? '' : str(s).slice(-num(n))));
fn('AnsiMidStr', (s, i, n) => str(s).substr(num(i) - 1, num(n)));
fn('ReverseString', (s) => [...str(s)].reverse().join(''));
fn('AnsiContainsText', (s, sub) => str(s).toLowerCase().includes(str(sub).toLowerCase()));
fn('AnsiContainsStr', (s, sub) => str(s).includes(str(sub)));
fn('ContainsText', (s, sub) => str(s).toLowerCase().includes(str(sub).toLowerCase()));
fn('ContainsStr', (s, sub) => str(s).includes(str(sub)));
fn('AnsiStartsText', (sub, s) => str(s).toLowerCase().startsWith(str(sub).toLowerCase()));
fn('AnsiStartsStr', (sub, s) => str(s).startsWith(str(sub)));
fn('StartsText', (sub, s) => str(s).toLowerCase().startsWith(str(sub).toLowerCase()));
fn('AnsiEndsText', (sub, s) => str(s).toLowerCase().endsWith(str(sub).toLowerCase()));
fn('AnsiEndsStr', (sub, s) => str(s).endsWith(str(sub)));
for (const n of ['SameText', 'AnsiSameText']) fn(n, (a, b) => str(a).toLowerCase() === str(b).toLowerCase());
for (const n of ['SameStr', 'AnsiSameStr']) fn(n, (a, b) => str(a) === str(b));
for (const n of ['CompareText', 'AnsiCompareText']) fn(n, (a, b) => str(a).toLowerCase().localeCompare(str(b).toLowerCase()));
for (const n of ['CompareStr', 'AnsiCompareStr']) fn(n, (a, b) => (str(a) < str(b) ? -1 : str(a) > str(b) ? 1 : 0));
fn('IsDelimiter', (d, s, i) => str(d).includes(str(s).charAt(num(i) - 1)));
fn('LastDelimiter', (d, s) => { const t = str(s); for (let i = t.length - 1; i >= 0; i--) if (str(d).includes(t[i])) return i + 1; return 0; });
fn('AdjustLineBreaks', (s) => str(s).replace(/\r?\n/g, '\r\n'));
fn('WrapText', (s) => str(s));
fn('IntToBin', (v, d) => Math.trunc(num(v)).toString(2).padStart(num(d), '0'));
fn('StrPas', (s) => str(s));
fn('PChar', (s) => str(s));
fn('StrPCopy', async (r: Ref, s) => { if (isRef(r)) await r.set(str(s)); return str(s); });
fn('WideCharToString', (s) => str(s));
fn('StrLen', (s) => str(s).length);
fn('IfThen', (c, a, b) => (c ? a : b ?? ''));
fn('AnsiIndexText', (s, arr) => (arr as unknown[]).findIndex((x) => str(x).toLowerCase() === str(s).toLowerCase()));
fn('AnsiIndexStr', (s, arr) => (arr as unknown[]).findIndex((x) => str(x) === str(s)));
fn('AnsiMatchText', (s, arr) => (arr as unknown[]).some((x) => str(x).toLowerCase() === str(s).toLowerCase()));
fn('Concat', (...a) => a.map(str).join(''));
fn('Val', async (s, r: Ref, code: Ref) => {
  const v = parseFloatStrict(s);
  await r.set(v ?? 0);
  if (code) await code.set(v === null ? 1 : 0);
});
fn('Str', async (v, r: Ref) => r.set(str(v)));
fn('ExtractStrings', () => 0);

/* ------------------------------------------------------------------ ordinal / math */

fn('Inc', async (r: Ref, n) => { const v = await r.get(); await r.set(typeof v === 'string' ? String.fromCharCode(v.charCodeAt(0) + num(n ?? 1)) : num(v) + (n === undefined ? 1 : num(n))); });
fn('Dec', async (r: Ref, n) => { const v = await r.get(); await r.set(typeof v === 'string' ? String.fromCharCode(v.charCodeAt(0) - num(n ?? 1)) : num(v) - (n === undefined ? 1 : num(n))); });
fn('Abs', (v) => Math.abs(num(v)));
fn('Round', (v) => bankersRound(num(v)));
fn('Trunc', (v) => Math.trunc(num(v)));
fn('Frac', (v) => { const n = num(v); return n - Math.trunc(n); });
fn('Int', (v) => Math.trunc(num(v)));
fn('Ceil', (v) => Math.ceil(num(v)));
fn('Floor', (v) => Math.floor(num(v)));
fn('Sqr', (v) => num(v) * num(v));
fn('Sqrt', (v) => Math.sqrt(num(v)));
fn('Power', (a, b) => Math.pow(num(a), num(b)));
fn('IntPower', (a, b) => Math.pow(num(a), num(b)));
fn('Exp', (v) => Math.exp(num(v)));
fn('Ln', (v) => Math.log(num(v)));
fn('Log10', (v) => Math.log10(num(v)));
fn('Max', (a, b) => Math.max(num(a), num(b)));
fn('Min', (a, b) => Math.min(num(a), num(b)));
fn('MaxValue', (a) => Math.max(...(a as number[]).map(num)));
fn('MinValue', (a) => Math.min(...(a as number[]).map(num)));
fn('Sum', (a) => (a as number[]).reduce((x, y) => x + num(y), 0));
fn('Odd', (v) => Math.abs(Math.trunc(num(v))) % 2 === 1);
fn('Sign', (v) => Math.sign(num(v)));
fn('Random', (n) => (n === undefined ? Math.random() : Math.floor(Math.random() * num(n))));
fn('RandomRange', (a, b) => Math.floor(num(a) + Math.random() * (num(b) - num(a))));
fn('Randomize', () => undefined);
fn('RoundTo', (v, d) => { const p = Math.pow(10, -num(d)); return bankersRound(num(v) * p) / p; });
fn('SimpleRoundTo', (v, d = -2) => { const p = Math.pow(10, -num(d)); return Math.round(num(v) * p) / p; });
fn('IsZero', (v) => Math.abs(num(v)) < 1e-12);
fn('SameValue', (a, b, eps) => Math.abs(num(a) - num(b)) <= (eps === undefined ? 1e-9 : num(eps)));
fn('CompareValue', (a, b) => Math.sign(num(a) - num(b)));
fn('InRange', (v, a, b) => num(v) >= num(a) && num(v) <= num(b));
fn('EnsureRange', (v, a, b) => Math.min(Math.max(num(v), num(a)), num(b)));
fn('DivMod', async (a, b, q: Ref, r: Ref) => { await q.set(Math.trunc(num(a) / num(b))); await r.set(num(a) % num(b)); });
fn('Hi', (v) => (num(v) >> 8) & 0xff);
fn('Lo', (v) => num(v) & 0xff);
// nil = empty dynamic array: High = -1 (for i := 0 to High(arr) does nothing)
fn('High', (v) => (v === null || v === undefined ? -1 : Array.isArray(v) ? v.length - 1 : typeof v === 'string' ? v.length : isPObj(v) ? ((v as any).Count ?? 0) - 1 : 2147483647));
fn('Low', (v) => (Array.isArray(v) ? 0 : typeof v === 'string' ? 1 : 0));
fn('SetLength', async (r: Ref, n) => {
  const v = await r.get();
  if (Array.isArray(v) || v == null || typeof v === 'object') {
    const arr = Array.isArray(v) ? v.slice(0, num(n)) : [];
    while (arr.length < num(n)) arr.push(null);
    await r.set(arr);
  } else await r.set(str(v).slice(0, num(n)).padEnd(num(n), ' '));
});
fn('Include', async (r: Ref, x) => { const s = (await r.get()) as unknown[] ?? []; if (!s.includes(x)) await r.set([...s, x]); });
fn('Exclude', async (r: Ref, x) => { const s = (await r.get()) as unknown[] ?? []; await r.set(s.filter((y) => y !== x)); });
fn('Swap', (v) => ((num(v) & 0xff) << 8) | ((num(v) >> 8) & 0xff));
fn('FillChar', () => undefined);
fn('Move', () => undefined);
fn('SizeOf', () => 4);
fn('Assigned', (v) => v !== null && v !== undefined && !(v as any)?.__freed && !(v as any)?.__gap);
fn('FreeAndNil', async (r: Ref) => { const v = await r.get(); try { (v as any)?.Free?.(); } catch { /* ignore */ } await r.set(null); });
fn('Initialize', () => undefined);
fn('Finalize', () => undefined);
fn('New', () => undefined);
fn('Dispose', () => undefined);
fn('GetMem', () => undefined);
fn('FreeMem', () => undefined);
fn('Halt', () => { throw new AbortSignal(); });
fn('Abort', () => { throw new AbortSignal(); });
fn('Beep', () => undefined);
fn('MessageBeep', () => undefined);
fn('Sleep', (ms) => new Promise((r) => setTimeout(r, Math.min(num(ms), 2000))));
fn('GetTickCount', () => Math.floor(performance.now()));
fn('GetLastError', () => 0);
fn('SysErrorMessage', () => '');
fn('RaiseLastOSError', () => undefined);
fn('RaiseLastWin32Error', () => undefined);
fn('OutputDebugString', (s) => logger.debug(str(s)));
fn('Integer', (v) => (typeof v === 'boolean' ? (v ? 1 : 0) : typeof v === 'string' ? (v.charCodeAt(0) || 0)
  : v !== null && (typeof v === 'object' || typeof v === 'function') ? pointerHandle(v as object) : Math.trunc(num(v))));
for (const n of ['LongInt', 'Cardinal', 'Word', 'Byte', 'SmallInt', 'ShortInt', 'Int64', 'LongWord', 'DWORD']) G.set(n.toLowerCase(), G.get('integer'));
fn('Boolean', (v) => !!v && v !== 0);
fn('Double', (v) => num(v));
fn('Extended', (v) => num(v));
fn('Currency', (v) => num(v));
fn('Real', (v) => num(v));
fn('Single', (v) => num(v));
fn('String', (v) => str(v));
fn('AnsiString', (v) => str(v));
fn('WideString', (v) => str(v));
fn('ShortString', (v) => str(v));
fn('UnicodeString', (v) => str(v));
fn('Char', (v) => (typeof v === 'number' ? String.fromCharCode(v) : str(v).charAt(0)));
fn('AnsiChar', (v) => (typeof v === 'number' ? String.fromCharCode(v) : str(v).charAt(0)));
fn('WideChar', (v) => (typeof v === 'number' ? String.fromCharCode(v) : str(v).charAt(0)));
fn('Variant', (v) => v);
fn('OleVariant', (v) => v);
fn('Pointer', (v) => derefPointer(v));
fn('TObject', (v) => v);
fn('TDateTime', (v) => toDateValue(v));
fn('TDate', (v) => toDateValue(v));

/* ------------------------------------------------------------------ dates */

fn('Date', () => todayDelphi());
fn('Now', () => nowDelphi());
fn('Time', () => { const n = nowDelphi(); return n - Math.floor(n); });
fn('GetTime', () => { const n = nowDelphi(); return n - Math.floor(n); });
fn('DateToStr', (v) => formatDateTime(settings.ShortDateFormat, toDateValue(v)));
fn('TimeToStr', (v) => formatDateTime(settings.LongTimeFormat, toDateValue(v)));
fn('DateTimeToStr', (v) => { const d = toDateValue(v); return formatDateTime(settings.ShortDateFormat + (d % 1 ? ' ' + settings.LongTimeFormat : ''), d); });
fn('FormatDateTime', (f, v) => formatDateTime(str(f), toDateValue(v)));
fn('StrToDate', (s) => { const d = parseDate(str(s)); if (d === null) throw convError(s, 'valid date'); return Math.floor(d); });
fn('StrToDateDef', (s, def) => { const d = parseDate(str(s)); return d === null ? def : Math.floor(d); });
fn('StrToDateTime', (s) => { const d = parseDate(str(s)); if (d === null) throw convError(s, 'valid date and time'); return d; });
fn('StrToDateTimeDef', (s, def) => parseDate(str(s)) ?? def);
fn('StrToTime', (s) => { const d = parseDate(str(s)); if (d === null) throw convError(s, 'valid time'); return d % 1; });
fn('TryStrToDate', async (s, r: Ref) => { const d = parseDate(str(s)); if (d === null) return false; await r.set(Math.floor(d)); return true; });
fn('TryStrToDateTime', async (s, r: Ref) => { const d = parseDate(str(s)); if (d === null) return false; await r.set(d); return true; });
fn('EncodeDate', (y, m, d) => encodeDate(num(y), num(m), num(d)));
fn('EncodeTime', (h, n, s, ms) => encodeTime(num(h), num(n), num(s), num(ms)));
fn('EncodeDateTime', (y, m, d, h, n, s, ms) => encodeDate(num(y), num(m), num(d)) + encodeTime(num(h), num(n), num(s), num(ms)));
fn('TryEncodeDate', async (y, m, d, r: Ref) => { await r.set(encodeDate(num(y), num(m), num(d))); return true; });
fn('DecodeDate', async (v, y: Ref, m: Ref, d: Ref) => { const t = decode(toDateValue(v)); await y.set(t.y); await m.set(t.m); await d.set(t.d); });
fn('DecodeTime', async (v, h: Ref, n: Ref, s: Ref, ms: Ref) => { const t = decode(toDateValue(v)); await h.set(t.h); await n.set(t.n); await s.set(t.s); await ms.set(t.ms); });
fn('DecodeDateTime', async (v, y: Ref, m: Ref, d: Ref, h: Ref, n: Ref, s: Ref, ms: Ref) => { const t = decode(toDateValue(v)); await y.set(t.y); await m.set(t.m); await d.set(t.d); await h.set(t.h); await n.set(t.n); await s.set(t.s); await ms.set(t.ms); });
fn('DayOfWeek', (v) => decode(toDateValue(v)).dow);
fn('DayOfTheWeek', (v) => ((decode(toDateValue(v)).dow + 5) % 7) + 1);
fn('DayOf', (v) => decode(toDateValue(v)).d);
fn('MonthOf', (v) => decode(toDateValue(v)).m);
fn('YearOf', (v) => decode(toDateValue(v)).y);
fn('HourOf', (v) => decode(toDateValue(v)).h);
fn('MinuteOf', (v) => decode(toDateValue(v)).n);
fn('DateOf', (v) => Math.floor(toDateValue(v)));
fn('TimeOf', (v) => toDateValue(v) % 1);
fn('IncDay', (v, n = 1) => toDateValue(v) + num(n));
fn('IncWeek', (v, n = 1) => toDateValue(v) + 7 * num(n));
fn('IncHour', (v, n = 1) => toDateValue(v) + num(n) / 24);
fn('IncMinute', (v, n = 1) => toDateValue(v) + num(n) / 1440);
fn('IncSecond', (v, n = 1) => toDateValue(v) + num(n) / 86400);
function incMonth(v: unknown, n: unknown) {
  const d = toDateValue(v); const t = decode(d);
  let m = t.m - 1 + num(n ?? 1); const y = t.y + Math.floor(m / 12); m = ((m % 12) + 12) % 12;
  const dim = new Date(y, m + 1, 0).getDate();
  return encodeDate(y, m + 1, Math.min(t.d, dim)) + (d % 1);
}
fn('IncMonth', incMonth);
fn('IncYear', (v, n = 1) => incMonth(v, num(n) * 12));
fn('DaysBetween', (a, b) => Math.floor(Math.abs(toDateValue(a) - toDateValue(b)) + 1e-9));
fn('DaySpan', (a, b) => Math.abs(toDateValue(a) - toDateValue(b)));
fn('MonthsBetween', (a, b) => Math.floor(Math.abs(toDateValue(a) - toDateValue(b)) / 30.4375));
fn('YearsBetween', (a, b) => Math.floor(Math.abs(toDateValue(a) - toDateValue(b)) / 365.25));
fn('WeeksBetween', (a, b) => Math.floor(Math.abs(toDateValue(a) - toDateValue(b)) / 7));
fn('HoursBetween', (a, b) => Math.floor(Math.abs(toDateValue(a) - toDateValue(b)) * 24));
fn('MinutesBetween', (a, b) => Math.floor(Math.abs(toDateValue(a) - toDateValue(b)) * 1440));
fn('SecondsBetween', (a, b) => Math.floor(Math.abs(toDateValue(a) - toDateValue(b)) * 86400));
fn('StartOfTheMonth', (v) => { const t = decode(toDateValue(v)); return encodeDate(t.y, t.m, 1); });
fn('EndOfTheMonth', (v) => { const t = decode(toDateValue(v)); return encodeDate(t.y, t.m, new Date(t.y, t.m, 0).getDate()) + 0.99999; });
fn('StartOfTheYear', (v) => encodeDate(decode(toDateValue(v)).y, 1, 1));
fn('EndOfTheYear', (v) => encodeDate(decode(toDateValue(v)).y, 12, 31) + 0.99999);
fn('StartOfTheDay', (v) => Math.floor(toDateValue(v)));
fn('EndOfTheDay', (v) => Math.floor(toDateValue(v)) + 0.99999);
fn('DaysInMonth', (v) => { const t = decode(toDateValue(v)); return new Date(t.y, t.m, 0).getDate(); });
fn('DaysInAMonth', (y, m) => new Date(num(y), num(m), 0).getDate());
fn('MonthDays', () => [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
fn('IsLeapYear', (y) => { const n = num(y); return (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0; });
fn('IsValidDate', (y, m, d) => { const dt = new Date(num(y), num(m) - 1, num(d)); return dt.getMonth() === num(m) - 1; });
fn('CompareDate', (a, b) => Math.sign(Math.floor(toDateValue(a)) - Math.floor(toDateValue(b))));
fn('CompareDateTime', (a, b) => Math.sign(toDateValue(a) - toDateValue(b)));
fn('SameDate', (a, b) => Math.floor(toDateValue(a)) === Math.floor(toDateValue(b)));
fn('DateTimeToTimeStamp', (v) => ({ date: Math.floor(toDateValue(v)), time: 0 }));

/* ------------------------------------------------------------------ variants */

fn('VarIsNull', (v) => v === null);
fn('VarIsEmpty', (v) => v === undefined);
fn('VarIsClear', (v) => v === undefined);
fn('VarIsNullOrEmpty', (v) => v === null || v === undefined || v === '');
fn('VarIsStr', (v) => typeof v === 'string');
fn('VarIsNumeric', (v) => typeof v === 'number');
fn('VarIsArray', (v) => Array.isArray(v));
fn('VarToStr', (v) => str(v));
fn('VarToStrDef', (v, d) => (v === null || v === undefined ? d : str(v)));
fn('VarToDateTime', (v) => toDateValue(v));
fn('VarAsType', (v) => v);
fn('VarType', (v) => (v === null ? 1 : v === undefined ? 0 : typeof v === 'number' ? 5 : typeof v === 'string' ? 256 : typeof v === 'boolean' ? 11 : 12));
fn('VarArrayOf', (a) => (Array.isArray(a) ? a : [a]));
fn('VarArrayCreate', () => []);
fn('VarArrayHighBound', (a) => (Array.isArray(a) ? a.length - 1 : -1));
fn('VarArrayLowBound', () => 0);
fn('VarArrayDimCount', (a) => (Array.isArray(a) ? 1 : 0));
fn('NullToZero', (v) => (v === null || v === undefined ? 0 : v));
fn('NVL', (v, d) => (v === null || v === undefined || v === '' ? d : v));

/* ------------------------------------------------------------------ dialogs */

fn('ShowMessage', (m) => showMessage(m));
fn('ShowMessageFmt', (m, a) => showMessage(format(str(m), a as unknown[])));
fn('MessageDlg', (m, t, b) => messageDlg(m, t, b));
fn('MessageDlgPos', (m, t, b) => messageDlg(m, t, b));
fn('MessageDlgPosHelp', (m, t, b) => messageDlg(m, t, b));
fn('MessageBox', (_h, text, cap, flags) => messageBox(text, cap, flags));
fn('InputQuery', async (cap, prompt, r: Ref) => {
  const ref = r && typeof (r as any).get === 'function' ? r : null;
  const res = await inputQuery(cap, prompt, str(ref ? await ref.get() : r));
  if (res.ok && ref) await ref.set(res.value);
  return res.ok;
});
/* SysUtils.TEncoding: TEncoding.UTF8 / ANSI / Default … (text is always Unicode in the browser) */
class TEncodingImpl extends TObject {
  constructor(public EncodingName: string, public CodePage: number) { super(); }
  ToString() { return this.EncodingName; }
  GetBytes(s: unknown) { return Array.from(new TextEncoder().encode(str(s))); }
  GetString(b: unknown) { return Array.isArray(b) ? new TextDecoder().decode(new Uint8Array(b as number[])) : str(b); }
  GetByteCount(s: unknown) { return new TextEncoder().encode(str(s)).length; }
  Clone() { return this; }
}
class TEncodingStatics extends TObject {
  UTF8 = new TEncodingImpl('Unicode (UTF-8)', 65001);
  Unicode = new TEncodingImpl('Unicode', 1200);
  BigEndianUnicode = new TEncodingImpl('Unicode (Big-Endian)', 1201);
  ANSI = new TEncodingImpl('Cyrillic (Windows)', 1251);
  ASCII = new TEncodingImpl('US-ASCII', 20127);
  UTF7 = new TEncodingImpl('Unicode (UTF-7)', 65000);
  get Default() { return this.ANSI; }
  GetEncoding(cp: unknown) { return new TEncodingImpl(`Code page ${num(cp)}`, num(cp)); }
  IsStandardEncoding() { return true; }
}
def('TEncoding', new TEncodingStatics());
fn('InputBox', async (cap, prompt, d) => { const res = await inputQuery(cap, prompt, str(d)); return res.ok ? res.value : str(d); });

/* ------------------------------------------------------------------ files / OS (browser-safe no-ops) */

fn('ExtractFilePath', (s) => str(s).replace(/[^\\/]*$/, ''));
fn('ExtractFileDir', (s) => str(s).replace(/[\\/][^\\/]*$/, ''));
fn('ExtractFileName', (s) => str(s).replace(/^.*[\\/]/, ''));
fn('ExtractFileExt', (s) => { const m = /\.[^.\\/]*$/.exec(str(s)); return m ? m[0] : ''; });
fn('ChangeFileExt', (s, e) => str(s).replace(/\.[^.\\/]*$/, '') + str(e));
fn('IncludeTrailingPathDelimiter', (s) => (str(s).endsWith('\\') ? str(s) : str(s) + '\\'));
fn('IncludeTrailingBackslash', (s) => (str(s).endsWith('\\') ? str(s) : str(s) + '\\'));
fn('ExcludeTrailingPathDelimiter', (s) => str(s).replace(/[\\/]$/, ''));
fn('FileExists', () => false);
fn('DirectoryExists', () => false);
fn('ForceDirectories', () => true);
fn('CreateDir', () => true);
fn('DeleteFile', () => true);
fn('RenameFile', () => true);
fn('CopyFile', () => true);
fn('GetCurrentDir', () => 'C:\\SmartBank\\');
fn('GetTempPath', () => 'C:\\Temp\\');
fn('ParamStr', (i) => (num(i) === 0 ? 'C:\\SmartBank\\Bin\\SmartBank.exe' : ''));
fn('ParamCount', () => 0);
fn('FindCmdLineSwitch', () => false);
fn('GetEnvironmentVariable', () => '');
fn('ShellExecute', () => 0);
fn('WinExec', () => 33);
fn('ShellExecuteA', () => 0);
fn('ShellExecuteW', () => 0);
// string type casts: UTF8String(s), AnsiString(s) … (strings are Unicode throughout the web runtime)
for (const n of ['UTF8String', 'AnsiString', 'WideString', 'UnicodeString', 'RawByteString', 'ShortString', 'UTF8Encode',
  'UTF8Decode', 'AnsiToUtf8', 'Utf8ToAnsi', 'UTF8ToString', 'UTF8ToWideString']) {
  if (!G.has(n.toLowerCase())) fn(n, (v) => str(v));
}
fn('MkDir', () => undefined);
fn('RmDir', () => undefined);
fn('ChDir', () => undefined);
fn('SetCurrentDir', () => true);
fn('CreateDir', () => true);
fn('RemoveDir', () => true);
// ShowWindow / ShellExecute show commands, SHGetFolderPath flags
Object.entries({ SW_HIDE: 0, SW_SHOWNORMAL: 1, SW_NORMAL: 1, SW_SHOWMINIMIZED: 2, SW_SHOWMAXIMIZED: 3, SW_MAXIMIZE: 3,
  SW_SHOWNOACTIVATE: 4, SW_SHOW: 5, SW_MINIMIZE: 6, SW_SHOWMINNOACTIVE: 7, SW_SHOWNA: 8, SW_RESTORE: 9,
  SW_SHOWDEFAULT: 10, SHGFP_TYPE_CURRENT: 0, SHGFP_TYPE_DEFAULT: 1 }).forEach(([k, v]) => def(k, v));
fn('WinExec', () => 0);
fn('GetComputerName', () => true);
fn('AssignFile', () => undefined);
fn('Rewrite', () => undefined);
fn('Reset', () => undefined);
fn('Append', () => undefined);
fn('CloseFile', () => undefined);
fn('Eof', () => true);
fn('Writeln', (...a) => logger.debug('Writeln: ' + a.slice(1).map(str).join('')));
fn('Write', () => undefined);
fn('Readln', () => undefined);
fn('IOResult', () => 0);
fn('FindFirst', () => 1);
fn('FindNext', () => 1);
fn('FindClose', () => undefined);
fn('FileAge', () => 0);
fn('GetFileVersion', () => 0);
fn('PostMessage', (h, m, w, l) => postMessage(h, m, w, l));
fn('PostThreadMessage', () => true);
// run-time packages (BPL plugins of the deposit/credit/insurance managers)
fn('LoadPackage', async (p) => (await import('./loader')).loadPackage(p));
fn('GetProcAddress', async (h, n) => (await import('./loader')).getProcAddress(h, n));
fn('UnloadPackage', () => undefined);
fn('LoadLibrary', () => 0);
fn('FreeLibrary', () => true);
fn('SendMessage', (h, m, w, l) => sendMessage(h, m, w, l));
// GUIDs travel as their canonical upper-case string form
const normGuid = (g: unknown) => { const s = str(g).trim().toUpperCase(); return s.startsWith('{') ? s : `{${s}}`; };
fn('StringToGUID', (g) => normGuid(g));
fn('GUIDToString', (g) => normGuid(g));
fn('IsEqualGUID', (a, b) => normGuid(a) === normGuid(b));
fn('StringToGuid', (g) => normGuid(g));
fn('GetKeyState', () => 0);
fn('GetAsyncKeyState', () => 0);
fn('GetWindowDC', () => 0);
fn('ReleaseDC', () => 0);
fn('SetBkMode', () => 0);
fn('SetTextColor', () => 0);
fn('SelectObject', () => 0);
fn('DrawText', () => 0);
fn('Rect', (l, t, r, b) => ({ left: num(l), top: num(t), right: num(r), bottom: num(b) }));
fn('Bounds', (l, t, w, h) => ({ left: num(l), top: num(t), right: num(l) + num(w), bottom: num(t) + num(h) }));
fn('Point', (x, y) => ({ x: num(x), y: num(y) }));
fn('RGB', (r, g, b) => num(r) | (num(g) << 8) | (num(b) << 16));
fn('ColorToRGB', (c) => num(c));
fn('ShortCut', (k) => num(k));
fn('ShortCutToText', (k) => str(k));
fn('TextToShortCut', (s) => s);
fn('CreateOleObject', async (name) => (await import('./ole')).createOleObject(name));
fn('GetActiveOleObject', () => null);
fn('CoInitialize', () => 0);
fn('CoUninitialize', () => 0);
fn('Supports', () => false);
fn('GetParentForm', (c) => (c as any)?.ParentForm ?? null);
fn('FormatMaskText', (_m, s) => str(s));
fn('Languages', () => null);

/* ------------------------------------------------------------------ misc helpers referenced as globals */

fn('LastErrorMessage', () => '');
fn('ExceptObject', () => null);
fn('Exit', () => undefined);

export const settingsNames = Object.keys(settings);
export function setGlobal(lname: string, v: unknown): boolean {
  for (const k of settingsNames) {
    if (k.toLowerCase() === lname) { (settings as any)[k] = v; return true; }
  }
  if (G.has(lname)) { G.set(lname, v); return true; }
  return false;
}
export function getSettingGlobal(lname: string): Found {
  for (const k of settingsNames) if (k.toLowerCase() === lname) return (settings as any)[k];
  return NOTFOUND;
}

export function defineGlobal(name: string, value: unknown) { def(name, value); }
export function defineFn(name: string, f: (...a: any[]) => any) { fn(name, f); }

export { G as globals, deref, rangeOf, toDateValue };
