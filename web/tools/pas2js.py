"""Delphi (Object Pascal) unit -> async JavaScript transpiler for the SmartWeb runtime.

Every Pascal routine becomes an `async` JS function.  Identifiers that are not
statically known locals are resolved at run time through the runtime helper `$`
(form components, fields, unit globals, other units, VCL emulation, Oracle API).

Output module shape (ES module):

    export default {
      name, uses, classes: {lname: {name, parent, fields, props, methods}},
      funcs: {lname: fn | [overloads]}, consts/vars initialised in init(U, $),
      sigs: {...var-param positions...}
    }

Failures are per-routine: a routine that fails to parse is emitted as a stub
that reports itself as "not ported" through $.notPorted(...), with the original
Pascal text kept alongside for reference.
"""
import json
import re
import sys

AZ = {'А': 'A', 'Б': 'B', 'Ж': 'C', 'Ч': 'Ç', 'Д': 'D', 'Е': 'E', 'Я': 'Ə', 'Ф': 'F', 'Э': 'G', 'Ь': 'Ğ',
      'Щ': 'H', 'Х': 'X', 'Ы': 'I', 'И': 'İ', 'Ъ': 'J', 'К': 'K', 'Г': 'Q', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'Ю': 'Ö', 'П': 'P', 'Р': 'R', 'С': 'S', 'Ш': 'Ş', 'Т': 'T', 'У': 'U', 'Ц': 'Ü', 'В': 'V',
      'Й': 'Y', 'З': 'Z'}
AZ.update({k.lower(): (v.lower() if v != 'İ' else 'i') for k, v in AZ.items()})
AZ['ы'] = 'ı'


def azdec(s):
    return ''.join(AZ.get(c, c) for c in s)


KEYWORDS = set('''and array as asm begin case class const constructor destructor div do downto else end except
exports file finalization finally for function goto if implementation in inherited initialization inline interface
is label library mod nil not object of or out packed procedure program property raise record repeat resourcestring
set shl shr string then threadvar to try type unit until uses var while with xor dispinterface'''.split())

# Builtins whose parameters at these (0-based) positions are var/out.
BUILTIN_VAR = {
    'inc': [0], 'dec': [0], 'delete': [0], 'insert': [1], 'setlength': [0], 'include': [0], 'exclude': [0],
    'val': [1, 2], 'str': [1], 'freeandnil': [0], 'decodedate': [1, 2, 3], 'decodetime': [1, 2, 3, 4],
    'decodedatetime': [1, 2, 3, 4, 5, 6, 7], 'trystrtoint': [1], 'trystrtofloat': [1], 'trystrtodate': [1],
    'trystrtocurr': [1], 'trystrtodatetime': [1], 'trystrtoint64': [1], 'trystrtobool': [1],
    'trydecodedate': [1, 2, 3], 'readln': [0, 1, 2, 3], 'read': [0, 1, 2], 'fillchar': [0],
    'move': [1], 'assignfile': [0], 'reset': [0], 'rewrite': [0], 'append': [0], 'closefile': [0],
    'decodedateweek': [1, 2, 3], 'divmod': [2, 3], 'extractstrings': [], 'findfirst': [2], 'findnext': [0],
    'findclose': [0], 'swap': [0, 1], 'setstring': [0], 'inputquery': [2], 'trystrtotime': [1],
    'decodedatefully': [1, 2, 3, 4], 'trystrtofloatdef': [1], 'selectdirectory': [2], 'promptforfilename': [0],
    'shgetspecialfolderpath': [1], 'tryencodedate': [3], 'tryencodetime': [4], 'tryencodedatetime': [7], 'trytextstrtofloat': [1], 'trystrtodateex': [1], 'decodedateday': [1, 2], 'decodedatemonthweek': [1, 2, 3, 4],
}


from dfm2json import CodedChar, join_coded  # noqa: E402


class PasError(Exception):
    pass


# ----------------------------------------------------------------------------- lexer

class Token:
    __slots__ = ('kind', 'val', 'low', 'pos')

    def __init__(self, kind, val, pos):
        self.kind = kind  # id, kw, num, str, op, eof
        self.val = val
        self.low = val.lower() if isinstance(val, str) else val
        self.pos = pos

    def __repr__(self):
        return '%s:%r' % (self.kind, self.val)


OPS = [':=', '<>', '<=', '>=', '..', '(.', '.)', '+', '-', '*', '/', '=', '<', '>', '(', ')', '[', ']', ',', ';',
       ':', '.', '^', '@', '&']


def preprocess(text):
    """Strip comments, evaluate {$IFDEF}s (all symbols undefined), return code text with positions kept roughly."""
    out = []
    i = 0
    n = len(text)
    # stack of booleans: are we emitting?
    stack = []

    def emitting():
        return all(stack)

    while i < n:
        c = text[i]
        if c == "'":
            j = i + 1
            while j < n:
                if text[j] == "'":
                    if j + 1 < n and text[j + 1] == "'":
                        j += 2
                        continue
                    break
                if text[j] == '\n':
                    break
                j += 1
            if emitting():
                out.append(text[i:j + 1])
            i = j + 1
            continue
        if text.startswith('//', i):
            j = text.find('\n', i)
            if j < 0:
                j = n
            i = j
            continue
        if c == '{':
            j = text.find('}', i)
            if j < 0:
                j = n
            body = text[i + 1:j]
            if body.startswith('$'):
                d = body[1:].strip()
                du = d.upper()
                if du.startswith('IFDEF') or du.startswith('IF ') or du.startswith('IFOPT'):
                    stack.append(False)
                elif du.startswith('IFNDEF'):
                    stack.append(True)
                elif du.startswith('ELSE') or du.startswith('ELSEIF'):
                    if stack:
                        stack[-1] = not stack[-1]
                elif du.startswith('ENDIF') or du.startswith('IFEND'):
                    if stack:
                        stack.pop()
            out.append(' ')
            i = j + 1
            continue
        if text.startswith('(*', i):
            j = text.find('*)', i + 2)
            if j < 0:
                j = n
            out.append(' ')
            i = j + 2
            continue
        if emitting():
            out.append(c)
        elif c == '\n':
            out.append('\n')
        i += 1
    return ''.join(out)


ID_RE = re.compile(r'[^\W\d]\w*')
NUM_RE = re.compile(r'\$[0-9A-Fa-f]+|\d+(\.\d+(?![.]))?([eE][-+]?\d+)?')


def lex(text):
    toks = []
    i = 0
    n = len(text)
    while i < n:
        c = text[i]
        if c in ' \t\r\n\x00﻿':
            i += 1
            continue
        if c == "'" or (c == '#' and i + 1 < n and (text[i + 1].isdigit() or text[i + 1] == '$')):
            parts = []
            start = i
            while i < n and (text[i] == "'" or (text[i] == '#' and i + 1 < n and (text[i + 1].isdigit() or text[i + 1] == '$'))):
                if text[i] == "'":
                    j = i + 1
                    buf = []
                    while j < n:
                        if text[j] == "'":
                            if j + 1 < n and text[j + 1] == "'":
                                buf.append("'")
                                j += 2
                                continue
                            break
                        buf.append(text[j])
                        j += 1
                    parts.append(azdec(''.join(buf)))
                    i = j + 1
                else:
                    m = re.compile(r'#(\$[0-9A-Fa-f]+|\d+)').match(text, i)
                    v = m.group(1)
                    parts.append(CodedChar(chr(int(v[1:], 16) if v.startswith('$') else int(v))))
                    i = m.end()
            toks.append(Token('str', join_coded(parts), start))
            continue
        m = ID_RE.match(text, i)
        if m:
            w = m.group(0)
            if w.lower() in KEYWORDS:
                toks.append(Token('kw', w, i))
            else:
                toks.append(Token('id', w, i))
            i = m.end()
            continue
        m = NUM_RE.match(text, i)
        if m and m.group(0):
            s = m.group(0)
            if s.startswith('$'):
                v = int(s[1:], 16)
            elif '.' in s or 'e' in s.lower():
                v = float(s)
            else:
                v = int(s)
            toks.append(Token('num', v, i))
            i = m.end()
            continue
        for op in OPS:
            if text.startswith(op, i):
                val = {'(.': '[', '.)': ']'}.get(op, op)
                toks.append(Token('op', val, i))
                i += len(op)
                break
        else:
            # unknown char: skip
            i += 1
    toks.append(Token('eof', '', n))
    return toks


# ----------------------------------------------------------------------------- AST (tuples/dicts)

