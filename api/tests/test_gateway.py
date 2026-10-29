"""Gateway behaviour (DOA semantics) against the fake driver."""
import pytest
import datetime as dt


def test_logon_returns_session_and_sid(client, conn):
    r = client.post('/api/logon', json={'username': 'sabuhi', 'password': 'x', 'database': 'PDBNBC'})
    j = r.json()
    assert r.status_code == 200 and j['username'] == 'SABUHI' and j['sid'] == 4711
    assert j['serverDate'] == '2026-10-29T09:30:00'


def test_unknown_session_is_401(client):
    r = client.post('/api/query', json={'sql': 'select 1 from dual'}, headers={'X-SB-Session': 'nope'})
    assert r.status_code == 401 and r.json()['errorCode'] == 401


def test_unknown_database_alias(client):
    r = client.post('/api/logon', json={'username': 'u', 'password': 'p', 'database': 'NOPE'})
    assert r.status_code == 400 and r.json()['errorCode'] == 12154


def test_query_binds_only_used_variables_with_types(client, conn, session):
    conn.on(r'from provodki', columns=[('ID', 'NUMBER', 10, 0), ('DAT', 'DATE'), ('AMMOUNT', 'NUMBER', 18, 2)],
            rows=[(1, dt.datetime(2026, 10, 1), 15.5)])
    r = client.post('/api/query', headers=session, json={
        'source': 'TAccTransactionsForm.DebitTransactionsData',
        'sql': 'select id, dat, ammount from provodki where debt = :DebitAccID and dat between :StartDate and :EndDate',
        'variables': [{'name': 'DEBITACCID', 'type': 'integer', 'value': '7073'},
                      {'name': 'STARTDATE', 'type': 'date', 'value': '2026-10-01T00:00:00'},
                      {'name': 'ENDDATE', 'type': 'date', 'value': '2026-10-31T00:00:00'},
                      {'name': 'UNUSED', 'type': 'string', 'value': 'x'}]})
    assert r.status_code == 200, r.text
    j = r.json()
    assert [c['type'] for c in j['columns']] == ['integer', 'date', 'float']
    assert j['rows'] == [[1, '2026-10-01T00:00:00', 15.5]]
    sql, binds = conn.statements('from provodki')[-1]
    assert binds == {'DEBITACCID': 7073, 'STARTDATE': dt.datetime(2026, 10, 1), 'ENDDATE': dt.datetime(2026, 10, 31)}


def test_oracle_error_is_mapped(client, conn, session):
    conn.on(r'from secret', error=(942, 'ORA-00942: table or view does not exist'))
    r = client.post('/api/query', headers=session, json={'sql': 'select * from secret'})
    assert r.status_code == 400 and r.json() == {'errorCode': 942, 'message': 'ORA-00942: table or view does not exist'}


def test_execute_plsql_returns_in_out_variables(client, conn, session):
    conn.on(r'sb_adm\.next_no', out={'NO': 125})
    r = client.post('/api/execute', headers=session, json={
        'sql': 'begin :NO := sb_adm.next_no(:COMP); end;',
        'variables': [{'name': 'NO', 'type': 'integer', 'value': None}, {'name': 'COMP', 'type': 'integer', 'value': 1}]})
    assert r.status_code == 200, r.text
    assert r.json()['variables'] == {'NO': 125, 'COMP': 1}


def test_package_call_uses_argument_types(client, conn, session):
    conn.arguments['SBOP.GET_RATE'] = [(0, None, 'NUMBER', 'OUT'), (1, 'P_VAL', 'NUMBER', 'IN'), (2, 'P_DATE', 'DATE', 'IN')]
    conn.on(r'SBOP\.get_rate', out={'r': 1.7})
    # positional call with a Delphi TDateTime (46324.0 = 2026-10-29) for a DATE argument
    r = client.post('/api/package', headers=session, json={
        'package': 'SBOP', 'name': 'get_rate', 'kind': 'float', 'mode': 'positional', 'params': [840, 46324.0]})
    assert r.status_code == 200, r.text
    assert r.json()['result'] == 1.7
    sql, binds = conn.statements(r'SBOP\.get_rate')[-1]
    assert sql == 'begin :r := SBOP.get_rate(:p0, :p1); end;'
    assert binds['P0'] == 840 and binds['P1'] == dt.datetime(2026, 10, 29)


def test_package_named_mode_and_out_params(client, conn, session):
    conn.arguments['SB_ACCOUNT.ADD_ACCOUNT'] = [(1, 'CUSTOMERID', 'NUMBER', 'IN'), (2, 'ACCNO', 'VARCHAR2', 'IN'),
                                                (3, 'NEWID', 'NUMBER', 'OUT')]
    conn.on(r'SB_ACCOUNT\.add_account', out={'p2': 99})
    r = client.post('/api/package', headers=session, json={
        'package': 'SB_ACCOUNT', 'name': 'add_account', 'kind': 'procedure', 'mode': 'named',
        'params': ['customerid', 5, 'accno', 38810944, 'newid', {'out': 'integer'}]})
    assert r.status_code == 200, r.text
    sql, binds = conn.statements(r'add_account')[-1]
    assert sql == 'begin SB_ACCOUNT.add_account(CUSTOMERID => :p0, ACCNO => :p1, NEWID => :p2); end;'
    assert binds['P1'] == '38810944'  # VARCHAR2 argument gets a string
    assert r.json()['outParams']['2'] == 99


