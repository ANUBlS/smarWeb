/* Delphi TDateTime (days since 1899-12-30, local time) helpers. */

const EPOCH = Date.UTC(1899, 11, 30);
const DAY = 86400000;

export function toDelphi(d: Date): number {
  const utc = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(),
    d.getMilliseconds());
  return (utc - EPOCH) / DAY;
}

export function fromDelphi(v: number): Date {
  const ms = Math.round(v * DAY) + EPOCH;
  const u = new Date(ms);
  return new Date(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate(), u.getUTCHours(), u.getUTCMinutes(),
    u.getUTCSeconds(), u.getUTCMilliseconds());
}

export function encodeDate(y: number, m: number, d: number): number {
  return (Date.UTC(y, m - 1, d) - EPOCH) / DAY;
}

export function encodeTime(h: number, n: number, s: number, ms: number): number {
  return (h * 3600000 + n * 60000 + s * 1000 + ms) / DAY;
}

export function decode(v: number) {
  const d = fromDelphi(v);
  return {
    y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate(), h: d.getHours(), n: d.getMinutes(), s: d.getSeconds(),
    ms: d.getMilliseconds(), dow: d.getDay() + 1,
  };
}

export const MONTHS_SHORT = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'İyn', 'İyl', 'Avq', 'Sen', 'Okt', 'Noy', 'Dek'];
export const MONTHS_LONG = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr',
  'Oktyabr', 'Noyabr', 'Dekabr'];
export const DAYS_SHORT = ['B.', 'B.e.', 'Ç.a.', 'Ç.', 'C.a.', 'C.', 'Ş.'];
export const DAYS_LONG = ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'];

export const settings = {
  DateSeparator: '.',
  TimeSeparator: ':',
  ShortDateFormat: 'dd.mm.yyyy',
  LongDateFormat: 'dd mmmm yyyy',
  ShortTimeFormat: 'hh:nn',
  LongTimeFormat: 'hh:nn:ss',
  DecimalSeparator: '.',
  ThousandSeparator: ' ',
  CurrencyDecimals: 2,
  CurrencyString: 'AZN',
};

const pad = (n: number, w = 2) => String(n).padStart(w, '0');

/** Delphi FormatDateTime. */
export function formatDateTime(fmt: string, v: number): string {
  if (v === null || v === undefined || isNaN(v)) return '';
  const t = decode(v);
  let out = '';
  let i = 0;
  let lastWasHour = false;
  const f = fmt;
  while (i < f.length) {
    const c = f[i];
    const rest = f.slice(i);
    const lower = rest.toLowerCase();
    if (c === '"' || c === "'") {
      const j = f.indexOf(c, i + 1);
      out += f.slice(i + 1, j < 0 ? f.length : j);
      i = j < 0 ? f.length : j + 1;
      continue;
    }
    if (lower.startsWith('yyyy')) { out += pad(t.y, 4); i += 4; lastWasHour = false; continue; }
    if (lower.startsWith('yy')) { out += pad(t.y % 100); i += 2; lastWasHour = false; continue; }
    if (lower.startsWith('mmmm')) { out += MONTHS_LONG[t.m - 1]; i += 4; continue; }
    if (lower.startsWith('mmm')) { out += MONTHS_SHORT[t.m - 1]; i += 3; continue; }
    if (lower.startsWith('mm')) { out += lastWasHour ? pad(t.n) : pad(t.m); i += 2; lastWasHour = false; continue; }
    if (lower.startsWith('m')) { out += lastWasHour ? String(t.n) : String(t.m); i += 1; lastWasHour = false; continue; }
    if (lower.startsWith('dddddd')) { out += formatDateTime(settings.LongDateFormat, v); i += 6; continue; }
    if (lower.startsWith('ddddd')) { out += formatDateTime(settings.ShortDateFormat, v); i += 5; continue; }
    if (lower.startsWith('dddd')) { out += DAYS_LONG[t.dow - 1]; i += 4; continue; }
    if (lower.startsWith('ddd')) { out += DAYS_SHORT[t.dow - 1]; i += 3; continue; }
    if (lower.startsWith('dd')) { out += pad(t.d); i += 2; continue; }
    if (lower.startsWith('d')) { out += String(t.d); i += 1; continue; }
    if (lower.startsWith('hh')) { out += pad(t.h); i += 2; lastWasHour = true; continue; }
    if (lower.startsWith('h')) { out += String(t.h); i += 1; lastWasHour = true; continue; }
    if (lower.startsWith('nn')) { out += pad(t.n); i += 2; continue; }
    if (lower.startsWith('n')) { out += String(t.n); i += 1; continue; }
    if (lower.startsWith('ss')) { out += pad(t.s); i += 2; continue; }
    if (lower.startsWith('s')) { out += String(t.s); i += 1; continue; }
    if (lower.startsWith('zzz')) { out += pad(t.ms, 3); i += 3; continue; }
    if (lower.startsWith('tt')) { out += formatDateTime(settings.LongTimeFormat, v); i += 2; continue; }
    if (lower.startsWith('t')) { out += formatDateTime(settings.ShortTimeFormat, v); i += 1; continue; }
    if (lower.startsWith('am/pm')) { out += t.h < 12 ? 'am' : 'pm'; i += 5; continue; }
    if (lower.startsWith('c')) { out += formatDateTime(settings.ShortDateFormat + ' ' + settings.LongTimeFormat, v); i += 1; continue; }
    if (c === '/') { out += settings.DateSeparator; i++; continue; }
    if (c === ':') { out += settings.TimeSeparator; i++; continue; }
    out += c;
    i++;
  }
  return out;
}

/** Parse a date string in dd.mm.yyyy (or yyyy-mm-dd / ISO) form into TDateTime. */
export function parseDate(s: string): number | null {
  if (!s) return null;
  s = s.trim();
  let m = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/.exec(s);
  if (m) {
    return encodeDate(+m[1], +m[2], +m[3]) + (m[4] ? encodeTime(+m[4], +m[5], +(m[6] ?? 0), 0) : 0);
  }
  m = /^(\d{1,2})[./\-](\d{1,2})[./\-](\d{2,4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/.exec(s);
  if (m) {
    let y = +m[3];
    if (y < 100) y += y < 50 ? 2000 : 1900;
    return encodeDate(y, +m[2], +m[1]) + (m[4] ? encodeTime(+m[4], +m[5], +(m[6] ?? 0), 0) : 0);
  }
  m = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(s);
  if (m) return encodeTime(+m[1], +m[2], +(m[3] ?? 0), 0);
  return null;
}

export function nowDelphi() { return toDelphi(new Date()); }
export function todayDelphi() { return Math.floor(nowDelphi()); }
