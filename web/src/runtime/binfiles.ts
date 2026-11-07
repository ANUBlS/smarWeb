/*
 * Installation files that sit next to SmartBank.exe in the desktop version (the Bin folder):
 * CMToolBarBootom.ini, CMPopupMenu.ini … — per-bank plugin menus that are not part of the source
 * repository. Put them into web/bin/ and rebuild: TIniFile reads them as the files of that name
 * (whatever folder the code builds the path from), and what the program writes goes to the
 * browser's own copy on top of them.
 */
const urls = import.meta.glob('../../bin/*.{ini,INI,Ini}', { query: '?url', import: 'default', eager: true }) as Record<string, string>;

export type IniData = Map<string, Map<string, string>>;
const files = new Map<string, IniData>();

/** UTF-16 / UTF-8 when the file is one (the newer installations), otherwise Windows-1251 in the
 *  legacy AzLat font encoding of the older ones (as SmartBank.ini). */
function decode(b: ArrayBuffer): string {
  const u = new Uint8Array(b);
  if (u[0] === 0xff && u[1] === 0xfe) return new TextDecoder('utf-16le').decode(u.subarray(2));
  if (u[0] === 0xfe && u[1] === 0xff) return new TextDecoder('utf-16be').decode(u.subarray(2));
  try { return new TextDecoder('utf-8', { fatal: true }).decode(u).replace(/^\uFEFF/, ''); } catch { /* ANSI */ }
  return azLat(new TextDecoder('windows-1251').decode(u));
}

const AZ: Record<string, string> = {
  А: 'A', Б: 'B', Ж: 'C', Ч: 'Ç', Д: 'D', Е: 'E', Я: 'Ə', Ф: 'F', Э: 'G', Ь: 'Ğ', Щ: 'H', Х: 'X', Ы: 'I', И: 'İ', Ъ: 'J',
  К: 'K', Г: 'Q', Л: 'L', М: 'M', Н: 'N', О: 'O', Ю: 'Ö', П: 'P', Р: 'R', С: 'S', Ш: 'Ş', Т: 'T', У: 'U', Ц: 'Ü', В: 'V',
  Й: 'Y', З: 'Z',
};
for (const [k, v] of Object.entries({ ...AZ })) AZ[k.toLowerCase()] = v === 'İ' ? 'i' : v.toLowerCase();
AZ['ы'] = 'ı';
function azLat(s: string) { return s.replace(/[\u0400-\u04ff]/g, (c) => AZ[c] ?? c); }

/** INI text → sections in file order (Windows' GetPrivateProfileString rules: case-insensitive
 *  names, first occurrence wins, ';' comment lines). */
export function parseIni(text: string): IniData {
  const out: IniData = new Map();
  let cur: Map<string, string> | null = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith(';')) continue;
    const m = /^\[(.*)\]$/.exec(line);
    if (m) {
      const name = m[1].trim();
      const key = [...out.keys()].find((k) => k.toLowerCase() === name.toLowerCase());
      cur = key ? out.get(key)! : new Map();
      if (!key) out.set(name, cur);
      continue;
    }
    const eq = line.indexOf('=');
    if (!cur || eq < 0) continue;
    const k = line.slice(0, eq).trim();
    if (![...cur.keys()].some((x) => x.toLowerCase() === k.toLowerCase())) cur.set(k, line.slice(eq + 1).trim());
  }
  return out;
}

export const binReady: Promise<void> = Promise.all(Object.entries(urls).map(async ([path, url]) => {
  try {
    const r = await fetch(url);
    if (r.ok) files.set(path.split('/').pop()!.toLowerCase(), parseIni(decode(await r.arrayBuffer())));
  } catch { /* not reachable: the file is treated as absent */ }
})).then(() => undefined);

/** The installation file with this name ('C:\SmartBank\Bin\CMPopupMenu.ini' → CMPopupMenu.ini), or null. */
export function binIni(path: string): IniData | null {
  return files.get(path.replace(/\\/g, '/').split('/').pop()!.trim().toLowerCase()) ?? null;
}

export function binFileNames() { return [...files.keys()]; }
