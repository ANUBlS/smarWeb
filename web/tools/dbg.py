"""Open one menu node (by data-path) and dump all runtime log entries and page errors with stacks."""
import sys
from playwright.sync_api import sync_playwright
path = sys.argv[1]
grep = sys.argv[2] if len(sys.argv) > 2 else ''
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 1440, 'height': 900})
    errs = []
    pg.on('pageerror', lambda e: errs.append(f'{e}\n{e.stack}'))
    pg.on('console', lambda m: errs.append('CONSOLE ' + m.text) if m.type == 'error' else None)
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
    pg.wait_for_timeout(4000)
    for e in pg.evaluate('window.__sbLog()'):
        if not grep or grep.lower() in e['msg'].lower(): print(e['level'], e['msg'][:4000])
    for e in errs: print('ERR', e[:1500])
    if len(sys.argv) > 3:
        print('EVAL', pg.evaluate(sys.argv[3]))
    pg.screenshot(path='./test-output/dbg.png')
    b.close()
