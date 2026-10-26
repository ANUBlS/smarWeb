"""Headless smoke test: log in, open every module node in the menu tree, collect errors and screenshots."""
import json
import os
import sys
import time

from playwright.sync_api import sync_playwright

OUT = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1] else './test-output/shots'
ONLY = sys.argv[2].split(',') if len(sys.argv) > 2 and sys.argv[2] else None
os.makedirs(OUT, exist_ok=True)
menu = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'generated', 'menu.json'), encoding='utf-8'))
BASE = os.environ.get('BASE', 'http://localhost:5173/')
REPORTS = set(menu['reportActions'])
ACTIONS = menu['actions']

leaves = []


def walk(nodes, trail, path):
    for i, n in enumerate(nodes):
        if n['children']:
            walk(n['children'], trail + [n['caption']], path + [i])
        elif n['action'] and n['action'] not in REPORTS and str(n['action']) in ACTIONS:
            n['path'] = '.'.join(map(str, path + [i]))
            leaves.append((trail + [n['caption']], n, ACTIONS[str(n['action'])]))


walk(menu['tree'], [], [])
results = []
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1440, 'height': 900})
    console = []
    pg.on('console', lambda m: console.append((m.type, m.text)) if m.type in ('error', 'warning') else None)
    pg.on('pageerror', lambda e: console.append(('pageerror', str(e))))
    def login():
        pg.goto(BASE)
        pg.fill('input[autocomplete=username]', 'sabuhi')
        pg.fill('input[type=password]', 'x')
        pg.click('button.primary')
        pg.wait_for_timeout(1200)
        if pg.locator('text=Şirkəti seçin').count():
            pg.click('button.primary')
        pg.wait_for_selector('.tree', timeout=15000)
    login()
    pg.screenshot(path=f'{OUT}/00-shell.png')
    def one(trail, node, mod):
        console.clear()
        pg.evaluate('window.__sbLogClear()')
        filt = pg.locator('.tree-head input')
        filt.fill(node['caption'].lower())
        pg.wait_for_timeout(150)
        target = pg.locator(f'.tnode[data-path="{node["path"]}"]')
        if target.count() == 0:
            results.append({'module': mod, 'node': ' / '.join(trail), 'error': 'tree node not found'})
            return
        t0 = time.time()
        target.click()
        try:
            pg.wait_for_function('document.querySelector(".win.max h2") !== null', timeout=20000)
        except Exception:
            pass
        pg.wait_for_timeout(2500)
        # close any modal/dialog the module raised on open (capture text first)
        dialog_text = ''
        if pg.locator('.dlg').count():
            dialog_text = pg.locator('.dlg').first.inner_text()[:300]
        title = pg.locator('.win.max h2').first.inner_text() if pg.locator('.win.max h2').count() else ''
        logs = pg.evaluate("""() => (window.__sbLog ? window.__sbLog() : [])""")
        fname = f"{OUT}/{mod}-{node['action']}.png"
        pg.screenshot(path=fname)
        warn = [l for l in logs if l['level'] in ('warn', 'error')]
        results.append({'module': mod, 'action': node['action'], 'node': ' / '.join(trail), 'title': title,
                        'secs': round(time.time() - t0, 1), 'dialog': dialog_text,
                        'console': [c for c in console][:8], 'warnings': warn[:12], 'shot': fname})
        while pg.locator('.dlg').count():
            pg.locator('.dlg .dlg-buttons button').last.click()
            pg.wait_for_timeout(200)
        while pg.locator('.modal-backdrop .win-title .wbtn.close').count():
            pg.locator('.modal-backdrop .win-title .wbtn.close').last.click()
            pg.wait_for_timeout(300)
            while pg.locator('.dlg').count():
                pg.locator('.dlg .dlg-buttons button').last.click()
                pg.wait_for_timeout(200)
        # close module window
        if pg.locator('.win.max .win-title .wbtn.close').count():
            pg.locator('.win.max .win-title .wbtn.close').first.click()
            pg.wait_for_timeout(400)
            while pg.locator('.dlg').count():
                pg.locator('.dlg .dlg-buttons button').first.click()
                pg.wait_for_timeout(200)
        filt.fill('')

    for trail, node, mod in leaves:
        if ONLY and mod not in ONLY and not any(o.endswith('*') and mod.startswith(o[:-1]) for o in ONLY):
            continue
        pg.set_default_timeout(8000)
        try:
            one(trail, node, mod)
        except Exception as e:
            pg.screenshot(path=f"{OUT}/FAIL-{mod}-{node['action']}.png")
            results.append({'module': mod, 'action': node['action'], 'node': ' / '.join(trail), 'error': str(e)[:300],
                            'console': console[:8]})
            login()
    b.close()
json.dump(results, open(f'{OUT}/results.json', 'w'), ensure_ascii=False, indent=1)
for r in results:
    flag = 'OK ' if r.get('title') and not r.get('warnings') and not r.get('console') else '!! '
    print(flag, r['module'], r.get('action'), '|', r.get('title'), '|', r.get('dialog', '')[:80].replace('\n', ' '))
    for w in r.get('warnings', [])[:4]:
        print('     W', w['msg'][:200])
    for c in r.get('console', [])[:3]:
        print('     C', c[0], str(c[1])[:200])
