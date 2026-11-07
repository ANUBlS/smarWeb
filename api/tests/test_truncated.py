"""A result cut off at SB_MAX_ROWS is flagged (the Delphi code reads lookup lists completely)."""
from smartweb_api.config import settings

COLS = [('ID', 'NUMBER', 10, 0)]


def test_truncated_result_is_flagged_and_logged(client, conn, session, monkeypatch, tmp_path):
    monkeypatch.setattr(settings, 'max_rows', 50)
    monkeypatch.setattr(settings, 'slow_file', tmp_path / 'slow.log')
    conn.on(r'from account', columns=COLS, rows=[(i,) for i in range(80)])
    j = client.post('/api/query', headers=session, json={'source': 'T.DebitAccData', 'sql': 'select id from account', 'variables': []}).json()
    assert len(j['rows']) == 50 and j['truncated'] is True
    assert 'TRUNCATED\tT.DebitAccData' in (tmp_path / 'slow.log').read_text()


def test_exact_limit_is_not_truncated(client, conn, session, monkeypatch):
    monkeypatch.setattr(settings, 'max_rows', 50)
    conn.on(r'from account', columns=COLS, rows=[(i,) for i in range(50)])
    j = client.post('/api/query', headers=session, json={'sql': 'select id from account', 'variables': []}).json()
    assert len(j['rows']) == 50 and not j.get('truncated')


def test_nan_becomes_null(client, conn, session):
    conn.on(r'from t', columns=[('X', 'BINARY_DOUBLE', 8, 0)], rows=[(float('nan'),), (1.5,)])
    j = client.post('/api/query', headers=session, json={'sql': 'select x from t', 'variables': []}).json()
    assert j['rows'] == [[None], [1.5]]
