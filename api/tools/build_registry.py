"""Build the API's module registry from the transpiled web client (web/src/generated).

For every module (and the run-time packages it loads) it records what the Delphi code sends to
Oracle, so the API can document each module separately in Swagger and check incoming statements:

  datasets   TOracleDataSet / TOracleQuery components: source id, SQL, declared variables
  packages   TOraclePackage components: Oracle package name, routines the code calls on them
  sql        other statement texts found in the code (SQL.Text := '…', SQL.Add('…'))

  python3 api/tools/build_registry.py         # writes api/smartweb_api/registry/*.json
"""
from __future__ import annotations

import glob
import json
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
GEN = os.path.join(ROOT, 'web', 'src', 'generated')
OUT = os.path.join(ROOT, 'api', 'smartweb_api', 'registry')

DOA_TYPES = {3: 'integer', 4: 'float', 5: 'string', 12: 'date', 8: 'string', 102: 'cursor', 113: 'blob', 112: 'clob',
             252: 'boolean', 1: 'string', 96: 'string'}  # same codes as web/src/runtime/data/oracle.ts
SQL_START = re.compile(r'^\s*(select|insert|update|delete|merge|begin|declare|with|call|lock|truncate)\b', re.I)
CALL = re.compile(r'"(Call(?:Procedure|IntegerFunction|FloatFunction|StringFunction|DateFunction|BooleanFunction|'
                  r'VariantFunction))", \[(?:"([A-Za-z][\w$#]*)"|\(await \$\.(?:wv|v)\((?:\[[^\]]*\], )?(?:C, )?"([A-Za-z]\w*)")')
CONSTS: dict[str, str] = {}  # Pascal string constants used as routine names (sPN_AddAccount = 'AddAccount')
COMP_BEFORE = re.compile(r'"([A-Za-z][\w]*)"\)\)?, "Call(?:Procedure|\w+Function)"$')


def manifest(path: str) -> dict:
    t = open(path, encoding='utf-8').read()
    return json.loads(t[t.index('{') if t.lstrip().startswith('//') and '{' in t else t.index('export default') + 15:].rstrip().rstrip(';'))


def load_manifest(path: str):
    t = open(path, encoding='utf-8').read()
    body = t.split('export default', 1)[1].strip().rstrip(';')
    return json.loads(body)


def walk(node, out):
    out.append(node)
    for c in node.get('children', []):
        walk(c, out)


def doa_vars(props) -> list[dict]:
    out = []
    for v in props.get('Variables.Data') or []:
        if isinstance(v, dict) and v.get('name'):
            out.append({'name': v['name'].lstrip(':').upper(), 'type': DOA_TYPES.get(v.get('type'), 'string')})
    return out


def norm_sql(s: str) -> str:
    return ' '.join(s.split())


def unit_items(folder: str, info: dict, comp_pkg: dict) -> tuple[list, dict, list]:
    """datasets, {component: {package, routines}}, sql strings of one transpiled unit."""
    datasets, packages, sqls = [], {}, []
    dfm = os.path.join(folder, info['file'] + '.dfm.json')
    root_cls = None
    if os.path.exists(dfm):
        tree = json.load(open(dfm, encoding='utf-8'))
        root_cls = tree.get('class')
        nodes = []
        walk(tree, nodes)
        for n in nodes:
            c, p = n.get('class', ''), n.get('props', {})
            if c in ('TOracleDataSet', 'TOracleQuery', 'TOracleQueryDataSet'):
                sql = '\n'.join(x if isinstance(x, str) else '' for x in p.get('SQL.Strings') or [])
                datasets.append({'name': n['name'], 'source': f"{root_cls}.{n['name']}", 'kind': c,
                                 'sql': sql, 'variables': doa_vars(p), 'unit': info['unit']})
            elif c in ('TOraclePackage', 'TOracleStoredProc'):
                packages[n['name']] = {'package': p.get('PackageName', ''), 'mode':
                                       'named' if str(p.get('ParameterMode', {}).get('i', '') if isinstance(p.get('ParameterMode'), dict) else '').lower() == 'pmnamed' else 'positional',
                                       'routines': set(), 'source': f"{root_cls}.{n['name']}"}
    js = os.path.join(folder, info['file'] + '.js')
    if os.path.exists(js):
        code = open(js, encoding='utf-8').read()
        # with-block targets: const $tN = (await $.wv([...], "Comp", …)) / (await $.mv(…, "Comp"))
        tvars = {}
        for tm in re.finditer(r'const (\$t\d+) = \(await \$\.(?:wv|mv|v)\((.{0,200}?)\)\);', code):
            names = re.findall(r'"([A-Za-z][\w]*)"', tm.group(2))
            if names:
                tvars[tm.group(1)] = names[-1]
        is_pkg = lambda c: bool(c) and (c in packages or c.lower() in comp_pkg)  # noqa: E731
        for m in CALL.finditer(code):
            before = code[max(0, m.start() - 220):m.start()].rstrip()
            comp = None
            w = re.search(r'\$\.wcall\(\[([^\]]*)\], $', before + '')
            if w is None:
                w = re.search(r'\$\.wcall\(\[([^\]]*)\], ?$', before)
            if w:
                for tv in reversed([x.strip() for x in w.group(1).split(',')]):
                    if is_pkg(tvars.get(tv)):
                        comp = tvars[tv]
                        break
            if comp is None:
                k = [c for c in re.findall(r'"([A-Za-z][\w]*)"(?:, C, (?:false|true))?\)\)', before[-160:]) if is_pkg(c)]
                if k:
                    comp = k[-1]
            entry = packages.get(comp) if comp in packages else None
            if entry is None:
                pkg = comp_pkg.get((comp or '').lower())
                key = comp or '?'
                entry = packages.setdefault(key, {'package': pkg or '', 'mode': 'positional', 'routines': set(),
                                                  'source': f'*.{key}'})
            rname = m.group(2) or CONSTS.get((m.group(3) or '').lower())
            if not rname or not re.match(r'^[A-Za-z][\w$#]*$', rname):
                continue
            entry['routines'].add((rname, m.group(1)))
        for s in re.findall(r'"((?:[^"\\]|\\.){12,})"', code):
            try:
                text = json.loads('"' + s + '"')
            except Exception:  # noqa: BLE001
                continue
            if SQL_START.match(text) and len(text) < 20000:
                sqls.append(norm_sql(text))
    return datasets, packages, sqls


