"""Generate the SmartWeb front-end sources from the Delphi repository.

Outputs into app/src/generated/:
  menu.json                       decoded SmartBank.ini tree + action->module map
  modules/<Module>/index.js       manifest: units, forms, main form class
  modules/<Module>/<Unit>.js      transpiled unit (pas2js)
  modules/<Module>/<Unit>.dfm.json parsed form layout
  lib/<Unit>.js / .dfm.json       shared library units (dependency closure)
  report.json                     transpile/parse statistics + not-ported list
"""
import glob
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))
from dfm2json import parse_file as parse_dfm  # noqa: E402
from modules import ACTIONS, REPORT_ACTIONS  # noqa: E402
from pas2js import parse_unit_file, collect_sigs, gen_unit, PasError  # noqa: E402

REPO = os.environ.get('SMARWEB_REPO') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')) + '/'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'generated') + '/'

# VCL / third-party / component units: emulated natively by the runtime, never transpiled.
NATIVE = set('''windows messages sysutils classes graphics controls forms dialogs activex axctrls stdvcl toolwin
comctrls grids dbgrids actnlist extctrls imglist db oracledata menus stdctrls buttons oracle comobj comserv variants
dbctrls mask math strutils dateutils clipbrd registry inifiles shellapi printers qrctrls quickrpt qrprntr dbclient
provider types typinfo commctrl checklst filectrl jpeg olectrls oleserver excel2000 excelxp excel97 shlobj tabs
outline xmldom xmlintf msxmldom xmldoc dbtables bde dbgrideh gridseh dbctrlseh dbgridehgrouping ehlibvcl dblookupeh
tlhelp32 mmsystem oracleci richedit wininet urlmon psapi winsock qrexport fmtbcd sqlexpr dbcommon memtableeh
dbutilseh prntseh rtlconsts consts contnrs syncobjs mapi winspool adodb adoint office2000 word2000 xpman spin
calendar gauges cgauges zlib idhttp idbasecomponent idcomponent idtcpconnection idtcpclient idglobal idssl
idsslopenssl idserveriohandler iduri dbcgrids extdlgs xdbgrids xfsctrls xdbctrls dblookup qexport4 qexport4xlsx
qexport4dialog qexport4xls qexport4pdf grimgctrl oraclenavigator
currencyedit searchedit dbviewcombobox hintbox searchcombo nlslocalizer nlsdialogs ldialogs cmexcelexport
excelexporter evanescence cmdbsearchedit cmhintdblookupcombobox fieldsearchedit sbplgax50_tlb cryptomodellib_tlb
sbtranslateproc sboutils sbplg50 axplugin pluginmanager inisource formregistry qrpdffilt pdfconst qr5const bsdkdll lzw
qrxlsfilt qrwebfilt qrhtmlfilt qrexpr qrextra qrprev qrtee qrcomp qrexport'''.split())

SKIP_DIR_RE = re.compile(r'(__history|copy of|copy \(|\d{2}\.\d{2}\.\d{4}|\d{8}|_old|old\b|---|backup|/origin/|/fssrc/)', re.I)


def build_index():
    idx = {}
    for f in glob.glob(REPO + '**/*.pas', recursive=True):
        rel = f[len(REPO):]
        if SKIP_DIR_RE.search('/' + rel.lower()):
            continue
        name = os.path.basename(f)[:-4].lower()
        idx.setdefault(name, []).append(f)
    return idx


def pick(paths, prefer_dir):
    # prefer same module dir, then shortest path under Packages/
    def score(p):
        s = 0
        if prefer_dir and p.startswith(REPO + prefer_dir):
            s -= 1000
        if '/Packages/' in p:
            s -= 100
        return s + len(p)
    return sorted(paths, key=score)[0]


def strip_binary(node):
    p = node['props']
    for k in list(p.keys()):
        if p[k] == '<binary>' or k in ('Bitmap', 'Picture.Data', 'Glyph.Data', 'QBEDefinition.QBEFieldDefs',
                                      'Variables.Data', 'Icon.Data'):
            if k == 'Variables.Data':
                continue
            del p[k]
    for c in node['children']:
        strip_binary(c)
    return node


def dfm_variables(path):
    """TOracleDataSet Variables.Data is binary; extract variable names (':NAME') from the hex blob."""
    return {}