class P:
    def __init__(self, toks, src):
        self.t = toks
        self.i = 0
        self.src = src

    @property
    def cur(self):
        return self.t[self.i]

    def peek(self, k=1):
        return self.t[min(self.i + k, len(self.t) - 1)]

    def at(self, *vals):
        c = self.cur
        return c.kind in ('kw', 'op', 'id') and c.low in vals

    def atkw(self, *vals):
        return self.cur.kind == 'kw' and self.cur.low in vals

    def atop(self, *vals):
        return self.cur.kind == 'op' and self.cur.val in vals

    def next(self):
        t = self.t[self.i]
        self.i += 1
        return t

    def expect(self, val):
        c = self.cur
        if (c.kind in ('kw', 'id') and c.low == val) or (c.kind == 'op' and c.val == val):
            self.i += 1
            return c
        raise PasError('expected %r got %r near %r' % (val, c, self.context()))

    def accept(self, val):
        c = self.cur
        if (c.kind in ('kw', 'id') and c.low == val) or (c.kind == 'op' and c.val == val):
            self.i += 1
            return True
        return False

    def ident(self):
        c = self.cur
        # many keywords are usable as identifiers after '.' etc; accept ids and some kws
        if c.kind == 'id' or (c.kind == 'kw' and c.low in ('string', 'file', 'object', 'out', 'set', 'array', 'label',
                                                              'property', 'inline', 'exports', 'library', 'program',
                                                              'resourcestring', 'threadvar', 'dispinterface')):
            self.i += 1
            return c.val
        raise PasError('identifier expected, got %r near %r' % (c, self.context()))

    def context(self):
        c = self.cur
        return self.src[max(0, c.pos - 60):c.pos + 60].replace('\n', ' ')

    def skip_to_semicolon(self):
        depth = 0
        while self.cur.kind != 'eof':
            c = self.cur
            if c.kind == 'op' and c.val in ('(', '['):
                depth += 1
            elif c.kind == 'op' and c.val in (')', ']'):
                depth -= 1
            elif c.kind == 'op' and c.val == ';' and depth <= 0:
                self.i += 1
                return
            self.i += 1

    # ---------------------------------------------------------------- types
    def parse_type(self):
        """Parse a type expression; returns a dict describing it (shallow)."""
        c = self.cur
        if self.atkw('packed'):
            self.next()
            return self.parse_type()
        if self.atkw('array'):
            self.next()
            bounds = None
            if self.accept('['):
                lo = self.parse_expr()
                hi = None
                if self.accept('..'):
                    hi = self.parse_expr()
                # multi-dim
                while self.accept(','):
                    self.parse_expr()
                    if self.accept('..'):
                        self.parse_expr()
                self.expect(']')
                bounds = (lo, hi)
            self.expect('of')
            if self.atkw('const'):
                self.next()
                el = {'k': 'named', 'name': 'Variant'}
            else:
                el = self.parse_type()
            return {'k': 'array', 'bounds': bounds, 'el': el}
        if self.atkw('record'):
            self.next()
            fields = []
            self.parse_record_body(fields)
            return {'k': 'record', 'fields': fields}
        if self.atkw('set'):
            self.next()
            self.expect('of')
            self.parse_type()
            return {'k': 'set'}
        if self.atkw('file'):
            self.next()
            if self.accept('of'):
                self.parse_type()
            return {'k': 'named', 'name': 'File'}
        if self.atkw('string'):
            self.next()
            if self.accept('['):
                self.parse_expr()
                self.expect(']')
            return {'k': 'named', 'name': 'String'}
        if self.atop('^'):
            self.next()
            self.parse_type()
            return {'k': 'named', 'name': 'Pointer'}
        if self.atop('('):
            # enum
            self.next()
            names = []
            while True:
                names.append(self.ident())
                if self.accept('='):
                    self.parse_expr()
                if not self.accept(','):
                    break
            self.expect(')')
            return {'k': 'enum', 'names': names}
        if self.atkw('procedure', 'function'):
            isf = self.next().low == 'function'
            if self.atop('('):
                self.parse_params()
            if isf:
                self.expect(':')
                self.parse_type()
            if self.accept('of'):
                self.expect('object')
            return {'k': 'named', 'name': 'Procedure'}
        if self.atkw('class') and self.peek().low == 'of':
            self.next()
            self.next()
            self.ident()
            return {'k': 'named', 'name': 'ClassRef'}
        # named type or subrange
        start = self.i
        if c.kind in ('id',):
            name = self.ident()
            while self.accept('.'):
                name = self.ident()
            if self.atop('..'):
                self.next()
                self.parse_expr()
                return {'k': 'named', 'name': 'Integer'}
            if self.atop('('):  # string(10) old style / Low(Integer)..High(Integer)
                depth = 0
                while True:
                    t = self.next()
                    if t.val == '(':
                        depth += 1
                    elif t.val == ')':
                        depth -= 1
                        if depth == 0:
                            break
                if self.accept('..'):
                    self.parse_expr()
                    return {'k': 'named', 'name': 'Integer'}
            return {'k': 'named', 'name': name}
        # subrange with constants
        self.parse_expr()
        if self.accept('..'):
            self.parse_expr()
        return {'k': 'named', 'name': 'Integer'}

    def parse_record_body(self, fields):
        while not self.atkw('end'):
            if self.atkw('case'):
                self.next()
                # case tag: Type of / case Name: Type of
                self.ident()
                if self.accept(':'):
                    self.ident()
                self.expect('of')
                while not self.atkw('end'):
                    # label list: (fields)
                    while not self.atop(':'):
                        self.next()
                    self.expect(':')
                    self.expect('(')
                    while not self.atop(')'):
                        names = [self.ident()]
                        while self.accept(','):
                            names.append(self.ident())
                        self.expect(':')
                        tp = self.parse_type()
                        for nm in names:
                            fields.append((nm, tp))
                        self.accept(';')
                    self.expect(')')
                    self.accept(';')
                break
            if self.atkw('procedure', 'function', 'constructor', 'property', 'class') or self.at('private', 'public', 'strict'):
                self.next()
                self.skip_to_semicolon()
                continue
            names = [self.ident()]
            while self.accept(','):
                names.append(self.ident())
            self.expect(':')
            tp = self.parse_type()
            for nm in names:
                fields.append((nm, tp))
            if not self.accept(';'):
                break
        self.expect('end')

    def parse_params(self):
        params = []
        self.expect('(')
        while not self.atop(')'):
            mode = None
            if self.atkw('var', 'const', 'out'):
                mode = self.next().low
            elif self.cur.kind == 'id' and self.cur.low == 'constref':
                mode = 'const'
                self.next()
            names = [self.ident()]
            while self.accept(','):
                names.append(self.ident())
            tp = None
            if self.accept(':'):
                if self.atkw('array'):
                    self.next()
                    self.expect('of')
                    if self.atkw('const'):
                        self.next()
                        tp = {'k': 'named', 'name': 'ArrayOfConst'}
                    else:
                        el = self.parse_type()
                        tp = {'k': 'array', 'bounds': None, 'el': el}
                else:
                    tp = self.parse_type()
            default = None
            if self.accept('='):
                default = self.parse_expr()
            for nm in names:
                params.append({'name': nm, 'mode': mode, 'type': tp, 'default': default})
            if not self.accept(';'):
                break
        self.expect(')')
        return params

    # ---------------------------------------------------------------- unit
    def parse_unit(self):
        unit = {'name': None, 'uses': [], 'classes': {}, 'routines': [], 'consts': [], 'vars': [], 'enums': {},
                'init': None, 'sigs': {}, 'decl_routines': {}, 'records': {}}
        if self.atkw('unit', 'library', 'program'):
            self.next()
            unit['name'] = self.ident()
            while self.accept('.'):
                unit['name'] += '.' + self.ident()
            self.skip_to_semicolon()
        if self.atkw('interface'):
            self.next()
        self.parse_decls(unit, interface=True)
        if self.atkw('implementation'):
            self.next()
            self.parse_decls(unit, interface=False)
        if self.atkw('initialization'):
            self.next()
            unit['init'] = self.parse_stmt_list(('finalization', 'end'))
            if self.atkw('finalization'):
                self.next()
                self.parse_stmt_list(('end',))
            self.expect('end')
        elif self.atkw('begin'):
            self.next()
            unit['init'] = self.parse_stmt_list(('end',))
            self.expect('end')
        return unit

    def parse_decls(self, unit, interface, local=None):
        """Parse declaration sections. For routines (local != None) collects into local dict."""
        target_consts = unit['consts'] if local is None else local['consts']
        target_vars = unit['vars'] if local is None else local['vars']
        while True:
            c = self.cur
            if c.kind == 'eof':
                return
            if self.atkw('uses'):
                self.next()
                while True:
                    nm = self.ident()
                    while self.accept('.'):
                        nm += '.' + self.ident()
                    if self.accept('in'):
                        self.next()
                    unit['uses'].append(nm)
                    if not self.accept(','):
                        break
                self.expect(';')
            elif self.atkw('const', 'resourcestring'):
                self.next()
                while self.cur.kind == 'id' or (self.cur.kind == 'kw' and self.cur.low == 'string'):
                    nm = self.ident()
                    tp = None
                    if self.accept(':'):
                        tp = self.parse_type()
                    self.expect('=')
                    if tp and tp['k'] in ('array', 'record') and self.atop('('):
                        val = self.parse_typed_const()
                    elif self.atop('(') and tp and tp['k'] == 'named':
                        val = self.parse_typed_const()
                    else:
                        val = self.parse_expr()
                    target_consts.append((nm, tp, val))
                    while self.at('platform', 'deprecated'):
                        self.next()
                    self.expect(';')
            elif self.atkw('type'):
                self.next()
                while self.cur.kind == 'id':
                    save = self.i
                    nm = self.ident()
                    if not self.accept('='):
                        self.i = save
                        break
                    self.accept('type')
                    self.parse_type_decl(nm, unit)
            elif self.atkw('var', 'threadvar'):
                self.next()
                while self.cur.kind == 'id':
                    names = [self.ident()]
                    while self.accept(','):
                        names.append(self.ident())
                    self.expect(':')
                    tp = self.parse_type()
                    init = None
                    if self.accept('='):
                        if self.atop('('):
                            init = self.parse_typed_const()
                        else:
                            init = self.parse_expr()
                    if self.accept('absolute'):
                        self.ident()
                    for nm in names:
                        target_vars.append((nm, tp, init))
                    self.expect(';')
            elif self.atkw('label'):
                self.next()
                self.skip_to_semicolon()
            elif self.atkw('procedure', 'function', 'constructor', 'destructor') or (
                    self.atkw('class') and self.peek().low in ('procedure', 'function')):
                r = self.parse_routine(interface, unit)
                if r is not None:
                    if local is not None:
                        local['nested'].append(r)
                    else:
                        unit['routines'].append(r)
            elif self.atkw('exports'):
                self.next()
                self.skip_to_semicolon()
            else:
                return

    def parse_typed_const(self):
        # ( a, b ) or ( f1: v; f2: v ) possibly nested
        self.expect('(')
        items = []
        rec = {}
        isrec = False
        while not self.atop(')'):
            if self.cur.kind == 'id' and self.peek().kind == 'op' and self.peek().val == ':':
                isrec = True
                nm = self.ident()
                self.expect(':')
                v = self.parse_typed_const() if self.atop('(') and self._paren_is_tuple() else self.parse_expr()
                rec[nm.lower()] = v
                self.accept(';')
            else:
                v = self.parse_typed_const() if self.atop('(') and self._paren_is_tuple() else self.parse_expr()
                items.append(v)
                self.accept(',')
        self.expect(')')
        if isrec:
            return ('recordlit', rec)
        return ('arraylit', items)

    def _paren_is_tuple(self):
        # lookahead: a '(' that starts a tuple contains a top-level ',' or 'name:' pattern
        depth = 0
        j = self.i
        while j < len(self.t):
            t = self.t[j]
            if t.kind == 'op' and t.val in ('(', '['):
                depth += 1
            elif t.kind == 'op' and t.val in (')', ']'):
                depth -= 1
                if depth == 0:
                    return False
            elif depth == 1 and t.kind == 'op' and t.val in (',', ';'):
                return True
            elif depth == 1 and t.kind == 'op' and t.val == ':' and j > 0 and self.t[j - 1].kind == 'id':
                return True
            j += 1
        return False

    def parse_type_decl(self, nm, unit):
        if self.atkw('class') and not (self.peek().kind == 'kw' and self.peek().low == 'of'):
            self.next()
            if self.atop(';'):  # forward
                self.next()
                return
            parent = None
            intfs = []
            if self.accept('('):
                parent = self.ident()
                while self.accept('.'):
                    parent = self.ident()
                while self.accept(','):
                    x = self.ident()
                    while self.accept('.'):
                        x = self.ident()
                    intfs.append(x)
                self.expect(')')
            if self.atop(';'):
                self.next()
                unit['classes'][nm.lower()] = {'name': nm, 'parent': parent, 'fields': {}, 'props': {}, 'msigs': {}}
                return
            cls = {'name': nm, 'parent': parent, 'fields': {}, 'props': {}, 'msigs': {}}
            unit['classes'][nm.lower()] = cls
            self.parse_class_body(cls)
            self.expect('end')
            while self.at('platform', 'deprecated'):
                self.next()
            self.expect(';')
            return
        if self.atkw('interface', 'dispinterface'):
            # skip interface declaration
            self.next()
            if self.atop(';'):
                self.next()
                return
            depth = 1
            while depth and self.cur.kind != 'eof':
                t = self.next()
                if t.kind == 'kw' and t.low in ('record',):
                    depth += 1
                if t.kind == 'kw' and t.low == 'end':
                    depth -= 1
            self.expect(';')
            return
        if self.atkw('object'):
            self.next()
            cls = {'name': nm, 'parent': None, 'fields': {}, 'props': {}, 'msigs': {}}
            unit['classes'][nm.lower()] = cls
            self.parse_class_body(cls)
            self.expect('end')
            self.expect(';')
            return
        tp = self.parse_type()
        if tp['k'] == 'enum':
            unit['enums'][nm.lower()] = tp['names']
        if tp['k'] == 'record':
            unit['records'][nm.lower()] = tp['fields']
        if tp['k'] in ('array', 'set') or (tp['k'] == 'named' and tp['name'].lower() != nm.lower()):
            unit.setdefault('aliases', {})[nm.lower()] = tp
        while self.at('platform', 'deprecated'):
            self.next()
        self.expect(';')

    def parse_class_body(self, cls):
        while not self.atkw('end') and self.cur.kind != 'eof':
            if self.at('private', 'protected', 'public', 'published', 'automated'):
                self.next()
                continue
            if self.at('strict'):
                self.next()
                continue
            if self.atkw('class') and self.peek().low in ('procedure', 'function', 'var', 'property'):
                self.next()
                continue
            if self.atkw('procedure', 'function', 'constructor', 'destructor'):
                kind = self.next().low
                mname = self.ident()
                if self.accept('.'):
                    # interface method resolution: procedure IFoo.Bar = Baz;
                    self.ident()
                    self.expect('=')
                    self.ident()
                    self.expect(';')
                    continue
                params = self.parse_params() if self.atop('(') else []
                if kind == 'function' and self.accept(':'):
                    self.parse_type()
                self.expect(';')
                self.skip_directives()
                cls['msigs'].setdefault(mname.lower(), []).append(params)
                continue
            if self.atkw('property'):
                self.next()
                pname = self.ident()
                if self.accept('['):
                    while not self.atop(']'):
                        self.next()
                    self.expect(']')
                ptype = None
                if self.accept(':'):
                    ptype = self.parse_type()
                info = {'name': pname}
                while not self.atop(';'):
                    w = self.cur.low
                    if w in ('read', 'write'):
                        self.next()
                        x = self.ident()
                        while self.accept('.'):
                            x += '.' + self.ident()
                        info[w] = x
                    elif w == 'index':
                        self.next()
                        info['index'] = self.parse_expr()
                    elif w in ('default', 'stored'):
                        self.next()
                        if not self.atop(';'):
                            self.parse_expr()
                    else:
                        self.next()
                self.expect(';')
                if self.at('default'):
                    self.next()
                    self.expect(';')
                cls['props'][pname.lower()] = info
                continue
            if self.atkw('const'):
                self.next()
                while self.cur.kind == 'id':
                    self.ident()
                    self.expect('=')
                    self.parse_expr()
                    self.expect(';')
                continue
            if self.atkw('type'):
                self.next()
                while self.cur.kind == 'id' and self.peek().val == '=':
                    self.ident()
                    self.expect('=')
                    self.parse_type()
                    self.expect(';')
                continue
            if self.atkw('var'):
                self.next()
                continue
            # field
            names = [self.ident()]
            while self.accept(','):
                names.append(self.ident())
            self.expect(':')
            tp = self.parse_type()
            if not self.atkw('end'):  # the last field before `end` may omit its semicolon
                self.expect(';')
            for nm in names:
                cls['fields'][nm.lower()] = {'name': nm, 'type': tp}

    def skip_directives(self):
        DIRS = ('overload', 'virtual', 'override', 'abstract', 'dynamic', 'reintroduce', 'stdcall', 'safecall',
                'cdecl', 'pascal', 'register', 'message', 'forward', 'external', 'export', 'far', 'near', 'assembler',
                'inline', 'static', 'platform', 'deprecated', 'final', 'varargs', 'name', 'index', 'dispid')
        while self.cur.kind in ('id', 'kw') and self.cur.low in DIRS:
            d = self.next().low
            if d in ('message', 'external', 'name', 'index', 'dispid'):
                while not self.atop(';'):
                    self.next()
            self.expect(';')

    def parse_routine(self, interface, unit):
        start_tok = self.cur
        is_class_method = False
        if self.atkw('class'):
            self.next()
            is_class_method = True
        kind = self.next().low
        name = self.ident()
        cls = None
        while self.accept('.'):
            cls = name if cls is None else cls + '.' + name
            name = self.ident()
        params = self.parse_params() if self.atop('(') else []
        rtype = None
        if self.accept(':'):
            rtype = self.parse_type()
        self.expect(';')
        is_forward = False
        is_external = False
        while self.cur.kind in ('id', 'kw') and self.cur.low in (
                'overload', 'virtual', 'override', 'abstract', 'dynamic', 'reintroduce', 'stdcall', 'safecall', 'cdecl',
                'pascal', 'register', 'message', 'forward', 'external', 'export', 'far', 'near', 'assembler', 'inline',
                'static', 'platform', 'deprecated', 'varargs'):
            d = self.next().low
            if d == 'forward':
                is_forward = True
            if d == 'external':
                is_external = True
            if d in ('message', 'external'):
                while not self.atop(';'):
                    self.next()
            self.expect(';')
        sig = {'name': name, 'cls': cls, 'kind': kind, 'params': params, 'rtype': rtype}
        if interface or is_forward or is_external:
            if cls is None:
                unit['decl_routines'].setdefault(name.lower(), []).append(params)
            return None
        # body
        local = {'consts': [], 'vars': [], 'nested': []}
        body_start = self.i
        try:
            self.parse_decls(unit, interface=False, local=local)
            if self.atkw('asm'):
                while not self.atkw('end'):
                    self.next()
                self.next()
                body = None
                err = 'asm block'
            else:
                self.expect('begin')
                body = self.parse_stmt_list(('end',))
                self.expect('end')
                err = None
            self.expect(';')
        except PasError as e:
            # recover: find the end of this routine by scanning begin/end nesting from body_start
            self.i = body_start
            self.recover_routine()
            body = None
            err = str(e)
        end_tok = self.t[self.i - 1]
        src = self.src[start_tok.pos:end_tok.pos + 1]
        return {'sig': sig, 'local': local, 'body': body, 'error': err, 'src': src}

    def recover_routine(self):
        # skip local decl sections up to the first 'begin' at nesting 0, then match begin/end
        depth = 0
        seen_begin = False
        while self.cur.kind != 'eof':
            t = self.cur
            if t.kind == 'kw' and t.low in ('begin', 'try', 'case', 'asm', 'record'):
                if t.low == 'case' and not seen_begin:
                    pass
                depth += 1
                seen_begin = seen_begin or t.low == 'begin'
            elif t.kind == 'kw' and t.low == 'end':
                depth -= 1
                if depth == 0 and seen_begin:
                    self.i += 1
                    self.accept(';')
                    return
            elif not seen_begin and t.kind == 'kw' and t.low in ('procedure', 'function', 'constructor', 'destructor') and depth == 0:
                # nested routine headers: let it be, depth handles begin/end
                pass
            self.i += 1

    # ---------------------------------------------------------------- statements
    def parse_stmt_list(self, terminators):
        stmts = []
        while True:
            if self.cur.kind == 'kw' and self.cur.low in terminators:
                break
            if self.cur.kind == 'eof':
                raise PasError('unexpected eof')
            if self.accept(';'):
                continue
            stmts.append(self.parse_stmt())
            if not self.accept(';'):
                if self.cur.kind == 'kw' and self.cur.low in terminators:
                    break
                raise PasError('; expected, got %r near %r' % (self.cur, self.context()))
        return stmts

    def parse_stmt(self):
        c = self.cur
        # label: x:
        if c.kind in ('id', 'num') and self.peek().kind == 'op' and self.peek().val == ':' and not (
                self.peek(2).kind == 'op' and self.peek(2).val == '='):
            self.next()
            self.next()
            if self.atop(';') or self.atkw('end'):
                return ('empty',)
            return self.parse_stmt()
        if c.kind == 'kw':
            k = c.low
            if k == 'begin':
                self.next()
                body = self.parse_stmt_list(('end',))
                self.expect('end')
                return ('block', body)
            if k == 'if':
                self.next()
                cond = self.parse_expr()
                self.expect('then')
                th = self.parse_opt_stmt(('else',))
                el = None
                if self.accept('else'):
                    el = self.parse_opt_stmt(())
                return ('if', cond, th, el)
            if k == 'while':
                self.next()
                cond = self.parse_expr()
                self.expect('do')
                return ('while', cond, self.parse_opt_stmt(()))
            if k == 'repeat':
                self.next()
                body = self.parse_stmt_list(('until',))
                self.expect('until')
                return ('repeat', body, self.parse_expr())
            if k == 'for':
                self.next()
                var = self.parse_designator()
                if self.accept('in'):
                    coll = self.parse_expr()
                    self.expect('do')
                    return ('forin', var, coll, self.parse_opt_stmt(()))
                self.expect(':=')
                a = self.parse_expr()
                down = False
                if self.accept('downto'):
                    down = True
                else:
                    self.expect('to')
                b = self.parse_expr()
                self.expect('do')
                return ('for', var, a, b, down, self.parse_opt_stmt(()))
            if k == 'with':
                self.next()
                objs = [self.parse_expr()]
                while self.accept(','):
                    objs.append(self.parse_expr())
                self.expect('do')
                return ('with', objs, self.parse_opt_stmt(()))
            if k == 'case':
                self.next()
                sel = self.parse_expr()
                self.expect('of')
                branches = []
                els = None
                while not self.atkw('end', 'else'):
                    labels = []
                    while True:
                        a = self.parse_expr()
                        if self.accept('..'):
                            labels.append(('range', a, self.parse_expr()))
                        else:
                            labels.append(('val', a))
                        if not self.accept(','):
                            break
                    self.expect(':')
                    st = self.parse_opt_stmt(('end', 'else'))
                    branches.append((labels, st))
                    if not self.accept(';'):
                        break
                if self.accept('else') or self.accept('otherwise'):
                    els = ('block', self.parse_stmt_list(('end',)))
                self.expect('end')
                return ('case', sel, branches, els)
            if k == 'try':
                self.next()
                body = self.parse_stmt_list(('except', 'finally'))
                if self.accept('finally'):
                    fin = self.parse_stmt_list(('end',))
                    self.expect('end')
                    return ('tryfinally', body, fin)
                self.expect('except')
                handlers = []
                els = None
                if self.at('on'):
                    while self.at('on'):
                        self.next()
                        vname = None
                        if self.peek().kind == 'op' and self.peek().val == ':':
                            vname = self.ident()
                            self.expect(':')
                        tname = self.ident()
                        while self.accept('.'):
                            tname = self.ident()
                        self.expect('do')
                        st = self.parse_opt_stmt(('end', 'else'))
                        handlers.append((vname, tname, st))
                        self.accept(';')
                    if self.accept('else'):
                        els = self.parse_stmt_list(('end',))
                    self.expect('end')
                    return ('tryexcept', body, handlers, els)
                els = self.parse_stmt_list(('end',))
                self.expect('end')
                return ('tryexcept', body, [], els)
            if k == 'raise':
                self.next()
                if self.atop(';') or self.atkw('end', 'else', 'until', 'except', 'finally'):
                    return ('raise', None)
                e = self.parse_expr()
                if self.at('at'):
                    self.next()
                    self.parse_expr()
                return ('raise', e)
            if k == 'inherited':
                self.next()
                if self.cur.kind == 'id':
                    name = self.ident()
                    args = None
                    if self.atop('('):
                        args = self.parse_args()
                    e = ('inherited', name, args)
                    # inherited Foo.Bar ... rare
                    e = self.parse_postfix(e)
                    if self.accept(':='):
                        return ('assign', e, self.parse_expr())
                    return ('call', e)
                return ('call', ('inherited', None, None))
            if k == 'goto':
                raise PasError('goto not supported')
            if k in ('end', 'else', 'until', 'except', 'finally'):
                return ('empty',)
        # assignment or call
        d = self.parse_expr_designator()
        if self.accept(':='):
            v = self.parse_expr()
            return ('assign', d, v)
        return ('call', d)

    def parse_opt_stmt(self, terms):
        if self.atop(';') or (self.cur.kind == 'kw' and self.cur.low in terms):
            return ('empty',)
        return self.parse_stmt()

    # ---------------------------------------------------------------- expressions
    def parse_args(self):
        self.expect('(')
        args = []
        while not self.atop(')'):
            a = self.parse_expr()
            # Format width specifiers  Str(x:10:2) / WriteLn(x:5)
            while self.accept(':'):
                self.parse_expr()
            args.append(a)
            if not self.accept(','):
                # tolerate a missing comma between two arguments (`Draw(Canvas, Rect.Left  Rect.Top, …)`)
                if self.cur.kind in ('id', 'num', 'str') and not self.atop(')'):
                    continue
                break
        self.expect(')')
        return args

    def parse_designator(self):
        name = self.ident()
        e = ('id', name)
        return self.parse_postfix(e)

    def parse_expr_designator(self):
        # statements start with a designator but may also be '(X as T).Foo' or 'TFoo(x).Bar'
        if self.atop('('):
            self.next()
            e = self.parse_expr()
            self.expect(')')
            return self.parse_postfix(e)
        if self.atop('@'):
            self.next()
            return self.parse_expr_designator()
        if self.atkw('string') or self.cur.kind == 'id' or self.atkw('file', 'object', 'out', 'set', 'array'):
            return self.parse_designator()
        raise PasError('statement expected, got %r near %r' % (self.cur, self.context()))

    def parse_postfix(self, e):
        while True:
            if self.atop('.'):
                self.next()
                name = self.ident() if self.cur.kind != 'kw' else self.next().val
                e = ('member', e, name)
            elif self.atop('['):
                self.next()
                idx = [self.parse_expr()]
                while self.accept(','):
                    idx.append(self.parse_expr())
                self.expect(']')
                e = ('index', e, idx)
            elif self.atop('('):
                args = self.parse_args()
                e = ('callx', e, args)
            elif self.atop('^'):
                self.next()
            else:
                return e

    def parse_expr(self):
        left = self.parse_simple()
        while self.cur.kind in ('op', 'kw') and self.cur.low in ('=', '<>', '<', '>', '<=', '>=', 'in', 'is'):
            op = self.next().low
            right = self.parse_simple()
            left = ('bin', op, left, right)
        return left

    def parse_simple(self):
        if self.atop('-'):
            self.next()
            left = ('un', '-', self.parse_term())
        elif self.atop('+'):
            self.next()
            left = self.parse_term()
        else:
            left = self.parse_term()
        while self.cur.kind in ('op', 'kw') and self.cur.low in ('+', '-', 'or', 'xor'):
            op = self.next().low
            right = self.parse_term()
            left = ('bin', op, left, right)
        return left

    def parse_term(self):
        left = self.parse_factor()
        while self.cur.kind in ('op', 'kw') and self.cur.low in ('*', '/', 'div', 'mod', 'and', 'shl', 'shr', 'as'):
            op = self.next().low
            right = self.parse_factor()
            left = ('bin', op, left, right)
        return left

    def parse_factor(self):
        c = self.cur
        if c.kind == 'num':
            self.next()
            return ('num', c.val)
        if c.kind == 'str':
            self.next()
            return self.parse_postfix(('str', c.val))
        if c.kind == 'kw':
            k = c.low
            if k == 'not':
                self.next()
                return ('un', 'not', self.parse_factor())
            if k == 'nil':
                self.next()
                return ('nil',)
            if k == 'inherited':
                self.next()
                name = self.ident()
                args = self.parse_args() if self.atop('(') else None
                return self.parse_postfix(('inherited', name, args))
            if k in ('string', 'file', 'object', 'out', 'set', 'array'):
                return self.parse_designator()
            if k in ('procedure', 'function'):
                raise PasError('anonymous methods not supported')
        if c.kind == 'op':
            if c.val == '(':
                self.next()
                e = self.parse_expr()
                self.expect(')')
                return self.parse_postfix(('paren', e))
            if c.val == '[':
                self.next()
                items = []
                while not self.atop(']'):
                    a = self.parse_expr()
                    if self.accept('..'):
                        items.append(('range', a, self.parse_expr()))
                    else:
                        items.append(('val', a))
                    if not self.accept(','):
                        break
                self.expect(']')
                return ('set', items)
            if c.val == '@':
                self.next()
                return ('addr', self.parse_factor())
            if c.val == '-':
                self.next()
                return ('un', '-', self.parse_factor())
            if c.val == '+':
                self.next()
                return self.parse_factor()
        if c.kind == 'id':
            return self.parse_designator()
        raise PasError('expression expected, got %r near %r' % (c, self.context()))


