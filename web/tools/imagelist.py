"""TImageList.Bitmap (a Windows ImageList_Write stream saved in the DFM) -> PNG sprite.

Stream: ILHEAD (28 bytes: 'IL', version, cCurImage, cMaxImage, cGrow, cx, cy, bkcolor, flags, overlays[4]),
then a BMP with the images (4 per row, bottom-up DIB) and, when ILC_MASK is set, a 1-bpp mask BMP
(bit set = transparent). The sprite has every image in one row, `cx` pixels apart, with alpha.
"""
import re
import struct
import zlib

ILC_MASK = 0x0001


def _bmp(data, off):
    """Decode a BMP file at `off`: returns (width, height, rows_top_down [list of [(r,g,b,a)]], end offset)."""
    if data[off:off + 2] != b'BM':
        raise ValueError('BMP expected')
    file_size = struct.unpack_from('<I', data, off + 2)[0]
    pix_off = struct.unpack_from('<I', data, off + 10)[0]
    hdr = struct.unpack_from('<I', data, off + 14)[0]
    w, h, _planes, bpp, comp = struct.unpack_from('<iiHHI', data, off + 18)
    clr_used = struct.unpack_from('<I', data, off + 46)[0] if hdr >= 40 else 0
    top_down = h < 0
    h = abs(h)
    pal = []
    pal_off = off + 14 + hdr
    masks = None
    if comp == 3:  # BI_BITFIELDS
        masks = struct.unpack_from('<III', data, pal_off)
        pal_off += 12
    if bpp <= 8:
        n = clr_used or (1 << bpp)
        for i in range(n):
            b, g, r, _ = data[pal_off + i * 4:pal_off + i * 4 + 4]
            pal.append((r, g, b))
    stride = ((w * bpp + 31) // 32) * 4
    base = off + pix_off
    rows = []
    for y in range(h):
        src_y = y if top_down else h - 1 - y
        row = data[base + src_y * stride: base + (src_y + 1) * stride]
        out = []
        for x in range(w):
            if bpp == 1:
                v = (row[x >> 3] >> (7 - (x & 7))) & 1
                out.append(pal[v] + (255,) if pal else (v * 255,) * 3 + (255,))
            elif bpp == 4:
                v = (row[x >> 1] >> (4 if x % 2 == 0 else 0)) & 15
                out.append(pal[v] + (255,))
            elif bpp == 8:
                out.append(pal[row[x]] + (255,))
            elif bpp == 16:
                v = row[x * 2] | (row[x * 2 + 1] << 8)
                if masks and masks[1] == 0x07E0:  # RGB565
                    r, g, b = (v >> 11) & 31, (v >> 5) & 63, v & 31
                    out.append((r * 255 // 31, g * 255 // 63, b * 255 // 31, 255))
                else:  # RGB555
                    r, g, b = (v >> 10) & 31, (v >> 5) & 31, v & 31
                    out.append((r * 255 // 31, g * 255 // 31, b * 255 // 31, 255))
            elif bpp == 24:
                b, g, r = row[x * 3:x * 3 + 3]
                out.append((r, g, b, 255))
            elif bpp == 32:
                b, g, r, a = row[x * 4:x * 4 + 4]
                out.append((r, g, b, a))
            else:
                raise ValueError(f'unsupported bpp {bpp}')
        rows.append(out)
    end = base + stride * h  # ImageList streams store bfSize = header size, so measure the pixels
    return w, h, rows, end


def _png(w, h, rows):
    raw = b''.join(b'\0' + bytes(c for px in row for c in px) for row in rows)

    def chunk(t, d):
        return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    return (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
            + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b''))


def imagelist_png(data: bytes):
    """Returns (png bytes, count, cx, cy) or None."""
    if data[:2] != b'IL' or len(data) < 28:
        return None
    _magic, _ver, count, _mx, _grow, cx, cy, _bk, flags = struct.unpack_from('<2sHHHHHHIH', data, 0)
    if count <= 0 or cx <= 0 or cy <= 0:
        return None
    w, h, img, end = _bmp(data, 28)
    mask = None
    if flags & ILC_MASK and data[end:end + 2] == b'BM':
        _, _, mask, _ = _bmp(data, end)
    per_row = max(1, w // cx)
    has_alpha = any(px[3] for row in img for px in row) and not all(px[3] == 255 for row in img for px in row)
    rows = []
    for y in range(cy):
        out = []
        for i in range(count):
            sx, sy = (i % per_row) * cx, (i // per_row) * cy + y
            for x in range(cx):
                if sy >= h or sx + x >= w:
                    out.append((0, 0, 0, 0))
                    continue
                r, g, b, a = img[sy][sx + x]
                if not has_alpha:
                    a = 255
                    if mask is not None and sy < len(mask) and sx + x < len(mask[sy]) and mask[sy][sx + x][0] > 127:
                        a = 0
                out.append((r, g, b, a))
        rows.append(out)
    return _png(cx * count, cy, rows), count, cx, cy


def dfm_imagelists(dfm_text: str):
    """{object name: bytes} for every TImageList with a Bitmap in a text DFM."""
    out = {}
    for m in re.finditer(r'object\s+(\w+)\s*:\s*T\w*ImageList\b(.*?)\n\s*Bitmap\s*=\s*\{([0-9A-Fa-f\s]+)\}', dfm_text, re.S):
        # the Bitmap must belong to this object (no nested `object` in between)
        if re.search(r'\n\s*(object|inherited|inline)\s', m.group(2)):
            continue
        try:
            out[m.group(1)] = bytes.fromhex(re.sub(r'\s+', '', m.group(3)))
        except ValueError:
            pass
    return out


def glyph_png(data: bytes, num_glyphs: int = 1):
    """TBitBtn / TSpeedButton Glyph.Data (TBitmap stream: 4-byte size + BMP) -> (png, width, height) of the first
    glyph; NumGlyphs > 1 is a strip (up, disabled, clicked, down). As TBitmap with TransparentMode = tmAuto, the
    colour of the bottom-left pixel is transparent (32-bit bitmaps keep their own alpha)."""
    off = 4 if data[4:6] == b'BM' else 0
    if data[off:off + 2] != b'BM':
        return None
    w, h, img, _end = _bmp(data, off)
    if w <= 0 or h <= 0:
        return None
    n = max(1, num_glyphs or 1)
    gw = w // n if n > 1 and w % n == 0 else w
    alpha = any(px[3] for row in img for px in row) and not all(px[3] == 255 for row in img for px in row)
    key = img[h - 1][0][:3]
    rows = []
    for y in range(h):
        out = []
        for x in range(gw):
            r, g, b, a = img[y][x]
            if not alpha:
                a = 0 if (r, g, b) == key else 255
            out.append((r, g, b, a))
        rows.append(out)
    return _png(gw, h, rows), gw, h


def dfm_glyphs(dfm_text: str):
    """{object name: bytes} for every component with its own Glyph.Data in a text DFM."""
    out = {}
    for m in re.finditer(r'object\s+(\w+)\s*:\s*T\w+\b((?:(?!\n\s*(?:object|inherited|inline)\s).)*?)\n\s*Glyph\.Data\s*=\s*\{([0-9A-Fa-f\s]+)\}',
                         dfm_text, re.S):
        try:
            out[m.group(1)] = bytes.fromhex(re.sub(r'\s+', '', m.group(3)))
        except ValueError:
            pass
    return out
