"""Interaction crawler: opens every module, presses its buttons/tabs/grid rows and records
exceptions (Access violation etc.) and DOM churn (flicker).

  python3 tools/crawl.py [out.json] [Module1,Module2] [base-url]

Flicker metric: number of animation frames in which the DOM mutated while the page was idle
(after the module finished opening). A stable form is 0.
"""
import json
import os
import re
import sys
import time

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1] if len(sys.argv) > 1 and sys.argv[1] else os.path.join(HERE, '..', 'test-output', 'crawl.json')
ONLY = set(sys.argv[2].split(',')) if len(sys.argv) > 2 and sys.argv[2] else None
BASE = sys.argv[3] if len(sys.argv) > 3 else 'http://localhost:5173/'
MAX_ACTIONS = int(os.environ.get('MAX_ACTIONS', '40'))
os.makedirs(os.path.dirname(os.path.abspath(OUT)), exist_ok=True)

menu = json.load(open(os.path.join(HERE, '..', 'src', 'generated', 'menu.json'), encoding='utf-8'))
REPORTS = set(menu['reportActions'])
ACTIONS = menu['actions']
leaves = []


def walk(nodes, trail, path):
    for i, n in enumerate(nodes):
        if n['children']:
            walk(n['children'], trail + [n['caption']], path + [i])
        elif n['action'] and n['action'] not in REPORTS and str(n['action']) in ACTIONS:
            leaves.append((trail + [n['caption']], '.'.join(map(str, path + [i])), n, ACTIONS[str(n['action'])]))


walk(menu['tree'], [], [])

OBSERVER = """() => {
  if (window.__churn) return;
  window.__churn = { frames: 0, dirty: false, on: false };
  new MutationObserver((ms) => {
    if (!window.__churn.on) return;
    // ignore the output log / toasts / clock which legitimately change
    if (ms.some(m => !(m.target.closest && m.target.closest('.logpanel,.toasts,.statusline,.taskbar')))) window.__churn.dirty = true;
  }).observe(document.body, { subtree: true, childList: true, attributes: true, characterData: true });
  const loop = () => { if (window.__churn.dirty) { window.__churn.frames++; window.__churn.dirty = false; } requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
}"""

BAD = re.compile(r'access violation|undefined|is not a function|cannot read|null|nan\b|not callable|EUndeclared', re.I)