# ----------------------------------------------------------------------------- code generation

def js_str(s):
    return json.dumps(s, ensure_ascii=False)


class Scope:
    def __init__(self, var, names, parent=None, varparams=(), routine_name=None, is_func=False):
        self.var = var  # JS variable holding locals object
        self.names = set(names)
        self.parent = parent
        self.varparams = set(varparams)
        self.routine_name = routine_name
        self.is_func = is_func

    def lookup(self, low):
        s = self
        while s:
            if low in s.names:
                return s
            s = s.parent
        return None


TYPE_DEFAULTS = {
    'integer': '0', 'cardinal': '0', 'longint': '0', 'longword': '0', 'int64': '0', 'word': '0', 'byte': '0',
    'smallint': '0', 'shortint': '0', 'double': '0', 'real': '0', 'extended': '0', 'single': '0', 'currency': '0',
    'tdatetime': '0', 'tdate': '0', 'ttime': '0', 'comp': '0', 'dword': '0', 'uint64': '0', 'nativeint': '0',
    'string': "''", 'ansistring': "''", 'widestring': "''", 'shortstring': "''", 'unicodestring': "''",
    'char': "''", 'widechar': "''", 'ansichar': "''", 'tcaption': "''", 'olevariant': 'null', 'variant': 'null',
    'boolean': 'false', 'bool': 'false', 'wordbool': 'false', 'longbool': 'false', 'bytebool': 'false',
    'tcolor': '0', 'thandle': '0', 'hwnd': '0', 'tmodalresult': '0', 'pchar': "''",
}


