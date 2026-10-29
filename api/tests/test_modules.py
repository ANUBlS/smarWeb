"""Per-module API: every dataset and package routine of each API-ready module."""
import datetime as dt
import re

import pytest

from smartweb_api import registry
from smartweb_api.routes.modules import dataset_keys, ready_modules

SAMPLE = {'integer': 7, 'float': 1.5, 'string': 'X', 'date': '2026-10-29T00:00:00', 'boolean': True}
EXPECT = {'integer': 7, 'float': 1.5, 'string': 'X', 'date': dt.datetime(2026, 10, 29), 'boolean': 1}


def _cases():
    for name in ready_modules():
        for key, d in dataset_keys(registry.module(name)).items():
            yield pytest.param(name, key, d, id=f'{name}:{key}')


def _binds_in(sql):
    clean = re.sub(r"'(?:[^']|'')*'", "''", re.sub(r'--[^\n]*|/\*.*?\*/', ' ', sql, flags=re.S))
    return {n.upper() for n in re.findall(r'(?<![\w:]):([A-Za-z_][\w$#]*)', clean)}


def _routines():
    for name in ready_modules():
        for p in registry.module(name)['packages']:
            if p['package'] or not p['source'].startswith('*.'):  # '' = schema-level routines (DOA)
                for rt in p['routines']:
                    yield pytest.param(name, p, rt, id=f"{name}:{p['component']}.{rt['name']}")


def test_ready_modules_listed(client):
    mods = client.get('/api/modules').json()
    ready = {m['name'] for m in mods if m['apiReady']}
    assert set(ready_modules()) == ready and ready


@pytest.mark.parametrize('module,key,ds', list(_cases()))
def test_dataset_endpoint_runs_registered_sql(client, conn, session, module, key, ds):
    variables = {v['name']: SAMPLE.get(v['type'], 'X') for v in ds['variables']}
    r = client.post(f'/api/modules/{module}/datasets/{key}', headers=session, json={'variables': variables})
    assert r.status_code == 200, r.text
    sql, binds = conn.log[-1]
    expected = ds['sql']
    for v in ds['variables']:
        if v['type'] == 'subst':
            expected = re.sub(':' + re.escape(v['name']) + r'\b', 'X', expected, flags=re.I)
    assert sql == ' '.join(expected.split())
    used = _binds_in(expected)
    for v in ds['variables']:
        if v['name'] in used and v['type'] != 'subst':
            assert binds[v['name']] == EXPECT.get(v['type'], 'X'), v


@pytest.mark.parametrize('module,pkg,routine', list(_routines()))
def test_package_endpoint_builds_call(client, conn, session, module, pkg, routine):
    r = client.post(f"/api/modules/{module}/packages/{pkg['component']}/{routine['name']}", headers=session,
                    json={'params': []})
    assert r.status_code == 200, r.text
    sql, _ = conn.log[-1]
    target = f"{pkg['package']}.{routine['name']}" if pkg['package'] else routine['name']
    assert target.lower() in sql.lower()
    assert sql.startswith('begin ') and sql.endswith(' end;')


def test_info_endpoint(client):
    for name in ready_modules():
        j = client.get(f'/api/modules/{name}').json()
        assert j['name'] == name and 'datasets' in j


def test_registered_sql_is_allowed_and_unknown_is_audited(client, conn, session, tmp_path, monkeypatch):
    from smartweb_api.config import settings
    name = ready_modules()[0]
    ds = next(d for d in registry.module(name)['datasets'] if d['sql'].strip())
    monkeypatch.setattr(settings, 'allowlist', 'enforce')
    ok = client.post('/api/query', headers=session, json={'source': ds['source'], 'sql': ds['sql'], 'variables': []})
    assert ok.status_code == 200, ok.text
    bad = client.post('/api/query', headers=session, json={'source': 'X.Y', 'sql': 'select * from all_users'})
    assert bad.status_code == 403 and bad.json()['errorCode'] == 20403
    monkeypatch.setattr(settings, 'allowlist', 'audit')
    monkeypatch.setattr(settings, 'audit_file', tmp_path / 'audit.log')
    assert client.post('/api/query', headers=session, json={'source': 'X.Y', 'sql': 'select * from all_users'}).status_code == 200
    assert 'select * from all_users' in (tmp_path / 'audit.log').read_text()


