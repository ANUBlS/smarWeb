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
            if p['package']:
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
    assert sql == ' '.join(ds['sql'].split())
    used = _binds_in(ds['sql'])
    for v in ds['variables']:
        if v['name'] in used:
            assert binds[v['name']] == EXPECT.get(v['type'], 'X'), v


@pytest.mark.parametrize('module,pkg,routine', list(_routines()))
def test_package_endpoint_builds_call(client, conn, session, module, pkg, routine):
    r = client.post(f"/api/modules/{module}/packages/{pkg['component']}/{routine['name']}", headers=session,
                    json={'params': []})
    assert r.status_code == 200, r.text
    sql, _ = conn.log[-1]
    assert f"{pkg['package']}.{routine['name']}".lower() in sql.lower()
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
