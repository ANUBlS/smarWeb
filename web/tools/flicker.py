"""Record what the screen does while a module opens (flicker hunting).

python3 tools/flicker.py <menu data-path> <outdir>
Saves frames every ~40 ms for 4 s after the menu click, plus a per-animation-frame log of what is
visible in the new window: window size/position, grid row counts, caption, element count.
"""
import json
import os
import sys
import time
from playwright.sync_api import sync_playwright

path, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
PROBE = """
window.__fl = []; const t0 = performance.now();
const tick = () => {
  const w = [...document.querySelectorAll('section.win')].pop();
  const r = w ? w.getBoundingClientRect() : null;
  const grids = [...document.querySelectorAll('.v-grid')].map(g => g.querySelectorAll('tbody tr').length + '/' + Math.round(g.getBoundingClientRect().height));
  window.__fl.push({t: Math.round(performance.now() - t0), win: r ? [r.x, r.y, r.width, r.height].map(Math.round).join(',') : '-',
    vis: w ? getComputedStyle(w).visibility + '/' + getComputedStyle(w).opacity : '-', grids: grids.join(' '),
    n: document.querySelectorAll('*').length, busy: document.body.style.cursor || getComputedStyle(document.body).cursor});
  if (performance.now() - t0 < 8000) requestAnimationFrame(tick);
};
requestAnimationFrame(tick);
"""
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 1440, 'height': 900})
    lat = int(os.environ.get('LATENCY', '0'))
    if lat:
        def slow(route):
            time.sleep(lat / 1000); route.continue_()
        pg.route('**/api/**', slow)
    pg.goto(os.environ.get('BASE', 'http://localhost:8088/'))
    pg.fill('input[autocomplete=username]', 'sabuhi'); pg.fill('input[type=password]', 'x'); pg.click('button.primary')
    pg.wait_for_function("document.querySelector('.tree') || document.body.innerText.includes('Şirkəti seçin')", timeout=20000)
    if pg.locator('text=Şirkəti seçin').count(): pg.click('button.primary')
    pg.wait_for_selector('.tree')
    parts = path.split('.')
    for i in range(1, len(parts)):
        el = pg.locator(f'.tnode[data-path="{".".join(parts[:i])}"]')
        if el.get_attribute('aria-expanded') == 'false': el.locator('.tw').click()
    pg.wait_for_timeout(500)
    pg.evaluate(PROBE)
    pg.locator(f'.tnode[data-path="{path}"]').click()
    t0 = time.time(); n = 0
    while time.time() - t0 < 8:
        pg.screenshot(path=f'{out}/{n:03d}.png'); n += 1
    log = pg.evaluate('window.__fl')
    prev = None
    for e in log:
        key = (e['win'], e['vis'], e['grids'], e['n'] // 20)
        if key != prev:
            print(e)
        prev = key
    print('frames', len(log), 'shots', n)
    b.close()