def main():
    os.makedirs(OUT, exist_ok=True)
    menu = json.load(open(os.path.join(GEN, 'menu.json'), encoding='utf-8'))
    # captions from the menu
    captions = {}

    def wm(nodes, trail):
        for n in nodes:
            a = menu['actions'].get(str(n['action']))
            if a and not n['children']:
                captions.setdefault(a, ' / '.join(trail + [n['caption']]))
            wm(n['children'], trail + [n['caption']])
    wm(menu['tree'], [])

    # component name -> Oracle package (for calls made on another unit's component)
    comp_pkg = {}
    for f in glob.glob(os.path.join(GEN, '**', '*.dfm.json'), recursive=True):
        nodes = []
        walk(json.load(open(f, encoding='utf-8')), nodes)
        for n in nodes:
            if n.get('class') in ('TOraclePackage', 'TOracleStoredProc') and n['props'].get('PackageName'):
                comp_pkg.setdefault(n['name'].lower(), n['props']['PackageName'])

    for f in glob.glob(os.path.join(GEN, '**', '*.js'), recursive=True):
        for k, v in re.findall(r'U\.const\("(\w+)", "([^"\\]*)"\)', open(f, encoding='utf-8').read()):
            CONSTS.setdefault(k.lower(), v)
    lib = load_manifest(os.path.join(GEN, 'lib', 'index.js'))
    lib_by_file = {u['file'].lower(): u for u in lib}

    def collect(folder, units):
        ds, pk, sq = [], {}, []
        for u in units:
            a, b, c = unit_items(folder, u, comp_pkg)
            ds += a
            sq += c
            for k, v in b.items():
                if k in pk:
                    pk[k]['routines'] |= v['routines']
                else:
                    pk[k] = v
        return ds, pk, sq

    def finish(pk):
        return [{'component': k, 'package': v['package'], 'mode': v['mode'], 'source': v['source'],
                 'routines': sorted({'name': r, 'call': c} for r, c in v['routines']) if False else
                 [{'name': r, 'call': c} for r, c in sorted(v['routines'])]}
                for k, v in sorted(pk.items()) if v['routines'] or v['package']]

    # shared library units
    lds, lpk, lsq = collect(os.path.join(GEN, 'lib'), lib)
    common = {'name': 'Common', 'caption': 'Ümumi (sboapi və paylaşılan modullar)', 'datasets': lds,
              'packages': finish(lpk), 'sql': sorted(set(lsq))}
    json.dump(common, open(os.path.join(OUT, 'Common.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

    index = [{'name': 'Common', 'caption': common['caption'], 'plugin': False, 'datasets': len(lds),
              'packages': len(common['packages']), 'sql': len(common['sql'])}]
    for idx in sorted(glob.glob(os.path.join(GEN, 'modules', '*', 'index.js'))):
        m = load_manifest(idx)
        name = m['name']
        folder = os.path.dirname(idx)
        ds, pk, sq = collect(folder, m['units'])
        entry = {'name': name, 'caption': captions.get(name, ''), 'dir': m.get('dir', ''),
                 'mainForm': m.get('mainForm'), 'plugin': name.startswith('P_'),
                 'plugins': m.get('plugins', {}), 'lib': m.get('lib', []),
                 'datasets': ds, 'packages': finish(pk), 'sql': sorted(set(sq))}
        json.dump(entry, open(os.path.join(OUT, f'{name}.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        index.append({'name': name, 'caption': entry['caption'], 'plugin': entry['plugin'],
                      'datasets': len(ds), 'packages': len(entry['packages']), 'sql': len(entry['sql'])})
    json.dump(index, open(os.path.join(OUT, '_index.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print(f'{len(index)} modules, common: {len(lds)} datasets / {len(common["packages"])} packages')


if __name__ == '__main__':
    sys.exit(main())
