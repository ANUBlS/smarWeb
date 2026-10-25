"""Drive a module: open menu node by data-path, then perform steps and screenshot each.

Steps (JSON list): ["click:<text>", "dbl:grid", "tb:<toolbutton title or text>", "key:<Key>", "wait:<ms>",
                    "dlg:<button text>", "fill:<css>=<value>", "closemodal"]
"""
import json
import sys
from playwright.sync_api import sync_playwright

path = sys.argv[1]
steps = json.loads(sys.argv[2])
out = sys.argv[3] if len(sys.argv) > 3 else './test-output/ia'
import os
os.makedirs(out, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 1440, 'height': 900})
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:5173/')
    pg.fill('input[autocomplete=username]', 'sabuhi'); pg.fill('input[type=password]', 'x'); pg.click('button.primary')
    pg.wait_for_timeout(1000)
    if pg.locator('text=Şirkəti seçin').count(): pg.click('button.primary')
    pg.wait_for_selector('.tree')
    parts = path.split('.')
    for i in range(1, len(parts)):
        k = '.'.join(parts[:i])
        el = pg.locator(f'.tnode[data-path="{k}"]')
        if el.get_attribute('aria-expanded') == 'false': el.locator('.tw').click()
    pg.locator(f'.tnode[data-path="{path}"]').click()
    pg.wait_for_timeout(3000)
    pg.evaluate('window.__sbLogClear()')
    for n, st in enumerate(steps):
        kind, _, arg = st.partition(':')
        try:
            if kind == 'click':
                pg.get_by_text(arg, exact=True).last.click()
            elif kind == 'tb':
                pg.locator('.tb-btn', has_text=arg).first.click()
            elif kind == 'btn':
                pg.locator('button.v-btn', has_text=arg).last.click()
            elif kind == 'dbl':
                pg.locator('.v-grid tbody tr').nth(int(arg or 0)).dblclick()
            elif kind == 'row':
                pg.locator('.v-grid tbody tr td:not(.ind)').nth(int(arg)).click()
            elif kind == 'key':
                pg.keyboard.press(arg)
            elif kind == 'wait':
                pg.wait_for_timeout(int(arg))
            elif kind == 'dlg':
                pg.locator('.dlg .dlg-buttons button', has_text=arg).first.click()
            elif kind == 'fill':
                sel, _, val = arg.partition('=')
                pg.locator(sel).first.fill(val)
            elif kind == 'closemodal':
                pg.locator('.modal-backdrop .win-title .wbtn.close').last.click()
            pg.wait_for_timeout(1500)
        except Exception as e:
            print('STEP FAILED', st, str(e)[:200])
        pg.screenshot(path=f'{out}/{n:02d}.png')
        dlg = pg.locator('.dlg').first.inner_text()[:200] if pg.locator('.dlg').count() else ''
        modals = pg.locator('.modal-backdrop .win-title h2').all_inner_texts()
        print(f'{n:02d} {st} | modals={modals} | dialog={dlg!r}')
    if os.environ.get('EVAL'):
        print('EVAL', pg.evaluate(os.environ['EVAL']))
    for e in pg.evaluate('window.__sbLog()'):
        if e['level'] in ('warn', 'error', 'api', 'info') or os.environ.get('ALL'):
            print('  LOG', e['level'], e['msg'][:220])
    for e in errs: print('  PAGEERR', e[:300])
    b.close()
