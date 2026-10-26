"""Parse Delphi text DFM files into JSON component trees.

Handles: object/inherited/inline blocks, string concatenation with + and #nnn
char codes, multi-line ( ... ) lists, collections < item ... end >, binary { },
sets [ ]. Caption strings are decoded from the legacy AzLat font encoding when
the owning font is an "Azl"/Times-style Azeri font (heuristic: any cp1251
Cyrillic text is treated as AzLat, since the UI language is Azerbaijani).
"""
import json
import os
import re
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

AZ = {'А': 'A', 'Б': 'B', 'Ж': 'C', 'Ч': 'Ç', 'Д': 'D', 'Е': 'E', 'Я': 'Ə', 'Ф': 'F', 'Э': 'G', 'Ь': 'Ğ',
      'Щ': 'H', 'Х': 'X', 'Ы': 'I', 'И': 'İ', 'Ъ': 'J', 'К': 'K', 'Г': 'Q', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'Ю': 'Ö', 'П': 'P', 'Р': 'R', 'С': 'S', 'Ш': 'Ş', 'Т': 'T', 'У': 'U', 'Ц': 'Ü', 'В': 'V',
      'Й': 'Y', 'З': 'Z'}
AZ.update({k.lower(): (v.lower() if v != 'İ' else 'i') for k, v in AZ.items()})
AZ['ы'] = 'ı'

# Real Russian words appear in some forms (typed via #nnnn unicode escapes);
# we only AzLat-decode text that came from raw cp1251 bytes.


def azdec(s):
    return ''.join(AZ.get(c, c) for c in s)


class Tok:
    def __init__(self, text):
        self.t = text
        self.i = 0

    def ws(self):
        while self.i < len(self.t) and self.t[self.i] in ' \t\r\n':
            self.i += 1

    def peek(self, n=1):
        self.ws()
        return self.t[self.i:self.i + n]

    def word(self):
        self.ws()
        m = re.compile(r'[\w.\-+]+').match(self.t, self.i)
        if not m:
            raise ValueError('word expected at %d: %r' % (self.i, self.t[self.i:self.i + 40]))
        self.i = m.end()
        return m.group(0)

    def line_rest(self):
        j = self.t.find('\n', self.i)
        if j < 0:
            j = len(self.t)
        s = self.t[self.i:j].strip()
        self.i = j
        return s


class CodedChar(str):
    """A character written as #nnnn in the source (AzLat-or-Russian decided per run)."""


def join_coded(parts):
    from azsmart import looks_azlat
    out = []
    run = []
    for p in parts + [None]:
        if isinstance(p, CodedChar):
            run.append(str(p))
            continue
        if run:
            t = ''.join(run)
            out.append(azdec(t) if looks_azlat(t) else t)
            run = []
        if p is not None:
            out.append(p)
    return ''.join(out)


def parse_string(tk):
    """Parse 'abc'#13#10'def' + 'ghi' sequences. Returns decoded str.
    Adjacent pieces join only without whitespace or across a '+' (list items are separate strings)."""
    out = []
    first = True
    while True:
        start = tk.i
        tk.ws()
        c = tk.t[tk.i:tk.i + 1]
        if not first and tk.i != start and c != '+' and not getattr(tk, '_plus', False):
            tk.i = start
            break
        first = False
        tk._plus = False
        if c == '+':
            tk.i += 1
            tk._plus = True
            continue
        if c == "'":
            j = tk.i + 1
            buf = []
            while True:
                k = tk.t.index("'", j)
                buf.append(tk.t[j:k])
                if tk.t[k + 1:k + 2] == "'":
                    buf.append("'")
                    j = k + 2
                else:
                    tk.i = k + 1
                    break
            out.append(azdec(''.join(buf)))
        elif c == '#':
            m = re.compile(r'#(\d+)').match(tk.t, tk.i)
            out.append(CodedChar(chr(int(m.group(1)))))
            tk.i = m.end()
        else:
            break
    return join_coded(out)


def parse_value(tk):
    c = tk.peek()
    if c in ("'", '#'):
        return parse_string(tk)
    if c == '(':
        tk.i += 1
        items = []
        while tk.peek() != ')':
            items.append(parse_value(tk))
        tk.i += 1
        return items
    if c == '[':
        j = tk.t.index(']', tk.i)
        s = tk.t[tk.i + 1:j]
        tk.i = j + 1
        return [x.strip() for x in s.split(',') if x.strip()]
    if c == '{':
        j = tk.t.index('}', tk.i)
        raw = re.sub(r'\s+', '', tk.t[tk.i + 1:j])
        tk.i = j + 1
        return ('<hex>', raw)
    if c == '<':
        tk.i += 1
        items = []
        while tk.peek() != '>':
            w = tk.word()  # item
            assert w.lower() == 'item', w
            props = {}
            while True:
                tk.ws()
                if tk.t[tk.i:tk.i + 3].lower() == 'end' and not re.match(r'\w', tk.t[tk.i + 3:tk.i + 4]):
                    tk.i += 3
                    break
                k = tk.word()
                tk.ws()
                assert tk.t[tk.i] == '=', (k, tk.t[tk.i:tk.i + 30])
                tk.i += 1
                props[k] = parse_value(tk)
            items.append(props)
        tk.i += 1
        return items
    # bare word / number / identifier
    w = tk.word()
    if re.fullmatch(r'-?\d+', w):
        return int(w)
    if re.fullmatch(r'-?\d+\.\d+([eE][-+]?\d+)?', w):
        return float(w)
    if w in ('True', 'False'):
        return w == 'True'
    # bare identifier (enum, colour, constant or component reference)
    return {'i': w}


