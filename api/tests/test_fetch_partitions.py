"""Incremental fetching (DOA QueryAllRecords = False) and the partition fallback (ORA-14109)."""
from smartweb_api.gateway import rewrite_partitions

ACC = [('ID', 'NUMBER', 10, 0), ('ACC_NO', 'VARCHAR2', 30)]


def test_query_with_fetch_returns_first_rows_and_cursor(client, conn, session):
    conn.on(r'from provodki', columns=ACC, rows=[(i, f'A{i}') for i in range(250)])
    r = client.post('/api/query', headers=session, json={'source': 'T.Transactions', 'sql': 'select id, acc_no from provodki',
                                                        'variables': [], 'fetch': 100})
    j = r.json()
    assert r.status_code == 200, r.text
    assert len(j['rows']) == 100 and j['rows'][0] == [0, 'A0'] and j['more'] is True and j['cursorId']
    f = client.post('/api/fetch', headers=session, json={'cursorId': j['cursorId'], 'count': 100}).json()
    assert len(f['rows']) == 100 and f['rows'][0] == [100, 'A100'] and f['more'] is True
    f = client.post('/api/fetch', headers=session, json={'cursorId': j['cursorId'], 'count': 0}).json()
    assert len(f['rows']) == 50 and f['rows'][-1] == [249, 'A249'] and f['more'] is False
    # exhausted: the cursor is closed
    assert client.post('/api/fetch', headers=session, json={'cursorId': j['cursorId'], 'count': 10}).json() == {'rows': [], 'more': False}


def test_query_with_fetch_small_result_has_no_cursor(client, conn, session):
    conn.on(r'from provodki', columns=ACC, rows=[(1, 'A1'), (2, 'A2')])
    j = client.post('/api/query', headers=session, json={'sql': 'select id, acc_no from provodki', 'variables': [], 'fetch': 100}).json()
    assert len(j['rows']) == 2 and j['more'] is False and j['cursorId'] is None


def test_query_with_fetch_exact_page_has_no_cursor(client, conn, session):
    conn.on(r'from provodki', columns=ACC, rows=[(i, 'x') for i in range(100)])
    j = client.post('/api/query', headers=session, json={'sql': 'select id, acc_no from provodki', 'variables': [], 'fetch': 100}).json()
    assert len(j['rows']) == 100 and j['more'] is False


def test_close_cursor(client, conn, session):
    conn.on(r'from provodki', columns=ACC, rows=[(i, 'x') for i in range(300)])
    j = client.post('/api/query', headers=session, json={'sql': 'select id, acc_no from provodki', 'variables': [], 'fetch': 100}).json()
    assert client.post('/api/close-cursor', headers=session, json={'cursorId': j['cursorId']}).status_code == 200
    assert client.post('/api/fetch', headers=session, json={'cursorId': j['cursorId'], 'count': 10}).json()['rows'] == []


def test_query_without_fetch_returns_all(client, conn, session):
    conn.on(r'from provodki', columns=ACC, rows=[(i, 'x') for i in range(250)])
    j = client.post('/api/query', headers=session, json={'sql': 'select id, acc_no from provodki', 'variables': []}).json()
    assert len(j['rows']) == 250 and j['more'] is False


def test_partition_on_a_view_is_replaced_by_its_definition(client, conn, session):
    conn.on(r'ACCOUNT\s+PARTITION', error=(14109, 'ORA-14109: partition-extended object names may only be used with tables and editioning views'))
    conn.on(r"from ACCOUNT where close_dat is null or close_dat >= date '2100-01-01'\) ACCOUNT", columns=ACC, rows=[(7, 'AZ55')])
    sql = 'SELECT ID, ACC_NO FROM\n  ACCOUNT PARTITION ( ACTIVACC ) \nORDER BY ACC_NO'
    r = client.post('/api/query', headers=session, json={'source': 'TTransactionDataModule.DebitAccData', 'sql': sql, 'variables': []})
    assert r.status_code == 200, r.text
    assert r.json()['rows'] == [[7, 'AZ55']]
    # remembered for the session: the next statement is rewritten without a failing round trip first
    n = len(conn.statements(r'ACCOUNT\s+PARTITION'))
    client.post('/api/query', headers=session, json={'sql': sql, 'variables': []})
    assert len(conn.statements(r'ACCOUNT\s+PARTITION')) == n


def test_unknown_partition_keeps_the_oracle_error(client, conn, session):
    conn.on(r'PARTITION', error=(14109, 'ORA-14109: partition-extended object names may only be used with tables and editioning views'))
    r = client.post('/api/query', headers=session, json={'sql': 'select * from foo partition (bar)', 'variables': []})
    assert r.status_code == 400 and r.json()['errorCode'] == 14109


def test_rewrite_partitions():
    assert rewrite_partitions('select a.x from ACCOUNT partition (ActivAcc)  a, b') == \
        "select a.x from (select * from ACCOUNT where close_dat is null or close_dat >= date '2100-01-01') a, b"
    assert rewrite_partitions('select * from operkurs partition(TODAY) where val_kod = 1') == \
        'select * from (select * from operkurs where shifr >= 3 and shifr < 4) OPERKURS where val_kod = 1'
    assert rewrite_partitions('select * from smart.out_account partition (activacc) order by 1') == \
        "select * from (select * from smart.out_account where close_dat is null or close_dat >= date '2100-01-01') OUT_ACCOUNT order by 1"
    assert rewrite_partitions('select row_number() over (partition by x order by y) from t') == \
        'select row_number() over (partition by x order by y) from t'
    assert rewrite_partitions('select * from t partition (zzz)') is None