def main():
    results = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={'width': 1440, 'height': 900})
        pageerrors = []
        pg.on('pageerror', lambda e: pageerrors.append(str(e)[:300]))
        pg.on('dialog', lambda d: d.dismiss())

        def login():
            pg.goto(BASE)
            pg.fill('input[autocomplete=username]', 'sabuhi')
            pg.fill('input[type=password]', 'x')
            pg.click('button.primary')
            pg.wait_for_timeout(900)
            if pg.locator('text=Şirkəti seçin').count():
                pg.click('button.primary')
            pg.wait_for_selector('.tree', timeout=15000)
            pg.evaluate(OBSERVER)

        def idle_churn(ms=2500):
            pg.evaluate('() => { window.__churn.frames = 0; window.__churn.dirty = false; window.__churn.on = true; }')
            pg.wait_for_timeout(ms)
            return pg.evaluate('() => { window.__churn.on = false; return window.__churn.frames; }')

        def drain(rec, where):
            """Dismiss message boxes (recording them) and close any modal forms the action opened."""
            closing = False
            for _ in range(12):
                if pg.locator('.dlg').count():
                    txt = pg.locator('.dlg').first.inner_text()[:240].replace('\n', ' ')
                    rec['dialogs'].append(f'{where}: {txt}')
                    btns = pg.locator('.dlg .dlg-buttons button')
                    # prefer a negative answer so nothing gets "saved" by accident
                    pick = None
                    if closing:  # "Dismiss changes?" after closing an edit form -> yes
                        for i in range(btns.count()):
                            if btns.nth(i).inner_text().strip().lower() in ('bəli', 'yes', 'ok'):
                                pick = btns.nth(i)
                        closing = False
                    for i in range(btns.count() if pick is None else 0):
                        t = btns.nth(i).inner_text().strip().lower()
                        if t in ('xeyr', 'no', 'imtina', 'i̇mtina', 'cancel', 'ok', 'bəli'):
                            pick = btns.nth(i)
                            if t in ('xeyr', 'no', 'imtina', 'i̇mtina', 'cancel'):
                                break
                    (pick or btns.last).click(timeout=2000)
                    pg.wait_for_timeout(250)
                    continue
                if pg.locator('.modal-backdrop .win-title .wbtn.close').count():
                    pg.locator('.modal-backdrop .win-title .wbtn.close').last.click(timeout=2000)
                    closing = True
                    pg.wait_for_timeout(350)
                    continue
                if pg.locator('.dropdown, .popup-menu').count():
                    pg.keyboard.press('Escape')
                    pg.wait_for_timeout(100)
                    continue
                break

        def collect(rec, where):
            logs = pg.evaluate('() => window.__sbLog ? window.__sbLog() : []')
            pg.evaluate('() => window.__sbLogClear && window.__sbLogClear()')
            for l in logs:
                if l['level'] in ('warn', 'error'):
                    rec['errors'].append(f"{where}: [{l['level']}] {l['msg'][:260]}")
            while pageerrors:
                rec['errors'].append(f'{where}: [pageerror] {pageerrors.pop(0)}')

        login()
        shard = os.environ.get('SHARD')  # "i/n": run every n-th module starting at i
        si, sn = (int(x) for x in shard.split('/')) if shard else (0, 1)
        for li, (trail, path, node, mod) in enumerate(leaves):
            if ONLY and mod not in ONLY:
                continue
            if li % sn != si:
                continue
            rec = {'module': mod, 'action': node['action'], 'node': ' / '.join(trail), 'errors': [], 'dialogs': [],
                   'churnOpen': 0, 'churnIdle': 0, 'churnActions': {}, 'steps': 0}
            try:
                pg.reload()
                pg.wait_for_timeout(300)
                login()
                pg.evaluate('() => window.__sbLogClear && window.__sbLogClear()')
                pg.locator('.tree-head input').fill(node['caption'].lower())
                pg.wait_for_timeout(150)
                pg.locator(f'.tnode[data-path="{path}"]').click()
                try:
                    pg.wait_for_function('document.querySelector(".win h2") !== null', timeout=15000)
                except Exception:
                    rec['errors'].append('open: no window')
                pg.evaluate('() => { window.__churn.frames = 0; window.__churn.on = true; }')
                pg.wait_for_timeout(2500)
                rec['churnOpen'] = pg.evaluate('() => { window.__churn.on = false; return window.__churn.frames; }')
                collect(rec, 'open')
                drain(rec, 'open')
                rec['churnIdle'] = idle_churn()

                # enumerate targets inside the main (non-modal) window
                def targets():
                    return pg.evaluate("""() => {
                      const w = document.querySelector('section.win:not(.inactive)') || document.querySelector('section.win');
                      if (!w) return [];
                      const out = [];
                      const vis = el => { const r = el.getBoundingClientRect(); return r.width > 2 && r.height > 2 && !el.disabled && !el.classList.contains('disabled'); };
                      w.querySelectorAll('.tb-btn').forEach((el, i) => vis(el) && out.push(['tb', i, (el.title || el.innerText || '').trim().slice(0, 40)]));
                      w.querySelectorAll('button.v-btn').forEach((el, i) => vis(el) && out.push(['btn', i, el.innerText.trim().slice(0, 40)]));
                      w.querySelectorAll('.v-tab').forEach((el, i) => vis(el) && out.push(['tab', i, el.innerText.trim().slice(0, 40)]));
                      w.querySelectorAll('.v-grid').forEach((el, i) => el.querySelector('tbody tr') && out.push(['grid', i, 'row']));
                      return out;
                    }""")

                done = set()
                for _round in range(3):
                    for kind, idx, label in targets():
                        key = (kind, idx, label)
                        if key in done or len(done) >= MAX_ACTIONS:
                            continue
                        done.add(key)
                        if re.search(r'çap|print|bağla|çıxış|exit|close|excel|export|sil\b|delete', label, re.I) and kind != 'tab':
                            continue  # printing/exporting/closing/deleting is not exercised
                        where = f'{kind}:{label or idx}'
                        win = 'section.win:not(.inactive)'
                        sel = {'tb': f'{win} .tb-btn', 'btn': f'{win} button.v-btn', 'tab': f'{win} .v-tab',
                               'grid': f'{win} .v-grid'}[kind]
                        try:
                            el = pg.locator(sel).nth(idx)
                            pg.evaluate('() => { window.__churn.frames = 0; window.__churn.on = true; }')
                            if kind == 'grid':
                                rows = el.locator('tbody tr')
                                rows.nth(min(1, rows.count() - 1)).locator('td').nth(1).click(timeout=2500)
                                pg.wait_for_timeout(400)
                                rows.nth(0).locator('td').nth(1).dblclick(timeout=2500)
                            else:
                                el.click(timeout=2500)
                            pg.wait_for_timeout(900)
                            rec['churnActions'][where] = pg.evaluate('() => { window.__churn.on = false; return window.__churn.frames; }')
                        except Exception as e:  # noqa
                            rec['errors'].append(f'{where}: [click] {str(e).splitlines()[0][:160]}')
                        rec['steps'] += 1
                        collect(rec, where)
                        drain(rec, where)
                        collect(rec, where + ' (close)')
                rec['churnIdleAfter'] = idle_churn(1500)
            except Exception as e:  # noqa
                rec['errors'].append(f'crawler: {str(e)[:200]}')
            rec['bad'] = [x for x in rec['errors'] + rec['dialogs'] if BAD.search(x)]
            results.append(rec)
            print(f"{mod:24} steps={rec['steps']:2} errors={len(rec['errors']):2} bad={len(rec['bad']):2} "
                  f"churn open/idle/after={rec['churnOpen']}/{rec['churnIdle']}/{rec.get('churnIdleAfter')}", flush=True)
            json.dump(results, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        b.close()


if __name__ == '__main__':
    main()
