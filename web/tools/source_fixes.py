"""Corrections applied to Delphi sources before translation (the repository files are never changed).

Only for cases where the checked-in source is provably not what the deployed program was built from,
e.g. a component removed from a .pas/.dfm by an unfinished edit while the compiled unit (.dcu) and
Delphi's __history copies still contain it. Each entry documents its evidence.
"""
import os
import tempfile

# path relative to the repository root -> list of (old, new) text replacements (cp1251 text)
FIXES = {
    # Sorğular / Result of Query: "Export Result ..." calls ResultExporter.Report, but ResultExporter was dropped
    # from the latest .pas/.dfm; QueryResultViewer.dcu and every __history version (dfm ~1~ … ~5~) declare it.
    'Packages/QueryExporter/QueryResultViewer.pas': [
        ('    DataSrcResult: TDataSource;\n', '    DataSrcResult: TDataSource;\n    ResultExporter: TExcelExporter;\n'),
    ],
    'Packages/QueryExporter/QueryResultViewer.dfm': [
        (None, (
            '  object ResultExporter: TExcelExporter\n'
            '    ExportSource = DataSrcResult\n'
            '    SheetName = \'Result\'\n'
            '    ShowTitles = True\n'
            '  end\n'
        )),
    ],
}

_CACHE = os.path.join(tempfile.gettempdir(), 'smartweb-source-fixes')


def fixed_path(path: str, repo: str) -> str:
    """The path to parse: the original file, or a corrected copy when FIXES has an entry for it."""
    rel = os.path.relpath(path, repo).replace(os.sep, '/')
    fixes = FIXES.get(rel)
    if not fixes:
        return path
    raw = open(path, 'rb').read()
    crlf = b'\r\n' in raw
    text = raw.decode('cp1251').replace('\r\n', '\n')
    for old, new in fixes:
        if old is None:
            # append a component before the form's final `end`
            i = text.rstrip().rfind('\nend')
            if new.split('\n')[0].strip() in text:
                continue
            text = text[:i + 1] + new + text[i + 1:]
        elif new not in text:
            if old not in text:
                raise ValueError(f'source fix for {rel} no longer applies: {old!r}')
            text = text.replace(old, new, 1)
    out = os.path.join(_CACHE, rel)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    data = text.replace('\n', '\r\n') if crlf else text
    with open(out, 'wb') as fh:
        fh.write(data.encode('cp1251'))
    return out
