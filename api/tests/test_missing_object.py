"""ORA-00942 names the table or view that does not exist (Oracle's message does not)."""
from smartweb_api.gateway import _candidates

E942 = (942, 'ORA-00942: table or view does not exist\nHelp: https://docs.oracle.com/error-help/db/ora-00942/')


def test_query_names_the_missing_view(client, conn, session):
    sql = 'select a.id, c.name from account a, cust_view c where a.cust = c.id'
    conn.on(r'cust_view', error=E942)
    r = client.post('/api/query', headers=session, json={'sql': sql, 'variables': []})
    j = r.json()
    assert r.status_code == 400 and j['errorCode'] == 942
    assert j['message'].startswith('ORA-00942: table or view does not exist')
    assert 'Tapılmayan cədvəl/görünüş (və ya ona icazə yoxdur): CUST_VIEW' in j['message']
    assert 'ACCOUNT' not in j['message'].split('Tapılmayan')[1].split('\n')[0]
    assert j['message'].rstrip().endswith('ora-00942/')   # Oracle's help line stays last


def test_offset_points_at_the_object(client, conn, session):
    sql = 'select * from smart.missing_tab t join account a on a.id = t.id'
    conn.on(r'missing_tab', error=(942, 'ORA-00942: table or view does not exist', sql.index('smart.missing_tab')))
    j = client.post('/api/query', headers=session, json={'sql': sql, 'variables': []}).json()
    assert 'SMART.MISSING_TAB' in j['message']


def test_plsql_block_line_and_column(client, conn, session):
    sql = "begin\n  insert into audit_x (a) values (1);\nend;"
    conn.on(r'audit_x', error=(6550, 'ORA-06550: line 2, column 15:\nPL/SQL: ORA-00942: table or view does not exist\nORA-06550: line 2, column 3:\nPL/SQL: SQL Statement ignored'))
    j = client.post('/api/execute', headers=session, json={'sql': sql, 'variables': []}).json()
    assert j['errorCode'] == 6550 and 'AUDIT_X' in j['message']


def test_other_errors_unchanged(client, conn, session):
    conn.on(r'from t1', error=(904, 'ORA-00904: "X": invalid identifier'))
    j = client.post('/api/query', headers=session, json={'sql': 'select x from t1', 'variables': []}).json()
    assert j['message'] == 'ORA-00904: "X": invalid identifier'


def test_candidates():
    assert _candidates("select * from a, b x, smart.c where d in (select 1 from e) and s = 'from zz'") == ['a', 'e', 'b', 'smart.c']
    assert _candidates('update t1 set a = 1') == ['t1']
    assert _candidates('insert into t2 (a) select a from t3 join t4 on 1=1') == ['t2', 't3', 't4']


def test_inside_a_package_reads_the_source_line(client, conn, session):
    conn.on(r'pkg_x\.run', error=(942, 'ORA-00942: table or view does not exist\nORA-06512: at "SMART.PKG_X", line 12\nORA-06512: at line 1'))
    conn.on(r'from all_source', columns=[('TEXT', 'VARCHAR2', 4000)],
            rows=[('  procedure run is\n',), ("    execute immediate 'x';\n",), ('    select count(*) into n from old_rates r\n',), ('     where r.d = sysdate;\n',)])
    conn.on(r'old_rates', error=(942, 'ORA-00942: table or view does not exist'))
    j = client.post('/api/execute', headers=session, json={'sql': 'begin pkg_x.run; end;', 'variables': []}).json()
    assert 'OLD_RATES' in j['message']