class Gen:
    def __init__(self, unit, all_sigs, record_types):
        self.unit = unit
        self.sigs = all_sigs  # lname -> list of var positions
        self.records = record_types  # lname -> fields
        self.tmp = 0
        self.class_name = None
        self.ok = 0
        self.fail = 0
        self.with_stack = []  # list of JS var names for with objects
        self.loop_depth = 0

    def t(self):
        self.tmp += 1
        return '$t%d' % self.tmp

    def default_for(self, tp):
        if tp is None:
            return 'null'
        if tp['k'] == 'named':
            n = tp['name'].lower()
            if n in TYPE_DEFAULTS:
                return TYPE_DEFAULTS[n]
            if n in self.records:
                return '$.rec(%s)' % js_str(n)
            if n.startswith('tstrings') or n == 'tstringlist':
                return 'null'
            if n in ALIASES and n not in _alias_guard:
                _alias_guard.add(n)
                try:
                    return self.default_for(ALIASES[n])
                finally:
                    _alias_guard.discard(n)
            return 'null'
        if tp['k'] == 'array':
            if tp['bounds'] and tp['bounds'][1] is not None:
                return '$.sarr()'
            return '[]'
        if tp['k'] == 'record':
            return '{}'
        if tp['k'] == 'set':
            return '[]'
        if tp['k'] == 'enum':
            return '0'
        return 'null'

    # -- expression code; returns JS expression string (may contain await)
    def expr(self, e, sc, nocall=False):
        k = e[0]
        if k == 'num':
            return repr(e[1]) if not isinstance(e[1], float) else repr(e[1])
        if k == 'str':
            return js_str(e[1])
        if k == 'nil':
            return 'null'
        if k == 'paren':
            return '(' + self.expr(e[1], sc) + ')'
        if k == 'addr':
            return self.expr(e[1], sc, nocall=True)
        if k == 'un':
            if e[1] == '-':
                return '(-(%s))' % self.expr(e[2], sc)
            return '$.not(%s)' % self.expr(e[2], sc)
        if k == 'set':
            parts = []
            for it in e[1]:
                if it[0] == 'range':
                    parts.append('...$.range(%s,%s)' % (self.expr(it[1], sc), self.expr(it[2], sc)))
                else:
                    parts.append(self.expr(it[1], sc))
            return '[' + ', '.join(parts) + ']'
        if k == 'bin':
            op = e[1]
            a = self.expr(e[2], sc)
            if op in ('and', 'or'):
                b = self.expr(e[3], sc)
                return '(await $.%s(%s, async () => %s))' % ('and_' if op == 'and' else 'or_', a, b)
            if op == 'is':
                return '$.is_(%s, %s)' % (a, js_str(self.type_name(e[3])))
            if op == 'as':
                return a
            b = self.expr(e[3], sc)
            fn = {'=': 'eq', '<>': 'ne', '<': 'lt', '>': 'gt', '<=': 'le', '>=': 'ge', 'in': 'in_', '+': 'add',
                  '-': 'sub', '*': 'mul', '/': 'fdiv', 'div': 'idiv', 'mod': 'mod', 'xor': 'xor', 'shl': 'shl',
                  'shr': 'shr'}[op]
            return '$.%s(%s, %s)' % (fn, a, b)
        if k == 'id':
            return self.ident_read(e[1], sc, nocall)
        if k == 'member':
            obj = self.expr(e[1], sc)
            if nocall:
                return '(await $.mref(%s, %s))' % (obj, js_str(e[2]))
            return '(await $.mv(%s, %s))' % (obj, js_str(e[2]))
        if k == 'index':
            obj = self.expr(e[1], sc)
            return '(await $.idx(%s, [%s]))' % (obj, ', '.join(self.expr(x, sc) for x in e[2]))
        if k == 'callx':
            return self.call_expr(e, sc)
        if k == 'inherited':
            args = '[' + ', '.join(self.expr(x, sc) for x in (e[2] or [])) + ']' if e[2] is not None else 'null'
            return '(await $.inherited(Self, %s, %s, %s, arguments))' % (
                js_str(self.class_name or ''), js_str(e[1] or self.cur_routine), args)
        raise PasError('cannot gen expr %r' % (k,))

    def type_name(self, e):
        if e[0] == 'id':
            return e[1]
        if e[0] == 'member':
            return e[2]
        return '?'

    def args_code(self, callee_name, args, sc):
        low = (callee_name or '').lower()
        varpos = set(BUILTIN_VAR.get(low, [])) | set(self.sigs.get(low, []))
        out = []
        for i, a in enumerate(args):
            if i in varpos and self.is_lvalue(a):
                out.append(self.ref_code(a, sc))
            else:
                out.append(self.expr(a, sc))
        return '[' + ', '.join(out) + ']'

    def is_lvalue(self, e):
        return e[0] in ('id', 'member', 'index') or (e[0] == 'paren' and self.is_lvalue(e[1]))

    def ref_code(self, e, sc):
        """Build a $.ref(getter, setter) for var parameters."""
        if e[0] == 'paren':
            return self.ref_code(e[1], sc)
        v = self.t()
        get = self.expr(e, sc)
        setc = self.assign_code(e, v, sc)
        return '$.ref(async () => %s, async (%s) => { %s })' % (get, v, setc)

    def call_expr(self, e, sc):
        callee = e[1]
        args = e[2]
        if callee[0] == 'id':
            name = callee[1]
            low = name.lower()
            a = self.args_code(name, args, sc)
            s = sc.lookup(low)
            if s is not None and not self.with_stack:
                return '(await $.callv(%s, %s))' % (self.local_ref(s, low), a)
            if self.with_stack:
                return '(await $.wcall([%s], %s, %s, %s))' % (', '.join(self.with_stack), js_str(name), a,
                                                               self.fallback_fn(name, sc))
            return '(await $.call(C, %s, %s))' % (js_str(name), a)
        if callee[0] == 'member':
            obj = self.expr(callee[1], sc)
            a = self.args_code(callee[2], args, sc)
            return '(await $.mcall(%s, %s, %s))' % (obj, js_str(callee[2]), a)
        if callee[0] == 'inherited':
            a = self.args_code(callee[1], args, sc)
            return '(await $.inherited(Self, %s, %s, %s, arguments))' % (js_str(self.class_name or ''),
                                                                         js_str(callee[1]), a)
        # (expr)(args) -> call the value
        f = self.expr(callee, sc, nocall=True)
        a = '[' + ', '.join(self.expr(x, sc) for x in args) + ']'
        return '(await $.callv(%s, %s))' % (f, a)

    def local_ref(self, s, low):
        if low in s.varparams:
            return '(await %s[%s].get())' % (s.var, js_str(low))
        return '%s[%s]' % (s.var, js_str(low))

    def fallback_fn(self, name, sc):
        """For with-blocks: a thunk resolving the name when no with-object has it."""
        low = name.lower()
        s = sc.lookup(low)
        if s is not None:
            if low in s.varparams:
                return '{ get: async () => await %s[%s].get(), set: async (v) => { await %s[%s].set(v); }, local: true }' % (
                    s.var, js_str(low), s.var, js_str(low))
            return '{ get: async () => %s[%s], set: async (v) => { %s[%s] = v; }, local: true }' % (
                s.var, js_str(low), s.var, js_str(low))
        if low == 'result':
            fs = self.func_scope(sc)
            if fs:
                return '{ get: async () => %s.result, set: async (v) => { %s.result = v; }, local: true }' % (fs.var, fs.var)
        return 'C'

    def func_scope(self, sc):
        return sc

    def ident_read(self, name, sc, nocall=False):
        low = name.lower()
        if low in ('true', 'false') and not self.with_stack:
            return low
        if low == 'self':
            return 'Self'
        s = sc.lookup(low)
        if self.with_stack:
            return '(await $.wv([%s], %s, %s, %s))' % (', '.join(self.with_stack), js_str(name),
                                                        self.fallback_fn(name, sc), 'true' if nocall else 'false')
        if s is not None:
            if low in s.names and s.routine_name == low and low not in s.varparams and not nocall:
                # recursive call of own function without args (rare) vs Result read: Pascal treats as call
                return '(await $.callv(%s[%s], []))' % (s.var, js_str(low))
            return self.local_ref(s, low)
        if nocall:
            return '(await $.ref_(C, %s))' % js_str(name)
        return '(await $.v(C, %s))' % js_str(name)

    def assign_code(self, target, valcode, sc):
        k = target[0]
        if k == 'paren':
            return self.assign_code(target[1], valcode, sc)
        if k == 'id':
            name = target[1]
            low = name.lower()
            # function-name assignment == Result
            fs = sc
            while fs and fs.routine_name is None:
                fs = fs.parent
            if fs and fs.is_func and low == fs.routine_name:
                return '%s.result = %s;' % (fs.var, valcode)
            if self.with_stack:
                return 'await $.wset([%s], %s, %s, %s);' % (', '.join(self.with_stack), js_str(name), valcode,
                                                            self.fallback_fn(name, sc))
            s = sc.lookup(low)
            if s is not None:
                if low in s.varparams:
                    return 'await %s[%s].set(%s);' % (s.var, js_str(low), valcode)
                return '%s[%s] = %s;' % (s.var, js_str(low), valcode)
            return 'await $.set(C, %s, %s);' % (js_str(name), valcode)
        if k == 'member':
            obj = self.expr(target[1], sc)
            return 'await $.mset(%s, %s, %s);' % (obj, js_str(target[2]), valcode)
        if k == 'index':
            obj = self.expr(target[1], sc)
            # string char assignment: s[i] := c  -> needs write-back to s
            idx = ', '.join(self.expr(x, sc) for x in target[2])
            inner = target[1]
            if self.is_lvalue(inner):
                tv = self.t()
                back = self.assign_code(inner, tv, sc)
                return '{ const %s = await $.iset(%s, [%s], %s); if (%s !== undefined) { %s } }' % (
                    tv, obj, idx, valcode, tv, back)
            return 'await $.iset(%s, [%s], %s);' % (obj, idx, valcode)
        if k == 'callx':
            # e.g. Fields(0).Value := x  -> treat call result as object? not assignable
            raise PasError('cannot assign to call')
        raise PasError('bad assignment target %r' % (k,))

    # -- statements
    def stmts(self, lst, sc, ind):
        return ''.join(self.stmt(s, sc, ind) for s in lst)

    def stmt(self, s, sc, ind):
        p = '  ' * ind
        k = s[0]
        if k == 'empty':
            return ''
        if k == 'block':
            return self.stmts(s[1], sc, ind)
        if k == 'assign':
            target = s[1]
            nocall = False
            tname = target[2] if target[0] == 'member' else (target[1] if target[0] == 'id' else '')
            if tname.lower().startswith('on') and len(tname) > 2 and tname[2].isupper():
                nocall = True
            v = self.expr(s[2], sc, nocall=nocall)
            return p + self.assign_code(target, v, sc) + '\n'
        if k == 'call':
            d = s[1]
            if d[0] == 'id':
                low = d[1].lower()
                if low == 'exit':
                    return p + 'return %s;\n' % self.result_expr(sc)
                if low == 'break':
                    return p + 'break;\n'
                if low == 'continue':
                    return p + 'continue;\n'
                if low == 'abort':
                    return p + '$.abort();\n'
                return p + 'await $.stmt(%s);\n' % self.ident_stmt(d[1], sc)
            if d[0] == 'callx' and d[1][0] == 'id':
                low = d[1][1].lower()
                if low == 'exit':
                    fsv = self.result_var(sc)
                    return p + '{ %s.result = %s; return %s.result; }\n' % (fsv, self.expr(d[2][0], sc), fsv) if d[2] else p + 'return %s;\n' % self.result_expr(sc)
            if d[0] == 'member':
                obj = self.expr(d[1], sc)
                return p + 'await $.mcall(%s, %s, []);\n' % (obj, js_str(d[2]))
            if d[0] == 'inherited':
                return p + 'await $.inherited(Self, %s, %s, %s, arguments);\n' % (
                    js_str(self.class_name or ''), js_str(d[1] or self.cur_routine), 'null' if d[2] is None else
                    '[' + ', '.join(self.expr(x, sc) for x in d[2]) + ']')
            return p + 'await $.stmt(%s);\n' % self.expr(d, sc)
        if k == 'if':
            out = p + 'if ($.truthy(%s)) {\n' % self.expr(s[1], sc)
            out += self.stmt(s[2], sc, ind + 1)
            if s[3] is not None and s[3][0] != 'empty':
                out += p + '} else {\n' + self.stmt(s[3], sc, ind + 1)
            out += p + '}\n'
            return out
        if k == 'while':
            self.loop_depth += 1
            out = p + 'while ($.truthy(%s)) {\n%s%s  await $.tick();\n%s}\n' % (
                self.expr(s[1], sc), self.stmt(s[2], sc, ind + 1), p, p)
            self.loop_depth -= 1
            return out
        if k == 'repeat':
            self.loop_depth += 1
            out = p + 'do {\n%s%s  await $.tick();\n%s} while (!$.truthy(%s));\n' % (
                self.stmts(s[1], sc, ind + 1), p, p, self.expr(s[2], sc))
            self.loop_depth -= 1
            return out
        if k == 'for':
            var, a, b, down, body = s[1:]
            hi = self.t()
            first = self.t()
            out = p + '{ const %s = %s;\n' % (hi, self.expr(b, sc))
            out += p + '  ' + self.assign_code(var, self.expr(a, sc), sc) + '\n'
            cmp = '>=' if down else '<='
            step = '-1' if down else '1'
            self.loop_depth += 1
            out += p + '  let %s = true;\n' % first
            out += p + '  for (;;) {\n'
            out += p + '    if (!%s) { %s }\n' % (first, self.assign_code(var, '$.succ(%s, %s)' % (self.expr(var, sc), step), sc))
            out += p + '    %s = false;\n' % first
            out += p + '    if (!($.ord(%s) %s $.ord(%s))) break;\n' % (self.expr(var, sc), cmp, hi)
            out += self.stmt(body, sc, ind + 2)
            out += p + '    await $.tick();\n'
            out += p + '  }\n' + p + '}\n'
            self.loop_depth -= 1
            return out
        if k == 'forin':
            var, coll, body = s[1:]
            it = self.t()
            out = p + 'for (const %s of await $.iter(%s)) {\n' % (it, self.expr(coll, sc))
            out += p + '  ' + self.assign_code(var, it, sc) + '\n'
            out += self.stmt(body, sc, ind + 1)
            out += p + '}\n'
            return out
        if k == 'with':
            names = []
            out = p + '{\n'
            saved = self.with_stack
            for o in s[1]:
                v = self.t()
                # Delphi: each object in `with A, B do` is evaluated in the scope of the previous ones
                out += p + '  const %s = %s;\n' % (v, self.expr(o, sc))
                names.append(v)
                self.with_stack = self.with_stack + [v]
            self.with_stack = saved + names
            out += self.stmt(s[2], sc, ind + 1)
            self.with_stack = self.with_stack[:len(self.with_stack) - len(names)]
            out += p + '}\n'
            return out
        if k == 'case':
            sel = self.t()
            out = p + '{ const %s = %s;\n' % (sel, self.expr(s[1], sc))
            first = True
            for labels, st in s[2]:
                conds = []
                for lb in labels:
                    if lb[0] == 'range':
                        conds.append('$.inRange(%s, %s, %s)' % (sel, self.expr(lb[1], sc), self.expr(lb[2], sc)))
                    else:
                        conds.append('$.eq(%s, %s)' % (sel, self.expr(lb[1], sc)))
                out += p + ('  if (' if first else '  else if (') + ' || '.join(conds) + ') {\n'
                out += self.stmt(st, sc, ind + 2)
                out += p + '  }\n'
                first = False
            if s[3] is not None:
                if first:
                    out += self.stmt(s[3], sc, ind + 1)
                else:
                    out += p + '  else {\n' + self.stmt(s[3], sc, ind + 2) + p + '  }\n'
            out += p + '}\n'
            return out
        if k == 'tryfinally':
            return p + 'try {\n%s%s} finally {\n%s%s}\n' % (self.stmts(s[1], sc, ind + 1), p,
                                                             self.stmts(s[2], sc, ind + 1), p)
        if k == 'tryexcept':
            ev = self.t()
            out = p + 'try {\n' + self.stmts(s[1], sc, ind + 1) + p + '} catch (%s) {\n' % ev
            out += p + '  $.rethrowControl(%s);\n' % ev
            self.exc_stack.append(ev)
            first = True
            for vname, tname, st in s[2]:
                cond = '$.excIs(%s, %s)' % (ev, js_str(tname))
                out += p + ('  if (' if first else '  else if (') + cond + ') {\n'
                if vname:
                    sc.names.add(vname.lower())
                    out += p + '    %s[%s] = $.exc(%s);\n' % (sc.var, js_str(vname.lower()), ev)
                out += self.stmt(st, sc, ind + 2)
                out += p + '  }\n'
                first = False
            if s[2]:
                if s[3]:
                    out += p + '  else {\n' + self.stmts(s[3], sc, ind + 2) + p + '  }\n'
                else:
                    out += p + '  else { throw %s; }\n' % ev
            else:
                out += p + '  $.handled(%s);\n' % ev
                out += self.stmts(s[3] or [], sc, ind + 1)
            self.exc_stack.pop()
            out += p + '}\n'
            return out
        if k == 'raise':
            if s[1] is None:
                ev = self.exc_stack[-1] if self.exc_stack else 'undefined'
                return p + 'throw %s;\n' % ev
            return p + 'throw $.raise(%s);\n' % self.expr(s[1], sc)
        raise PasError('cannot gen stmt %r' % (k,))

    def ident_stmt(self, name, sc):
        """Bare identifier as a statement: call it."""
        low = name.lower()
        if self.with_stack:
            return '$.wcall([%s], %s, [], %s)' % (', '.join(self.with_stack), js_str(name), self.fallback_fn(name, sc))
        s = sc.lookup(low)
        if s is not None:
            return '$.callv(%s, [])' % self.local_ref(s, low)
        return '$.call(C, %s, [])' % js_str(name)

    def result_var(self, sc):
        fs = sc
        while fs.parent and fs.routine_name is None:
            fs = fs.parent
        return fs.var

    def result_expr(self, sc):
        return '%s.result' % self.result_var(sc)

    # -- routines
    def routine(self, r, parent_scope=None, depth=0):
        sig = r['sig']
        name = sig['name']
        self.cur_routine = name
        is_func = sig['kind'] == 'function'
        params = sig['params']
        lvar = 'L%d' % depth
        names = [x['name'].lower() for x in params]
        varp = [x['name'].lower() for x in params if x['mode'] in ('var', 'out')]
        local_names = [v[0].lower() for v in r['local']['vars']] + [c[0].lower() for c in r['local']['consts']]
        nested_names = [n['sig']['name'].lower() for n in r['local']['nested']]
        all_names = names + local_names + nested_names + ['result']
        sc = Scope(lvar, all_names, parent_scope, varp, routine_name=name.lower(), is_func=is_func)
        sc.names.add(name.lower()) if is_func else None
        pnames = ['p%d' % i for i in range(len(params))]
        out = []
        head = 'async function %s(%s)' % (re.sub(r'\W', '_', name), ', '.join((['Self'] if depth == 0 else []) + pnames))
        out.append(head + ' {\n')
        init = []
        for i, prm in enumerate(params):
            pv = 'p%d' % i
            if prm['mode'] in ('var', 'out'):
                init.append('%s: $.asRef(%s)' % (js_str(prm['name'].lower()), pv))
            elif prm['default'] is not None:
                init.append('%s: (%s === undefined ? %s : %s)' % (
                    js_str(prm['name'].lower()), pv, self.const_expr(prm['default']), pv))
            else:
                init.append('%s: $.copyArg(%s)' % (js_str(prm['name'].lower()), pv))
        if is_func:
            init.append('result: %s' % self.default_for(sig['rtype']))
        else:
            init.append('result: undefined')
        for v in r['local']['vars']:
            init.append('%s: %s' % (js_str(v[0].lower()), self.default_for(v[1]) if v[2] is None else self.const_expr(v[2])))
        if depth == 0:
            out.append('  const C = $.chain(Self, U);\n')
        out.append('  const %s = {%s};\n' % (lvar, ', '.join(init)))
        plain = [x['name'].lower() for x in params if x['mode'] not in ('var', 'out')]
        if plain:
            out.append('  await $.fixArgs(%s, %s);\n' % (lvar, json.dumps(plain, ensure_ascii=False)))
        # nested consts (evaluated at entry)
        for c in r['local']['consts']:
            out.append('  %s[%s] = %s;\n' % (lvar, js_str(c[0].lower()), self.const_expr(c[2]) if isinstance(c[2], tuple) and c[2] and c[2][0] in ('arraylit', 'recordlit') else self.expr(c[2], sc)))
        # nested routines
        saved_with = self.with_stack
        for n in r['local']['nested']:
            self.with_stack = []
            code = self.routine(n, sc, depth + 1)
            self.cur_routine = name
            out.append('  %s[%s] = $.fn(%s);\n' % (lvar, js_str(n['sig']['name'].lower()), code.strip()))
        self.with_stack = saved_with
        self.exc_stack = []
        out.append(self.stmts(r['body'], sc, 1))
        out.append('  return %s.result;\n}' % lvar)
        return ''.join(out)

    def const_expr(self, e):
        # constant expressions in declarations: generated with dynamic resolution allowed
        if isinstance(e, tuple) and e and e[0] == 'arraylit':
            return '[' + ', '.join(self.const_expr(x) for x in e[1]) + ']'
        if isinstance(e, tuple) and e and e[0] == 'recordlit':
            return '{' + ', '.join('%s: %s' % (js_str(k), self.const_expr(v)) for k, v in e[1].items()) + '}'
        sc = Scope('$none', [])
        return self.expr(e, sc)


