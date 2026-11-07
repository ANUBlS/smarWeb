/*
 * SmartBank plugin menus (Packages/VCL/PluginToolBar.pas, PluginPopupMenu.pas): every button / menu
 * item is a BPL package named in an installation INI file (Plugin=, PluginParam=); clicking it loads
 * the package and calls its InitPlugin(Param).
 */
import { ValueRef } from '../core';
import type { TComponent } from './component';

export interface PluginRec { module: string; param: string; handle: number }

export const rsUnassigned = 'Təyin edilməyib';

/** Icon=… is the .ico file written as decimal byte values separated by spaces. */
export function iconUrl(s: string): string | null {
  const parts = s.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 22) return null;
  const bytes = new Uint8Array(parts.map((x) => Number(x) & 255));
  // ICONDIR: reserved 0, type 1 (icon), count >= 1
  if (bytes[0] !== 0 || bytes[1] !== 0 || bytes[2] !== 1 || bytes[3] !== 0) return null;
  try { return URL.createObjectURL(new Blob([bytes], { type: 'image/x-icon' })); } catch { return null; }
}

/** OnToolButtonClick / PluginMenuItemClick: BeforeLoadPlugin (may cancel), LoadPackage on first use,
 *  then InitPlugin(Param); Checked() gives the menu item's check mark; FinalizePlugin() = True unloads. */
export async function runPlugin(host: TComponent, rec: PluginRec): Promise<{ checked: boolean } | null> {
  const loader = await import('../loader');
  const { callValue } = await import('../pascal');
  if (rec.handle === 0 && rec.module !== '') {
    const load = new ValueRef(true);
    if (host.hasHandler('BeforeLoadPlugin')) await host.fireRaw('BeforeLoadPlugin', host, rec.module, rec.param, load);
    if (!load.value) return null;
    rec.handle = await loader.loadPackage(rec.module);
  }
  if (!rec.handle) return null;
  const init = await loader.getProcAddress(rec.handle, 'InitPlugin');
  if (init) await callValue(init, [rec.param]);
  const chk = await loader.getProcAddress(rec.handle, 'Checked', true);
  const checked = chk ? !!(await callValue(chk, [])) : false;
  const fin = await loader.getProcAddress(rec.handle, 'FinalizePlugin', true);
  if (fin && await callValue(fin, [])) rec.handle = 0;
  return { checked };
}
