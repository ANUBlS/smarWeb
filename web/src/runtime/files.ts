/*
 * Files chosen by the user (TOpenDialog.Execute → browser file picker).
 *
 * The browser has no file system: the picked File is kept here under the name the Delphi code
 * sees in OpenDialog.FileName, so that later calls with that name (Excel Workbooks.Open,
 * TStringList.LoadFromFile …) can read it.
 */
const picked = new Map<string, File>();

export function pickedFile(name: unknown): File | undefined {
  const n = String(name ?? '');
  return picked.get(n) ?? picked.get(n.split(/[\\/]/).pop() ?? n);
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