def decode_menu():
    raw = open(REPO + 'Packages/Customer_Operations/SmartBank.ini', 'rb').read().decode('cp1251', 'replace')
    from dfm2json import azdec
    text = azdec(raw)
    nodes = {}
    for m in re.finditer(r'^\[Tree\\Sections((?:\\Item\d+)*)\]\s*\n((?:(?!\[).*\n?)*)', text, re.M):
        path = m.group(1)
        body = m.group(2)
        cap = re.search(r'^Caption=(.*)$', body, re.M)
        act = re.search(r'^Action=(.*)$', body, re.M)
        if not cap:
            continue
        nodes[path] = {'caption': cap.group(1).strip(), 'action': act.group(1).strip() if act else ''}

    def build(prefix):
        kids = []
        i = 0
        while prefix + '\\Item%d' % i in nodes or i < 40:
            key = prefix + '\\Item%d' % i
            if key in nodes:
                n = nodes[key]
                a = n['action']
                num = None
                params = {}
                if a.startswith('#'):
                    mm = re.match(r'#(\d+)(?:@(.*))?', a)
                    num = int(mm.group(1))
                    if mm.group(2):
                        for kv in mm.group(2).split(','):
                            if '=' in kv:
                                k, v = kv.split('=', 1)
                                params[k.strip()] = v.strip().replace('_', ' ') if k.strip() == 'Caption' else v.strip()
                item = {'caption': n['caption'], 'action': num, 'params': params, 'children': build(key)}
                if n['caption'] != '<no data>':
                    kids.append(item)
            i += 1
        return kids

    tree = build('')
    return tree