def _subst_dataset():
    for name in ready_modules():
        for key, d in dataset_keys(registry.module(name)).items():
            for v in d['variables']:
                if v['type'] == 'subst':
                    return name, key, v['name']


def test_subst_variable_is_spliced_not_bound(client, conn, session):
    name, key, var = _subst_dataset()
    r = client.post(f'/api/modules/{name}/datasets/{key}', headers=session,
                    json={'variables': {var: 'CUST_NAME desc, ID'}})
    assert r.status_code == 200, r.text
    sql, binds = conn.log[-1]
    assert 'CUST_NAME desc, ID' in sql and var not in binds and ':' + var.lower() not in sql.lower()


@pytest.mark.parametrize('value', ["1; drop table x", "(select 1 from dual)", "a' or 1=1", "x -- y", "1 union all select 1"])
def test_subst_variable_rejects_sql(client, conn, session, value):
    name, key, var = _subst_dataset()
    r = client.post(f'/api/modules/{name}/datasets/{key}', headers=session, json={'variables': {var: value}})
    assert r.status_code == 400 and r.json()['errorCode'] == 20000


def test_customers_named_package_call(client, conn, session):
    conn.arguments['SB_CUSTINFO.ADD_CUSTINFO'] = [(1, 'P_CUST_ID', 'NUMBER', 'IN'), (2, 'P_INFO', 'VARCHAR2', 'IN')]
    pkg = next(p for p in registry.module('Customers')['packages'] if p['component'].lower() == 'sb_custinfo')
    assert pkg['mode'] == 'named'
    r = client.post('/api/modules/Customers/packages/sb_custInfo/add_custinfo', headers=session,
                    json={'params': {'P_CUST_ID': 5, 'P_INFO': 'x'}})
    assert r.status_code == 200, r.text
    sql, binds = conn.log[-1]
    assert 'p_cust_id =>' in sql.lower() and 5 in binds.values()


@pytest.mark.parametrize('value,expect', [("in (1, 2)", "in (1, 2)"), ("= 'A''B'", "= 'A''B'"), ("C.NAME desc", "C.NAME desc")])
def test_subst_variable_accepts_values(client, conn, session, value, expect):
    name, key, var = _subst_dataset()
    r = client.post(f'/api/modules/{name}/datasets/{key}', headers=session, json={'variables': {var: value}})
    assert r.status_code == 200, r.text
    assert expect in conn.log[-1][0]


def test_empty_sort_variable_drops_order_by(client, conn, session):
    r = client.post('/api/modules/Customers/datasets/ActiveCustomerList', headers=session, json={'variables': {'TITLE': ''}})
    assert r.status_code == 200, r.text
    assert conn.log[-1][0].rstrip().endswith('where CLOSE_DAT IS NULL')


def test_out_avalute_named_package_call(client, conn, session):
    conn.arguments['P_AVALUTE.ADD_AVALUTE'] = [(1, 'V_VALUTE', 'VARCHAR2', 'IN'), (2, 'V_VAL_NAME', 'VARCHAR2', 'IN')]
    r = client.post('/api/modules/XOutAvalute/packages/P_AVALUTE/add_avalute', headers=session,
                    json={'params': {'v_VALUTE': '840', 'v_VAL_NAME': 'USD'}})
    assert r.status_code == 200, r.text
    sql, binds = conn.log[-1]
    assert 'p_avalute.add_avalute' in sql.lower() and 'v_valute =>' in sql.lower() and '840' in binds.values()


def test_schema_level_routine_without_package(client, conn, session):
    r = client.post('/api/package', headers=session, json={'source': 'TTransactionsDataModule.OraclePackage', 'package': '',
                    'name': 'EXCHANGE_CALLBACK', 'kind': 'procedure', 'mode': 'positional', 'params': []})
    assert r.status_code == 200, r.text
    assert conn.log[-1][0] == 'begin EXCHANGE_CALLBACK; end;'
    assert any('package_name is null' in sql for sql, _ in conn.log)