def test_boolean_function(client, conn, session):
    conn.arguments['SBSEC.HASACCESS'] = [(0, None, 'PL/SQL BOOLEAN', 'OUT'), (1, 'P_MODULE', 'VARCHAR2', 'IN')]
    conn.on(r'SBSEC\.HasAccess', out={'r': 1})
    r = client.post('/api/package', headers=session, json={
        'package': 'SBSEC', 'name': 'HasAccess', 'kind': 'boolean', 'params': ['Accounts']})
    assert r.json()['result'] is True
    assert conn.statements('HasAccess')[-1][0] == 'begin :r := case when SBSEC.HasAccess(:p0) then 1 else 0 end; end;'


def test_package_name_is_validated(client, session):
    r = client.post('/api/package', headers=session, json={'package': 'x; drop table y', 'name': 'a', 'params': []})
    assert r.status_code == 400 and 'Invalid package' in r.json()['message']


def test_apply_record_update_changes_only_modified_columns(client, conn, session):
    conn.on(r'select \* from account where 1 = 0', columns=[('ID', 'NUMBER', 10, 0), ('ACC_NO', 'VARCHAR2'),
                                                           ('OPEN_DAT', 'DATE'), ('NAME', 'VARCHAR2')])
    conn.on(r'update account', rowcount=1)
    conn.on(r'from account t where t.rowid', columns=[('ID', 'NUMBER', 10, 0), ('NAME', 'VARCHAR2'), ('ROWID', 'ROWID')],
            rows=[(7, 'Yeni ad', 'AAAx1')])
    r = client.post('/api/apply-record', headers=session, json={
        'source': 'TAccountMainForm.AccountsData', 'sql': 'select a.rowid, a.*, c.name as cust from account a, customers c where a.cust = c.id',
        'action': 'update', 'rowid': 'AAAx1',
        'values': {'ID': 7, 'NAME': 'Yeni ad', 'OPEN_DAT': '2026-10-01T00:00:00', 'CUST': 'X'},
        'oldValues': {'ID': 7, 'NAME': 'Köhnə ad', 'OPEN_DAT': '2026-10-01T00:00:00', 'CUST': 'X'},
        'fields': ['ID', 'NAME', 'OPEN_DAT', 'CUST']})
    assert r.status_code == 200, r.text
    sql, binds = conn.statements('update account')[-1]
    assert sql == 'update account set NAME = :v0 where rowid = :rid' and binds == {'V0': 'Yeni ad', 'RID': 'AAAx1'}
    assert r.json()['values']['NAME'] == 'Yeni ad'


def test_apply_record_insert_returns_rowid_and_skips_nulls(client, conn, session):
    conn.on(r'select \* from avalute where 1 = 0', columns=[('VALUTE', 'NUMBER', 3, 0), ('VAL_NAME', 'VARCHAR2'), ('KURS', 'NUMBER')])
    conn.on(r'insert into avalute', rowcount=1, out={'rid': 'AAB9'})
    r = client.post('/api/apply-record', headers=session, json={
        'sql': 'select v.rowid, v.* from avalute v', 'action': 'insert',
        'values': {'VALUTE': 840, 'VAL_NAME': 'USD', 'KURS': None}, 'oldValues': {}, 'fields': ['VALUTE', 'VAL_NAME', 'KURS']})
    assert r.status_code == 200, r.text
    sql, binds = conn.statements('insert into avalute')[-1]
    assert sql == 'insert into avalute (VALUTE, VAL_NAME) values (:v0, :v1) returning rowid into :rid'
    assert r.json()['rowid'] == 'AAB9'


def test_apply_record_requires_rowid(client, conn, session):
    conn.on(r'select \* from account where 1 = 0', columns=[('ID', 'NUMBER', 10, 0)])
    r = client.post('/api/apply-record', headers=session, json={'sql': 'select * from account', 'action': 'delete',
                                                                'values': {'ID': 1}, 'oldValues': {}, 'fields': ['ID']})
    assert r.status_code == 400 and 'ROWID' in r.json()['message']


def test_transactions(client, conn, session):
    assert client.post('/api/commit', headers=session).status_code == 200
    assert client.post('/api/savepoint', headers=session, json={'name': 'sp1'}).status_code == 200
    assert client.post('/api/rollback', headers=session, json={'savepoint': 'sp1'}).status_code == 200
    assert client.post('/api/rollback', headers=session).status_code == 200
    assert conn.commits == 1 and conn.rollbacks == 1
    assert conn.statements('savepoint sp1') and conn.statements('rollback to savepoint sp1')


def test_logoff_closes_connection(client, conn, session):
    assert client.post('/api/logoff', headers=session).status_code == 200
    assert conn.closed and client.post('/api/commit', headers=session).status_code == 401


def test_swagger_is_served(client):
    assert client.get('/api/docs').status_code == 200
    spec = client.get('/api/openapi.json').json()
    assert '/api/query' in spec['paths'] and spec['info']['title'] == 'SmartWeb API'


def test_logon_sets_session_nls(client, conn):
    r = client.post('/api/logon', json={'username': 'u', 'password': 'p', 'database': 'PDBNBC'})
    assert r.status_code == 200, r.text
    assert any("alter session set NLS_DATE_FORMAT = 'DD.MM.YYYY'" in sql for sql, _ in conn.log)


@pytest.mark.parametrize('text', ['29/10/2026', '29.10.2026', '29-10-2026', '2026-10-29', '29.10.2026 00:00:00'])
def test_day_first_date_text(text):
    import datetime as dt
    from smartweb_api.convert import parse_date
    assert parse_date(text) == dt.datetime(2026, 10, 29)
