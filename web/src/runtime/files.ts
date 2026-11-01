/*
 * Files chosen by the user (TOpenDialog.Execute → browser file picker).
 *
 * The browser has no file system: the picked File is kept here under the name the Delphi code
 * sees in OpenDialog.FileName, so that later calls with that name (Excel Workbooks.Open,
 * TStringList.LoadFromFile …) can read it.
 */
const picked = new Map<string, File>();
/** Files the code wrote (Picture.SaveToFile(Path), Jpg.SaveToFile …): read back by the same name. */
const written = new Map<string, Blob>();
const norm = (name: unknown) => String(name ?? '').replace(/\//g, '\\').toLowerCase();
const base = (name: unknown) => String(name ?? '').split(/[\\/]/).pop() ?? String(name ?? '');

export function pickedFile(name: unknown): File | undefined {
  const n = String(name ?? '');
  return picked.get(n) ?? picked.get(base(n));
}

/** A file by name: one written by the code, else one the user picked. */
export function readFile(name: unknown): Blob | undefined {
  return written.get(norm(name)) ?? pickedFile(name);
}
export function writeFile(name: unknown, data: Blob) { written.set(norm(name), data); }
export function fileExists(name: unknown) { return !!readFile(name); }

export async function blobToBase64(b: Blob): Promise<string> {
  const bytes = new Uint8Array(await b.arrayBuffer());
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
export function base64ToBlob(b64: string, type = ''): Blob {
  let bin = '';
  try { bin = atob(b64.replace(/\s+/g, '')); } catch { return new Blob([], { type: type || 'application/octet-stream' }); } // not base64
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type: type || imageMime(bytes) });
}
/** Image type from the first bytes (BLOB fields carry no MIME type). */
export function imageMime(b: Uint8Array): string {
  if (b[0] === 0xff && b[1] === 0xd8) return 'image/jpeg';
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return 'image/png';
  if (b[0] === 0x42 && b[1] === 0x4d) return 'image/bmp';
  if (b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46) return 'image/gif';
  return 'application/octet-stream';
}

/** VCL dialog filter ('Excel|*.xls;*.xlsx|All|*.*') → input accept ('.xls,.xlsx'); Excel also accepts .xlsx. */
export function acceptFromFilter(filter: string): string {
  const parts = filter.split('|');
  const masks = parts.filter((_, i) => i % 2 === 1).flatMap((m) => m.split(';')).map((m) => m.trim());
  if (!masks.length || masks.some((m) => m === '*.*' || m === '*')) return '';
  const ext = new Set<string>();
  for (const m of masks) {
    const e = m.replace(/^\*/, '').toLowerCase();
    if (!e.startsWith('.')) continue;
    ext.add(e);
    if (e === '.xls') ext.add('.xlsx');
  }
  return [...ext].join(',');
}

/** Opens the browser's file picker; resolves with the chosen files, [] when cancelled. */
export function pickFiles(accept: string, multiple: boolean): Promise<File[]> {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    if (accept) input.accept = accept;
    input.multiple = multiple;
    input.style.display = 'none';
    let done = false;
    const finish = (files: File[]) => {
      if (done) return;
      done = true;
      window.removeEventListener('focus', onFocus);
      input.remove();
      for (const f of files) picked.set(f.name, f);
      resolve(files);
    };
    // 'cancel' is fired by current browsers; the focus fallback covers older ones
    const onFocus = () => setTimeout(() => { if (!input.files?.length) finish([]); }, 800);
    input.addEventListener('change', () => finish([...(input.files ?? [])]));
    input.addEventListener('cancel', () => finish([]));
    document.body.appendChild(input);
    window.addEventListener('focus', onFocus, { once: true });
    input.click();
  });
}