def parse_object(tk):
    kind = tk.word().lower()  # object / inherited / inline
    tk.ws()
    header = tk.line_rest()
    m = re.match(r'(\w*)\s*:\s*([\w.]+)', header)
    if m:
        name, cls = m.group(1), m.group(2)
    else:
        name, cls = header, ''
    node = {'name': name, 'class': cls, 'kind': kind, 'props': {}, 'children': []}
    while True:
        tk.ws()
        w = re.compile(r'[\w.]+').match(tk.t, tk.i).group(0)
        if w.lower() == 'end':
            tk.i += 3
            break
        if w.lower() in ('object', 'inherited', 'inline'):
            node['children'].append(parse_object(tk))
            continue
        k = tk.word()
        tk.ws()
        assert tk.t[tk.i] == '=', (k, tk.t[tk.i:tk.i + 30])
        tk.i += 1
        v = parse_value(tk)
        set_prop(node, k, v)
    return node


def set_prop(node, k, v):
    """Store a parsed property; binary blobs ('<hex>', data) are decoded where the runtime needs them."""
    if isinstance(v, tuple) and v and v[0] == '<hex>':
        if k == 'Variables.Data':
            v = decode_doa_variables(v[1])
        elif k in ('Items.NodeData', 'Items.Data') and node['class'] in TREE_CLASSES:
            tree = decode_tree_nodes(v[1], k == 'Items.NodeData')
            if tree is not None:
                node['props']['Items.Tree'] = tree
            return
        else:
            v = '<binary>'
    node['props'][k] = v


def parse_binary(b):
    """Binary DFM (TPF0 stream, Classes.TReader): the same JSON tree as the text parser."""
    import struct
    pos = 4  # 'TPF0'

    def u8():
        nonlocal pos
        pos += 1
        return b[pos - 1]

    def take(n):
        nonlocal pos
        pos += n
        return b[pos - n:pos]

    def sstr():
        return take(u8()).decode('cp1251', 'replace')

    def ansi(raw):  # ANSI strings: cp1251 text of the Azeri UI (AzLat fonts), as in text DFMs
        return azdec(raw.decode('cp1251', 'replace'))

    def uni(text):  # Unicode strings: decide AzLat vs Russian like #nnnn runs of text DFMs
        return join_coded([CodedChar(c) for c in text])

    def ext80(raw):
        mant = int.from_bytes(raw[:8], 'little')
        se = int.from_bytes(raw[8:10], 'little')
        sign, e = se >> 15, se & 0x7fff
        if e == 0 and mant == 0:
            return 0.0
        v = mant / (1 << 63) * 2.0 ** (e - 16383)
        return -v if sign else v

    def value():
        t = u8()
        if t == 0:
            return None
        if t == 1:  # vaList
            out = []
            while b[pos] != 0:
                out.append(value())
            u8()
            return out
        if t == 2:
            return struct.unpack('<b', take(1))[0]
        if t == 3:
            return struct.unpack('<h', take(2))[0]
        if t == 4:
            return struct.unpack('<i', take(4))[0]
        if t == 5:
            return ext80(take(10))
        if t == 6:
            return ansi(take(u8()))
        if t == 7:
            w = sstr()
            return {'i': w}
        if t == 8:
            return False
        if t == 9:
            return True
        if t == 10:
            n = struct.unpack('<i', take(4))[0]
            return ('<hex>', take(n).hex().upper())
        if t == 11:  # vaSet
            out = []
            while True:
                w = sstr()
                if not w:
                    return out
                out.append(w)
        if t == 12:
            n = struct.unpack('<i', take(4))[0]
            return ansi(take(n))
        if t == 13:
            return {'i': 'nil'}
        if t == 14:  # vaCollection
            items = []
            while b[pos] != 0:
                if b[pos] in (2, 3, 4):
                    value()  # item order
                assert u8() == 1  # vaList
                item = {'name': '', 'class': '', 'props': {}}
                while b[pos] != 0:
                    k = sstr()
                    set_prop(item, k, value())
                u8()
                items.append(item['props'])
            u8()
            return items
        if t == 15:
            return struct.unpack('<f', take(4))[0]
        if t == 16:
            return struct.unpack('<q', take(8))[0] / 10000
        if t == 17:
            return struct.unpack('<d', take(8))[0]
        if t == 18:
            n = struct.unpack('<i', take(4))[0]
            return uni(take(2 * n).decode('utf-16-le', 'replace'))
        if t == 19:
            return struct.unpack('<q', take(8))[0]
        if t == 20:
            n = struct.unpack('<i', take(4))[0]
            return uni(take(n).decode('utf-8', 'replace'))
        if t == 21:
            return struct.unpack('<d', take(8))[0]
        raise ValueError('binary dfm: value type %d at %d' % (t, pos - 1))

    def component():
        kind = 'object'
        if b[pos] & 0xF0 == 0xF0:
            flags = u8() & 0x0F
            kind = 'inherited' if flags & 1 else 'inline' if flags & 4 else 'object'
            if flags & 2:
                value()  # child position
        cls = sstr()
        name = sstr()
        node = {'name': name, 'class': cls, 'kind': kind, 'props': {}, 'children': []}
        while b[pos] != 0:
            k = sstr()
            set_prop(node, k, value())
        u8()
        while b[pos] != 0:
            node['children'].append(component())
        u8()
        return node

    return component()


