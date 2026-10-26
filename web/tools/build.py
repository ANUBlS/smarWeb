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
from extra_modules import EXTRA, EXTRA_ROOT, CATEGORY_ORDER, FIRST_ACTION, MENU_HIDDEN  # noqa: E402
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
qrxlsfilt qrwebfilt qrhtmlfilt qrexpr qrextra qrprev qrtee qrcomp qrexport
actnpopup appevnts chart clocale comstrs dbactns dbxjson designer designeditors designintf dsgnintf encddecd
frxclass frxcross frxdbset frxexportbiff frxexportrtf frxexportxls frxpreview fs_synmemo gifimg pngimage
idcoder idcoder00e idcoder3to4 idcodermime idcoderuue idcoderxxe idiohandler idiohandlersocket idiohandlerstack
idexception idstack idmultipartformdata idsmtp idmessage idftp idhttpheaderinfo idassignednumbers
invokeregistry ioutils keyboard olectnrs platformdefaultstyleactnctrls qcontrols qforms qpropfilereh rabase
racontrolsvcl rio shdocvw shfolder soaphttpclient stdactns teengine teeprocs tntstdctrls winprocs wintypes word97
wordxp xsbuiltins co_statement_unit system.json json superobject generics.collections uitypes
plgmodalcontainer uplgcontainer axloader pluginini plugindecls plugintoolbar pluginpopupmenu sequence
categorybuttons icecrypt calculatoreh prvieweh prndbgeh prntseh propfilereh propstorageediteh propstorageeh prvfrmeh richedeh qpropstorageeh
syncommons syncrypto synpdf synlz syntable syngdiplus synzip synlizard mormotreport mormot'''.split())

# Renamed copies of a shared unit used side by side in this repository snapshot: a module and the
# run-time packages it loads must share one instance of the unit's globals (CommonGrid …).
UNIT_ALIASES = {
    'commondeclsimpl_new': 'NewCommonDeclsImpl',  # DepositsManager_New vs its SBDM_*_new plugins (same API)
}

# Third-party libraries bundled in the repository that the runtime provides (or that only serve
# reports/PDF/compression): never transpiled even when their sources are found.
NATIVE_DIRS = ('Quickrep505/',)

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
                if all_units[path]:
                    all_units[path]['uses'] = [UNIT_ALIASES.get(x.lower(), x) for x in all_units[path]['uses']]
            except Exception as e:  # noqa
                all_units[path] = None
                report.setdefault('unitParseErrors', []).append([path[len(REPO):], str(e)[:200]])
        return all_units[path]

    modules = {}
    for num, (name, d) in ACTIONS.items():
        modules.setdefault(name, d)
    only = set(filter(None, os.environ.get('ONLY_MODULES', '').split(',')))
    for name, d, _cat, _cap in EXTRA:
        modules.setdefault(name, d)
    if only:
        modules = {k: v for k, v in modules.items() if k in only}

    def add_module(name, d, paths):
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
                if any(nd in lp for nd in NATIVE_DIRS):
                    continue
                lib_units[ul] = lp
                if lp not in seen:
                    seen.add(lp)
                    queue.append(lp)

    for name, d in list(modules.items()):
        add_module(name, d, [f for f in glob.glob(REPO + d + '/*.pas') if not f.endswith('_TLB.pas')
                             and os.path.basename(f).lower() not in ('forms.pas',)
                             and os.path.basename(f)[:-4].lower() not in NATIVE])

    # ---- BPL plugins: LoadPackage('X.bpl') + GetProcAddress(h, 'InitPlugin') -------------------
    # Each referenced package is built from its .dpk `contains` list; among copies of a package the
    # one closest to the calling module's folder is used (bank-specific variants sit next to it).
    dpk_index = {}
    for f in glob.glob(REPO + '**/*.dpk', recursive=True):
        rel = f[len(REPO):]
        if rel.startswith('web/') or re.search(r'__history|copy of', rel, re.I):
            continue
        dpk_index.setdefault(os.path.basename(f)[:-4].lower(), []).append(f)

    def read_text(f):
        b = open(f, 'rb').read()
        try:
            return b.decode('utf-8-sig')
        except UnicodeDecodeError:
            return b.decode('cp1251', 'replace')

    def dpk_units(f):
        raw = read_text(f)
        m = re.search(r'\bcontains\b(.*?);', raw, re.S | re.I)
        out = []
        for _u, rp in re.findall(r"(\w+)\s+in\s+'([^']+)'", m.group(1) if m else ''):
            pth = os.path.normpath(os.path.join(os.path.dirname(f), rp.replace('\\', '/')))
            if os.path.exists(pth) and os.path.basename(pth)[:-4].lower() not in NATIVE:
                out.append(pth)
        return out

    def src_of(pth):
        try:
            return open(pth, 'rb').read().decode('cp1251', 'replace')
        except OSError:
            return ''

    def closure_paths(paths):
        seen, queue = set(paths), list(paths)
        while queue:
            u = all_units.get(queue.pop())
            for ul in (x.lower() for x in (u['uses'] if u else [])):
                lp = lib_units.get(ul)
                if lp and lp not in seen:
                    seen.add(lp)
                    queue.append(lp)
        return seen

    def common(a, b):
        n = 0
        for x, y in zip(a.split('/'), b.split('/')):
            if x != y:
                break
            n += 1
        return n

    plugin_name_of = {}
    module_plugins = {}
    plugin_exports = {}
    pending = list(module_units.keys())
    while pending:
        name = pending.pop()
        near = modules[name]
        refs = set()
        for pth in closure_paths(module_units[name]):
            refs.update(x.lower() for x in re.findall(r"'([\w\-. ]+)\.bpl'", src_of(pth), re.I))
        for ref in sorted(refs):
            cands = dpk_index.get(ref)
            if not cands:
                continue
            usable = [f for f in cands if dpk_units(f)] or cands
            best = sorted(usable, key=lambda f: (-common(os.path.dirname(f[len(REPO):]), near),
                                                 bool(SKIP_DIR_RE.search('/' + f.lower())), len(f)))[0]
            if best not in plugin_name_of:
                base = 'P_' + re.sub(r'\W', '_', os.path.basename(best)[:-4])
                pname, k = base, 2
                while pname in modules:
                    pname, k = '%s_%d' % (base, k), k + 1
                plugin_name_of[best] = pname
                modules[pname] = os.path.dirname(best[len(REPO):])
                units = dpk_units(best)
                for pth in units:
                    load(pth)
                add_module(pname, modules[pname], units)
                ex = []
                for pth in units:
                    for grp in re.findall(r'^\s*exports\b(.*?);', src_of(pth), re.S | re.I | re.M):
                        ex += [re.split(r'\s+', x.strip())[0] for x in grp.split(',') if x.strip()]
                plugin_exports[pname] = ex
                pending.append(pname)
            module_plugins.setdefault(name, {})[ref + '.bpl'] = plugin_name_of[best]
    report['plugins'] = {n: modules[n] for n in plugin_exports}
    # always include the core API
    for p in glob.glob(REPO + 'Packages/sboapi50/*.pas'):
        n = os.path.basename(p)[:-4].lower()
        if n not in NATIVE:
            lib_units.setdefault(n, p)
            load(p)

    sigs = {}
    records = {}
    import pas2js as _p2j
    for p, u in all_units.items():
        if u:
            collect_sigs(u, sigs)
            records.update(u['records'])
            _p2j.ALIASES.update(u.get('aliases', {}))

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

    # per-module closure of library units, so the browser loads only what a module needs
    lib_file = {ln: os.path.basename(p)[:-4] for ln, p in lib_units.items()}
    always = sorted(n for n, p in lib_units.items() if '/sboapi50/' in p)

    def uses_of(path):
        u = all_units.get(path)
        return [x.lower() for x in (u['uses'] if u else [])]

    def lib_closure(paths):
        seen, queue = set(always), list(always)
        for p in paths:
            for ul in uses_of(p):
                if ul in lib_units and ul not in seen:
                    seen.add(ul)
                    queue.append(ul)
        while queue:
            ln = queue.pop()
            for ul in uses_of(lib_units[ln]):
                if ul in lib_units and ul not in seen:
                    seen.add(ul)
                    queue.append(ul)
        return sorted(lib_file[x] for x in seen)

    for name, paths in module_units.items():
        outdir = OUT + 'modules/' + name
        os.makedirs(outdir, exist_ok=True)
        man = []
        for p in sorted(paths):
            r = emit(p, outdir)
            if r:
                r['source'] = p[len(REPO):]
                man.append(r)
        main = next((m['activeForm'] for m in man if m['activeForm']), None)
        manifest = {'name': name, 'dir': modules[name], 'mainForm': main, 'units': man, 'lib': lib_closure(paths),
                    'plugins': module_plugins.get(name, {})}
        if name in plugin_exports:
            manifest['exports'] = plugin_exports[name]
        with open(outdir + '/index.js', 'w', encoding='utf-8') as fh:
            fh.write('// Generated module manifest\nexport default %s;\n' % json.dumps(manifest, ensure_ascii=False, indent=1))
        report['modules'][name] = {'mainForm': main, 'units': len(man), 'routines': sum(m['ok'] for m in man),
                                   'failed': sum(m['fail'] for m in man)}

    # enum identifiers referenced by code (dsEdit, alClient, fsBold…) → enums.json
    enum_re = re.compile(r'^(bl|al|ds|fs|ta|bs|bv|po|ws|ss|dg|lo|sr|rf|ak|tb|cs|fk|ps|pm|ic|tv|sc|dm|ck|ec|lb|vs|wr|xl|gd|bk|tc|tp|ff|ft|st|ga|dt|ht|sb|ld|ob|op|pb|ra|rs|so|sm|ma|ov|lm|ca|pc|ex|ba|bt|bc|rc|hs|em|dk|fp|da|rb|uc|ms|lv|nb|ug|cm|cb|ot|di|bi|af|mt|tl|ts|gk|fv|ro|lm|ts|ug|ws|xl)[A-Z][A-Za-z0-9]*$')
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

    tree = decode_menu()
    actions = {str(k): v[0] for k, v in ACTIONS.items()}
    # Off-balance reference books that are registered (actions 69, 75) but missing from this INI's tree
    for root in tree:
        if root['caption'].startswith('Balansdan'):
            if not any(c['caption'] == 'Məlumatlar' for c in root['children']):
                root['children'].insert(len(root['children']) - 1, {'caption': 'Məlumatlar', 'action': 0, 'params': {}, 'children': [
                    {'caption': 'Balansdankənar hesablar', 'action': 69, 'params': {}, 'children': []},
                    {'caption': 'Hesab növləri', 'action': 75, 'params': {}, 'children': []}]})
    # ActiveX class GUID -> module (TPlgModalContainer.ShowModal(StringToGuid('{…}'), Params) opens modules by GUID)
    guids = {}
    for name, d in modules.items():
        for tl in glob.glob(REPO + d + '/*_TLB.pas'):
            raw = open(tl, 'rb').read().decode('cp1251', 'replace')
            for g in re.findall(r"CLASS_\w+\s*:\s*TGUID\s*=\s*'(\{[0-9A-Fa-f-]+\})'", raw):
                guids.setdefault(g.upper(), name)
    # modules opened by other modules through their GUID are dialogs of those modules, not menu items
    children = set()
    for name, paths in module_units.items():
        for pth in paths:
            raw = open(pth, 'rb').read().decode('cp1251', 'replace')
            for g in re.findall(r"StringToGuid\s*\(\s*'(\{[0-9A-Fa-f-]+\})'", raw, re.I):
                callee = guids.get(g.upper())
                if callee and callee != name:
                    children.add(callee)
    report['childModules'] = sorted(children)
    # Modules present in the repository but not in the SmartBank.ini tree
    cats = {}
    for i, (name, _d, cat, cap) in enumerate(EXTRA):
        if name not in report['modules'] or name in children or name in MENU_HIDDEN:
            continue
        act = FIRST_ACTION + i
        actions[str(act)] = name
        cats.setdefault(cat, []).append({'caption': cap, 'action': act, 'params': {}, 'children': []})
    if cats:
        tree.append({'caption': EXTRA_ROOT, 'action': 0, 'params': {}, 'extra': True, 'children': [
            {'caption': c, 'action': 0, 'params': {}, 'children': sorted(cats[c], key=lambda n: n['caption'])}
            for c in CATEGORY_ORDER if c in cats]})
    global_plugins = {}
    for mp in module_plugins.values():
        for k, v in mp.items():
            global_plugins.setdefault(k, v)
    menu = {'tree': tree, 'actions': actions, 'reportActions': sorted(REPORT_ACTIONS), 'guids': guids,
            'plugins': global_plugins}
    with open(OUT + 'menu.json', 'w', encoding='utf-8') as fh:
        json.dump(menu, fh, ensure_ascii=False, indent=1)
    with open(OUT + 'report.json', 'w', encoding='utf-8') as fh:
        json.dump(report, fh, ensure_ascii=False, indent=1)
    print(json.dumps({k: v for k, v in report['modules'].items()}, indent=0))
    print('lib units', len(lib_manifest), 'not ported', len(report['notPorted']),
          'missing', sorted(report['missingUnits'].keys()))


if __name__ == '__main__':
    main()
