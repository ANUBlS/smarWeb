"""Video-record a module opening and report frames whose content flips (A -> B -> A).

python3 tools/flicker_video.py <menu data-path> <outdir>     (BASE, LATENCY env as in flicker.py)
"""
import glob
import os
import subprocess
import sys
import time

from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright

path, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
for f in glob.glob(f'{out}/*'):
    os.remove(f)
MUT = """
window.__mut = []; const t0 = performance.now();
new MutationObserver((ms) => {
  let add = 0, rem = 0, attr = 0, txt = 0; const where = new Set();
  for (const m of ms) {
    if (m.type === 'childList') { add += m.addedNodes.length; rem += m.removedNodes.length; }
    else if (m.type === 'attributes') attr++; else txt++;
    const el = m.target.nodeType === 1 ? m.target : m.target.parentElement;
    if (el) where.add((el.className && typeof el.className === 'string' ? el.className.split(' ')[0] : el.tagName) + (m.type === 'attributes' ? '@' + m.attributeName : ''));
  }
  window.__mut.push({t: Math.round(performance.now() - t0), add, rem, attr, txt, where: [...where].slice(0, 8).join(' ')});
}).observe(document.body, {subtree: true, childList: true, attributes: true, characterData: true});
"""
with sync_playwright() as p:
    b = p.chromium.launch()
    VW, VH = map(int, os.environ.get('VIEW', '1440x900').split('x'))
    ctx = b.new_context(viewport={'width': VW, 'height': VH}, record_video_dir=out, record_video_size={'width': VW, 'height': VH})
    pg = ctx.new_page()
    lat = int(os.environ.get('LATENCY', '0'))
    if lat:
        pg.route('**/api/**', lambda r: (time.sleep(lat / 1000), r.continue_()))
    pg.goto(os.environ.get('BASE', 'http://localhost:8088/'))
    pg.fill('input[autocomplete=username]', 'sabuhi'); pg.fill('input[type=password]', 'x'); pg.click('button.primary')
    pg.wait_for_function("document.querySelector('.tree') || document.body.innerText.includes('Şirkəti seçin')", timeout=20000)
    if pg.locator('text=Şirkəti seçin').count(): pg.click('button.primary')
    pg.wait_for_selector('.tree')
    parts = path.split('.')
    for i in range(1, len(parts)):
        el = pg.locator(f'.tnode[data-path="{".".join(parts[:i])}"]')
        if el.get_attribute('aria-expanded') == 'false': el.locator('.tw').click()
    pg.wait_for_timeout(1500)
    pg.evaluate(MUT)
    pg.evaluate("window.__clickAt = performance.now()")
    pg.locator(f'.tnode[data-path="{path}"]').click()
    pg.wait_for_timeout(int(os.environ.get('WATCH', '5000')))
    muts = pg.evaluate('window.__mut')
    video = pg.video.path()
    ctx.close(); b.close()

print('mutation batches:', len(muts))
for m in muts:
    print('  ', m)
subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', video, '-vf', 'fps=50', f'{out}/f%04d.png'], check=True)
frames = sorted(glob.glob(f'{out}/f*.png'))
ims = [Image.open(f).convert('L').resize((VW // 4, VH // 4)) for f in frames]
changes = []
for i in range(1, len(ims)):
    bb = ImageChops.difference(ims[i], ims[i - 1]).point(lambda v: 255 if v > 24 else 0).getbbox()
    if bb:
        changes.append((i, bb))
print('frames', len(ims), 'changed', len(changes))
for i, bb in changes:
    print('  frame', i, 'box', [v * 4 for v in bb])
# flips: frame i differs from i-1 but i+1 (or i+2) returns to i-1
for i in range(1, len(ims) - 2):
    d = ImageChops.difference(ims[i], ims[i - 1]).point(lambda v: 255 if v > 24 else 0).getbbox()
    if not d:
        continue
    for k in (1, 2):
        back = ImageChops.difference(ims[i + k], ims[i - 1]).point(lambda v: 255 if v > 24 else 0).getbbox()
        if not back:
            print('FLIP at frame', i, 'box', [v * 4 for v in d], 'returns after', k)
