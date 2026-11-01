/* Delphi TColor <-> CSS. System colours return undefined so the theme decides. */

const NAMED: Record<string, number> = {
  clblack: 0x000000, clmaroon: 0x000080, clgreen: 0x008000, clolive: 0x008080, clnavy: 0x800000,
  clpurple: 0x800080, clteal: 0x808000, clgray: 0x808080, clsilver: 0xc0c0c0, clred: 0x0000ff, cllime: 0x00ff00,
  clyellow: 0x00ffff, clblue: 0xff0000, clfuchsia: 0xff00ff, claqua: 0xffff00, clwhite: 0xffffff,
  clmoneygreen: 0xc0dcc0, clskyblue: 0xf0caa6, clcream: 0xf0fbff, clmedgray: 0xa4a0a0, clltgray: 0xc0c0c0,
  cldkgray: 0x808080, clnone: 0x1fffffff, cldefault: 0x20000000,
};

const SYSTEM: Record<string, number> = {
  clscrollbar: 0, clbackground: 1, clactivecaption: 2, clinactivecaption: 3, clmenu: 4, clwindow: 5,
  clwindowframe: 6, clmenutext: 7, clwindowtext: 8, clcaptiontext: 9, clactiveborder: 10, clinactiveborder: 11,
  clappworkspace: 12, clhighlight: 13, clhighlighttext: 14, clbtnface: 15, clbtnshadow: 16, clgraytext: 17,
  clbtntext: 18, clinactivecaptiontext: 19, clbtnhighlight: 20, cl3ddkshadow: 21, cl3dlight: 22, clinfotext: 23,
  clinfobk: 24, clhotlight: 26, clgradientactivecaption: 27, clmenuhighlight: 29, clmenubar: 30,
};

export function colorValue(v: unknown): number {
  if (typeof v === 'number') return v;
  if (typeof v === 'string') {
    const l = v.toLowerCase();
    if (l in NAMED) return NAMED[l];
    if (l in SYSTEM) return -2147483648 + SYSTEM[l];
    if (/^\$[0-9a-f]+$/i.test(v)) return parseInt(v.slice(1), 16);
    if (/^-?\d+$/.test(v)) return parseInt(v, 10);
  }
  return -2147483643; // clWindow
}

export function isSystemColor(c: number) { return c < 0 || c >= 0x1fffffff; }

/** Semantic role for system colours (rendered via CSS variables). */
export function systemRole(c: number): string | undefined {
  if (c >= 0 && c < 0x1fffffff) return undefined;
  const idx = c - -2147483648;
  switch (idx) {
    case 13: return 'var(--accent)';
    case 14: return 'var(--accent-fg)';
    case 24: return 'var(--info-bg)';
    case 17: return 'var(--muted)';
    default: return undefined;
  }
}

/** CSS colour for an explicit RGB TColor; undefined for theme/system colours. */
export function toCss(c: unknown): string | undefined {
  if (c === undefined || c === null) return undefined;
  const n = colorValue(c);
  if (isSystemColor(n)) return systemRole(n);
  const r = n & 0xff, g = (n >> 8) & 0xff, b = (n >> 16) & 0xff;
  return `rgb(${r}, ${g}, ${b})`;
}

/** Light background colours in legacy forms (e.g. $00E8FFFF) are kept but softened for dark mode via mix. */
export function isLight(c: number) {
  if (isSystemColor(c)) return true;
  const r = c & 0xff, g = (c >> 8) & 0xff, b = (c >> 16) & 0xff;
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

/* ------------------------------------------------------------------ readable text
 * Delphi forms were designed on light system colours. With the dark theme, an explicit light background
 * (Column.Color, Canvas.Brush.Color in OnDrawColumnCell, a panel's Color) keeps the theme's light text, and an
 * explicit dark font colour (clNavy, clMaroon …) sits on the dark theme surface. Text colour is therefore
 * chosen against the background that is actually behind it. */

/** An explicit RGB TColor; undefined for system colours (the theme decides those). */
export function explicitRgb(c: unknown): number | undefined {
  if (c === undefined || c === null) return undefined;
  const n = colorValue(c);
  return isSystemColor(n) ? undefined : n;
}
function channel(v: number) { const s = v / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; }
function luminance(n: number) { return 0.2126 * channel(n & 0xff) + 0.7152 * channel((n >> 8) & 0xff) + 0.0722 * channel((n >> 16) & 0xff); }
function contrast(a: number, b: number) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
function mix(a: number, b: number, t: number) {
  const m = (sh: number) => Math.round(((a >> sh) & 0xff) * (1 - t) + ((b >> sh) & 0xff) * t);
  return m(0) | (m(8) << 8) | (m(16) << 16);
}
function css(n: number) { return `rgb(${n & 0xff}, ${(n >> 8) & 0xff}, ${(n >> 16) & 0xff})`; }

export function themeIsDark(): boolean {
  try {
    const t = document.documentElement.dataset.theme;
    return t === 'dark' || (t !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  } catch { return false; }
}
// --surface of theme.css as TColor ($BBGGRR)
const SURFACE_DARK = 0x2b231c, SURFACE_LIGHT = 0xffffff;

/**
 * CSS text colour for an (optional) explicit font colour on an (optional) explicit background; undefined = theme text.
 * An explicit font colour keeps its hue and is only lightened / darkened until it is readable.
 */
export function readableText(fg: number | undefined, bg: number | undefined): string | undefined {
  if (fg === undefined) {
    if (bg === undefined) return undefined;
    return luminance(bg) > 0.179 ? 'rgb(17, 17, 17)' : 'rgb(242, 242, 242)';
  }
  const base = bg ?? (themeIsDark() ? SURFACE_DARK : SURFACE_LIGHT);
  if (contrast(fg, base) >= 3) return css(fg);
  const toward = luminance(base) > 0.179 ? 0x000000 : 0xffffff;
  for (let t = 0.15; t < 1; t += 0.15) {
    const m = mix(fg, toward, t);
    if (contrast(m, base) >= 3.5) return css(m);
  }
  return css(toward);
}