# Named type aliases across all parsed units (TFoo = array[...] of ...; TBar = TFoo), filled by build.py.
ALIASES = {}
_alias_guard = set()


def collect_sigs(unit, sigs):
    def add(name, params):
        vp = [i for i, p in enumerate(params) if p['mode'] in ('var', 'out')]
        if vp:
            cur = sigs.setdefault(name.lower(), [])
            for x in vp:
                if x not in cur:
                    cur.append(x)
    for r in unit['routines']:
        add(r['sig']['name'], r['sig']['params'])
    for nm, lst in unit['decl_routines'].items():
        for params in lst:
            add(nm, params)
    for c in unit['classes'].values():
        for nm, lst in c['msigs'].items():
            for params in lst:
                add(nm, params)


def parse_unit_file(path):
    raw = open(path, 'rb').read()
    if raw.startswith(b'\xef\xbb\xbf'):
        text = raw[3:].decode('utf-8', 'replace')
    else:
        text = raw.decode('cp1251', 'replace')
    text = preprocess(text)
    toks = lex(text)
    p = P(toks, text)
    unit = p.parse_unit()
    return unit


def gen_unit(unit, sigs, records):
    g = Gen(unit, sigs, records)
    g.exc_stack = []
    lines = ['// Generated from %s.pas by pas2js — do not edit by hand; regenerate instead.' % unit['name'],
             '/* eslint-disable */', '// @ts-nocheck', '']
    lines.append('export default function define($) {')
    lines.append('  const U = $.unit(%s, %s);' % (js_str(unit['name']), js_str(unit['uses'])))
    lines.append('  const C = [U];')
    # enums
    for en, names in unit['enums'].items():
        for i, nm in enumerate(names):
            lines.append('  U.const(%s, %d);' % (js_str(nm), i))
    # records
    for rn, fields in unit['records'].items():
        lines.append('  $.defRecord(%s, {%s});' % (js_str(rn), ', '.join(
            '%s: () => %s' % (js_str(f[0].lower()), g.default_for(f[1])) for f in fields)))
    # classes
    for cl, c in unit['classes'].items():
        fields = {k: {'name': v['name'], 'type': v['type']['name'] if v['type']['k'] == 'named' else v['type']['k']}
                  for k, v in c['fields'].items()}
        lines.append('  U.defClass(%s, %s, %s, %s);' % (
            js_str(c['name']), js_str(c['parent']), json.dumps(fields, ensure_ascii=False),
            json.dumps(c['props'], ensure_ascii=False, default=lambda o: None)))
        for fk, fv in c['fields'].items():
            d = g.default_for(fv['type'])
            if d not in ('null', '0', "''", 'false'):
                lines.append('  U.fieldInit(%s, %s, () => %s);' % (js_str(c['name']), js_str(fk), d))
    # consts & vars (lazy init, in order)
    lines.append('  U.init(async () => {')
    for nm, tp, val in unit['consts']:
        try:
            lines.append('    U.const(%s, %s);' % (js_str(nm), g.const_expr(val)))
        except PasError as e:
            lines.append('    // const %s failed: %s' % (nm, e))
    for nm, tp, init in unit['vars']:
        tpn = tp['name'] if tp and tp['k'] == 'named' else (tp['k'] if tp else None)
        try:
            lines.append('    U.var_(%s, %s, %s);' % (js_str(nm), g.default_for(tp) if init is None else g.const_expr(init),
                                                     js_str(tpn)))
        except PasError as e:
            lines.append('    U.var_(%s, null, %s);' % (js_str(nm), js_str(tpn)))
    lines.append('  });')
    # routines
    for r in unit['routines']:
        sig = r['sig']
        cls = sig['cls']
        g.class_name = cls
        # implementation headers may omit the parameter list declared in the interface/class
        if not sig['params']:
            decl = None
            if cls and cls.lower() in unit['classes']:
                decl = unit['classes'][cls.lower()]['msigs'].get(sig['name'].lower())
            elif not cls:
                decl = unit['decl_routines'].get(sig['name'].lower())
            if decl and len(decl) == 1 and decl[0]:
                sig['params'] = decl[0]
        meta = {'params': [p['name'] for p in sig['params']], 'kind': sig['kind'],
                'ptypes': [(p['type']['name'] if p['type'] and p['type']['k'] == 'named' else None) for p in sig['params']]}
        try:
            if r['body'] is None:
                raise PasError(r['error'] or 'no body')
            code = g.routine(r)
            g.ok += 1
        except (PasError, RecursionError, KeyError, IndexError, TypeError, AttributeError) as e:
            g.fail += 1
            code = 'async function %s() { return $.notPorted(%s, %s); }' % (
                re.sub(r'\W', '_', sig['name']), js_str((cls + '.' if cls else '') + sig['name']), js_str(str(e)[:300]))
            meta['error'] = str(e)[:300]
            meta['src'] = r['src'][:6000]
        if cls:
            lines.append('  U.method(%s, %s, %s, %s);' % (js_str(cls), js_str(sig['name']), code, json.dumps(meta, ensure_ascii=False)))
        else:
            lines.append('  U.func(%s, %s, %s);' % (js_str(sig['name']), code, json.dumps(meta, ensure_ascii=False)))
    if unit['init']:
        # COM class factory registrations (TActiveFormFactory.Create(ComServer, …)) have no web equivalent
        def is_factory(st):
            d = st[1] if st[0] == 'call' else None
            return bool(d and d[0] == 'callx' and d[1][0] == 'member' and d[1][1][0] == 'id'
                        and d[1][1][1].lower().endswith('factory'))
        unit['init'] = [st for st in unit['init'] if not is_factory(st)]
    if unit['init']:
        try:
            g.class_name = None
            body = g.routine({'sig': {'name': '__initialization', 'kind': 'procedure', 'params': [], 'rtype': None, 'cls': None},
                              'local': {'consts': [], 'vars': [], 'nested': []}, 'body': unit['init'], 'error': None})
            lines.append('  U.setInitialization(%s);' % body)
        except PasError as e:
            lines.append('  // initialization failed: %s' % e)
    lines.append('  return U;')
    lines.append('}')
    return '\n'.join(lines) + '\n', g.ok, g.fail


if __name__ == '__main__':
    u = parse_unit_file(sys.argv[1])
    sigs = {}
    collect_sigs(u, sigs)
    code, ok, fail = gen_unit(u, sigs, {k: v for k, v in u['records'].items()})
    print(code)
    print('// ok=%d fail=%d' % (ok, fail), file=sys.stderr)