TREE_CLASSES = {'TTreeView', 'TDBTreeView', 'TCustomTreeView'}


def decode_tree_nodes(hexs, unicode):
    """TTreeView Items stream (ComCtrls TTreeNodes.ReadData).
    Items.Data (ANSI, Delphi 7):  count, then per node: size, ImageIndex, SelectedIndex, StateIndex,
        OverlayIndex, Data, Count (int32 each), ShortString text, followed by its Count children.
    Items.NodeData (Unicode):     version byte, count, then the same with optional ExpandedImageIndex
        and Enabled before a length byte + UTF-16LE text; the record size tells which fields exist."""
    import struct
    try:
        b = bytes.fromhex(hexs)
    except ValueError:
        return None
    pos = 1 if unicode else 0

    def i32(o):
        return struct.unpack_from('<i', b, o)[0]

    def node():
        nonlocal pos
        size = i32(pos)
        rec = pos + 4
        img, sel, state, _ovl, _data, cnt = (i32(rec + 4 * k) for k in range(6))
        text = ''
        if unicode:
            for extra in (5, 4, 0, 1):
                tp = rec + 24 + extra
                if tp < len(b) and tp + 1 + 2 * b[tp] == rec + size:
                    text = b[tp + 1:tp + 1 + 2 * b[tp]].decode('utf-16-le', 'replace')
                    break
        else:
            tp = rec + 24
            text = b[tp + 1:tp + 1 + b[tp]].decode('cp1251', 'replace')
        pos = rec + size
        kids = [node() for _ in range(max(0, cnt))]
        return {'text': text, 'imageIndex': img, 'selectedIndex': sel, 'stateIndex': state, 'children': kids}

    try:
        count = i32(pos)
        pos += 4
        return [node() for _ in range(count)]
    except (struct.error, IndexError):
        return None


def decode_doa_variables(hexs):
    """DOA TOracleDataSet/TOracleQuery Variables.Data: version, count, then per variable:
    int32 byte-length + UTF-16LE name (':NAME'), int32 type code, followed by value data.
    Names are recovered robustly by scanning for UTF-16 ':' sequences."""
    try:
        b = bytes.fromhex(hexs)
    except ValueError:
        return []
    out = []
    i = 8
    while i + 4 <= len(b):
        n = int.from_bytes(b[i:i + 4], 'little')
        if 2 <= n <= 128 and n % 2 == 0 and i + 4 + n + 4 <= len(b) and b[i + 4:i + 6] == b':\x00':
            name = b[i + 4:i + 4 + n].decode('utf-16-le', 'replace')
            typ = int.from_bytes(b[i + 4 + n:i + 8 + n], 'little')
            out.append({'name': name.lstrip(':'), 'type': typ})
            i += 8 + n
            continue
        i += 1
    return out


def parse_file(path):
    raw = open(path, 'rb').read()
    if raw[:1] == b'\xff':  # resource header (RT_RCDATA) in front of the TPF0 stream
        i = raw.find(b'TPF0')
        if i < 0:
            raise ValueError('binary dfm')
        raw = raw[i:]
    if raw[:4] == b'TPF0':
        return parse_binary(raw)
    if raw.startswith(b'\xef\xbb\xbf'):
        text = raw[3:].decode('utf-8', 'replace')
    else:
        text = raw.decode('cp1251', 'replace')
    return parse_object(Tok(text))


if __name__ == '__main__':
    print(json.dumps(parse_file(sys.argv[1]), ensure_ascii=False, indent=1))
