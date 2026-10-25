/*
 * VCL alignment/anchor layout.  Given a container's client size, compute the
 * rectangle of each visible child exactly the way TWinControl.AlignControls
 * does: alTop (by Top), alBottom (by Top, from the bottom), alLeft (by Left),
 * alRight (by Left, from the right), then alClient; alNone controls keep their
 * design position adjusted by akRight/akBottom anchors.
 */
import type { TControl } from '../runtime/vcl/controls';

export interface Rect { left: number; top: number; width: number; height: number }

export function layoutChildren(children: TControl[], clientW: number, clientH: number): Map<TControl, Rect> {
  const out = new Map<TControl, Rect>();
  let l = 0, t = 0, r = clientW, b = clientH;
  const vis = children.filter((c) => c.Visible);
  const by = (a: string) => vis.filter((c) => (c.Align || 'alnone') === a);

  for (const c of by('altop').sort((x, y) => x.Top - y.Top)) {
    const h = Math.min(c.Height, Math.max(0, b - t));
    out.set(c, { left: l, top: t, width: Math.max(0, r - l), height: h });
    t += h;
  }
  for (const c of by('albottom').sort((x, y) => y.Top - x.Top)) {
    const h = Math.min(c.Height, Math.max(0, b - t));
    out.set(c, { left: l, top: b - h, width: Math.max(0, r - l), height: h });
    b -= h;
  }
  for (const c of by('alleft').sort((x, y) => x.Left - y.Left)) {
    const w = Math.min(c.Width, Math.max(0, r - l));
    out.set(c, { left: l, top: t, width: w, height: Math.max(0, b - t) });
    l += w;
  }
  for (const c of by('alright').sort((x, y) => y.Left - x.Left)) {
    const w = Math.min(c.Width, Math.max(0, r - l));
    out.set(c, { left: r - w, top: t, width: w, height: Math.max(0, b - t) });
    r -= w;
  }
  for (const c of by('alclient')) {
    out.set(c, { left: l, top: t, width: Math.max(0, r - l), height: Math.max(0, b - t) });
  }
  for (const c of vis) {
    const a = c.Align || 'alnone';
    if (a !== 'alnone' && a !== 'alcustom') continue;
    const anchors = (c.Anchors ?? ['akleft', 'aktop']).map((x) => String(x).toLowerCase());
    const dp = c.designParent;
    let left = c.Left, top = c.Top, width = c.Width, height = c.Height;
    if (dp) {
      const dw = clientW - dp.w;
      const dh = clientH - dp.h;
      const L = anchors.includes('akleft'), R = anchors.includes('akright');
      const T = anchors.includes('aktop'), B = anchors.includes('akbottom');
      if (R && L) width = Math.max(0, width + dw);
      else if (R) left += dw;
      else if (!L && !R) left += dw / 2;
      if (B && T) height = Math.max(0, height + dh);
      else if (B) top += dh;
      else if (!T && !B) top += dh / 2;
    }
    out.set(c, { left, top, width, height });
  }
  return out;
}