def main():
    os.makedirs(OUT, exist_ok=True)
    idx = build_index()
    report = {'modules': {}, 'notPorted': [], 'missingUnits': {}}
    all_units = {}  # path -> parsed unit
    module_units = {}  # module -> [paths]
    lib_units = {}  # lname -> path

    def load(path):
        if path not in all_units and os.path.getsize(path) < 64:
            all_units[path] = None
            report.setdefault('emptySources', []).append(path[len(REPO):])
        if path not in all_units:
            try:
                all_units[path] = parse_unit_file(path)
            except Exception as e:  # noqa
                all_units[path] = None
                report.setdefault('unitParseErrors', []).append([path[len(REPO):], str(e)[:200]])
        return all_units[path]

    modules = {}
    for num, (name, d) in ACTIONS.items():
        modules.setdefault(name, d)

    for name, d in modules.items():
        paths = [f for f in glob.glob(REPO + d + '/*.pas') if not f.endswith('_TLB.pas')
                 and os.path.basename(f).lower() not in ('forms.pas',)]
        module_units[name] = paths
        own = {os.path.basename(p)[:-4].lower() for p in paths}
        queue = list(paths)
        seen = set(paths)
        while queue:
            p = queue.pop()
            u = load(p)
            if not u:
                continue
            for un in u['uses']:
                ul = un.lower()
                if ul in NATIVE or ul in own or ul.endswith('_tlb'):
                    continue
                if ul in lib_units:
                    continue
                cands = idx.get(ul)
                if not cands:
                    report['missingUnits'].setdefault(ul, []).append(name)
                    continue
                lp = pick(cands, d)
                lib_units[ul] = lp
                if lp not in seen:
                    seen.add(lp)
                    queue.append(lp)
    # always include the core API
    for p in glob.glob(REPO + 'Packages/sboapi50/*.pas'):
        n = os.path.basename(p)[:-4].lower()
        if n not in NATIVE:
            lib_units.setdefault(n, p)
            load(p)

    sigs = {}
    records = {}
    for p, u in all_units.items():
        if u:
            collect_sigs(u, sigs)
            records.update(u['records'])

    def emit(path, outdir):
        u = load(path)
        if not u:
            return None
        code, ok, fail = gen_unit(u, sigs, records)
        base = os.path.basename(path)[:-4]
        os.makedirs(outdir, exist_ok=True)
        with open(os.path.join(outdir, base + '.js'), 'w', encoding='utf-8') as fh:
            fh.write(code)
        for r in u['routines']:
            if r['error'] or r['body'] is None:
                report['notPorted'].append([path[len(REPO):], r['sig']['name'], (r['error'] or '')[:160]])
        dfm = path[:-4] + '.dfm'
        form = None
        if os.path.exists(dfm):
            try:
                tree = strip_binary(parse_dfm(dfm))
                with open(os.path.join(outdir, base + '.dfm.json'), 'w', encoding='utf-8') as fh:
                    json.dump(tree, fh, ensure_ascii=False, separators=(',', ':'))
                form = tree['class']
            except Exception as e:  # noqa
                report.setdefault('dfmErrors', []).append([dfm[len(REPO):], str(e)[:120]])
        classes = list(u['classes'].values())
        main_cls = None
        for c in classes:
            if (c['parent'] or '').lower() == 'tactiveform':
                main_cls = c['name']
        return {'unit': u['name'], 'file': base, 'form': form, 'ok': ok, 'fail': fail, 'activeForm': main_cls,
                'classes': [c['name'] for c in classes]}

    lib_manifest = []
    for ln, p in sorted(lib_units.items()):
        r = emit(p, OUT + 'lib')
        if r:
            r['source'] = p[len(REPO):]
            lib_manifest.append(r)
    with open(OUT + 'lib/index.js', 'w', encoding='utf-8') as fh:
        fh.write('// Generated library manifest\nexport default %s;\n' % json.dumps(lib_manifest, ensure_ascii=False, indent=1))

    for name, paths in module_units.items():
        outdir = OUT + 'modules/' + name
        man = []
        for p in sorted(paths):
            r = emit(p, outdir)
            if r:
                r['source'] = p[len(REPO):]
                man.append(r)
        main = next((m['activeForm'] for m in man if m['activeForm']), None)
        manifest = {'name': name, 'dir': modules[name], 'mainForm': main, 'units': man}
        with open(outdir + '/index.js', 'w', encoding='utf-8') as fh:
            fh.write('// Generated module manifest\nexport default %s;\n' % json.dumps(manifest, ensure_ascii=False, indent=1))
        report['modules'][name] = {'mainForm': main, 'units': len(man), 'routines': sum(m['ok'] for m in man),
                                   'failed': sum(m['fail'] for m in man)}

    # enum identifiers referenced by code (dsEdit, alClient, fsBold…) → enums.json
    enum_re = re.compile(r'^(al|ds|fs|ta|bs|bv|po|ws|ss|dg|lo|sr|rf|ak|tb|cs|fk|ps|pm|ic|tv|sc|dm|ck|ec|lb|vs|wr|xl|gd|bk|tc|tp|ff|ft|st|ga|dt|ht|sb|ld|ob|op|pb|ra|rs|so|sm|ma|ov|lm|ca|pc|ex|ba|bt|bc|rc|hs|em|dk|fp|da|rb|uc|ms|lv|nb|ug|cm|cb|ot|di|bi|af|mt|tl|ts|gk|fv|ro|lm|ts|ug|ws|xl)[A-Z][A-Za-z0-9]*$')
    defined = set()
    enum_names = set()
    for f in glob.glob(OUT + '**/*.js', recursive=True):
        t = open(f, encoding='utf-8').read()
        for m in re.finditer(r'U\.(?:func|const|var_|defClass)\("([^"]+)"', t):
            defined.add(m.group(1).lower())
        for m in re.finditer(r'\$\.(?:v|call|ref_)\(C, "([^"]+)"|\$\.w(?:v|call|set)\(\[[^\]]*\], "([^"]+)"|"([A-Za-z][A-Za-z0-9]+)"', t):
            n = m.group(1) or m.group(2)
            if n and enum_re.match(n):
                enum_names.add(n)
    enum_names = sorted(n for n in enum_names if n.lower() not in defined)
    with open(OUT + 'enums.json', 'w', encoding='utf-8') as fh:
        json.dump(enum_names, fh)

    menu = {'tree': decode_menu(),
            'actions': {str(k): v[0] for k, v in ACTIONS.items()},
            'reportActions': sorted(REPORT_ACTIONS)}
    with open(OUT + 'menu.json', 'w', encoding='utf-8') as fh:
        json.dump(menu, fh, ensure_ascii=False, indent=1)
    with open(OUT + 'report.json', 'w', encoding='utf-8') as fh:
        json.dump(report, fh, ensure_ascii=False, indent=1)
    print(json.dumps({k: v for k, v in report['modules'].items()}, indent=0))
    print('lib units', len(lib_manifest), 'not ported', len(report['notPorted']),
          'missing', sorted(report['missingUnits'].keys()))


if __name__ == '__main__':
    main()
