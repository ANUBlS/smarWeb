"""Per-module API: one Swagger section per SmartBank module that is marked ready
(smartweb_api/registry/ready.json).

For a module it exposes what its Delphi code uses:
  GET  /api/modules/{module}                         registry: datasets (SQL, variables), packages
  POST /api/modules/{module}/datasets/{dataset}      open a dataset with its registered SQL
  POST /api/modules/{module}/packages/{component}/{routine}
                                                    call a package routine the module calls
The web client itself keeps using the gateway endpoints (/api/query …) with the same statements;
these endpoints document each module and let other systems use the same data.
"""

import json
import re
from enum import Enum
from typing import Any

from fastapi import APIRouter, Body, Depends
from pydantic import BaseModel, Field

from .. import gateway, registry
from ..schemas import ErrorBody, PackageCallResult, QueryResult
from ..sessions import Session
from .gateway import current

READY_FILE = registry.REG_DIR / 'ready.json'


def ready_modules() -> list[str]:
    if not READY_FILE.exists():
        return []
    return [m for m in json.loads(READY_FILE.read_text(encoding='utf-8')) if registry.module(m)]


def module_tag(m: dict) -> str:
    cap = (m.get('caption') or '').split(' / ')[-1]
    return f"{m['name']} — {cap}" if cap else m['name']


class DatasetOpen(BaseModel):
    variables: dict[str, Any] = Field({}, description='Bind variable values by name; dates as ISO strings')
    maxRows: int | None = None


class RoutineCall(BaseModel):
    params: list[Any] | dict[str, Any] = Field([], description='Positional list, or {name: value} for named mode')


CALL_KIND = {'CallProcedure': 'procedure', 'CallIntegerFunction': 'integer', 'CallFloatFunction': 'float',
             'CallStringFunction': 'string', 'CallDateFunction': 'date', 'CallBooleanFunction': 'boolean',
             'CallVariantFunction': 'variant'}

index_router = APIRouter(prefix='/api/modules', tags=['Modules'])


@index_router.get('', summary='All modules and their API status')
def list_modules():
    ready = set(ready_modules())
    return [{**m, 'apiReady': m['name'] in ready} for m in registry.index() if not m.get('plugin')] + \
           [{**m, 'apiReady': m['name'] in ready} for m in registry.index() if m.get('plugin')]


SUBST_BAD = re.compile(r';|--|/\*|\b(select|union|insert|update|delete|merge|drop|alter|create|truncate|grant|revoke|'
                       r'begin|declare|execute|exec|into|call)\b', re.I)


def substitute(sql: str, name: str, value) -> str:
    """DOA otSubst variable (`order by :Title`, `and cust_type :Cond`): its text replaces :name.

    Over this endpoint the text may hold column names, numbers, operators, lists and quoted literals,
    but no statement keywords, comments or `;`. An empty value drops a preceding ORDER/GROUP BY."""
    text = '' if value is None else str(value)
    bare = re.sub(r"'(?:[^']|'')*'", "''", text)
    if "'" in bare.replace("''", '') or SUBST_BAD.search(bare):
        raise gateway.GatewayError(20000, f'Substitution variable {name}: only column names, values and operators are accepted')
    if not text.strip():
        sql = re.sub(r'\b(order|group)\s+by\s+:' + re.escape(name) + r'\b', '', sql, flags=re.I)
    return re.sub(r':' + re.escape(name) + r'\b', lambda _: text, sql, flags=re.I)


def dataset_keys(m: dict) -> dict[str, dict]:
    """Endpoint key per dataset: its name, qualified by the form class when several forms use the same
    name, and numbered (_2, _3) when even that repeats (copied forms in different packages)."""
    ds = [d for d in m['datasets'] if d['sql'].strip()]
    out: dict[str, dict] = {}
    for d in ds:
        k = d['name'] if sum(1 for x in ds if x['name'] == d['name']) == 1 else d['source']
        base, n = k, 2
        while k in out:
            k, n = f'{base}_{n}', n + 1
        out[k] = d
    return out


def build_router(name: str) -> APIRouter:
    m = registry.module(name)
    tag = module_tag(m)
    r = APIRouter(prefix=f'/api/modules/{name}', tags=[tag], responses={400: {'model': ErrorBody}, 401: {'model': ErrorBody}})
    by_key = dataset_keys(m)

    @r.get('', summary=f'{name}: datasets, statements and package calls', operation_id=f'{name}_info')
    def info():
        return {k: v for k, v in m.items() if k not in ('lib',)}

    if by_key:
        DS = Enum(f'{name}Dataset', {k: k for k in sorted(by_key)}, type=str)
        doc = '\n'.join(f"- **{k}** ({', '.join(v['name'] + ':' + v['type'] for v in d['variables']) or 'no variables'})"
                        for k, d in sorted(by_key.items()))

        @r.post('/datasets/{dataset}', response_model=QueryResult, operation_id=f'{name}_open_dataset',
                summary=f'{name}: open a dataset', description=f'Runs the dataset SELECT from the module.\n\n{doc}')
        def open_dataset(dataset: DS, body: DatasetOpen = Body(DatasetOpen()), s: Session = Depends(current)):  # type: ignore[valid-type]
            d = by_key[dataset.value]
            types = {v['name']: v['type'] for v in d['variables']}
            sql = d['sql']
            variables = []
            for k, v in body.variables.items():
                if types.get(k.upper()) == 'subst':
                    sql = substitute(sql, k, v)
                else:
                    variables.append({'name': k.upper(), 'type': types.get(k.upper()), 'value': v})
            return gateway.query(s, sql, variables, body.maxRows)

    routines = [(p, rt) for p in m['packages'] if p['package'] for rt in p['routines']]
    if routines:
        comps = sorted({p['component'] for p, _ in routines})
        names = sorted({rt['name'] for _, rt in routines})
        PC = Enum(f'{name}Package', {c: c for c in comps}, type=str)
        RT = Enum(f'{name}Routine', {n: n for n in names}, type=str)
        table = {(p['component'], rt['name']): (p, rt) for p, rt in routines}
        doc = '\n'.join(f"- **{p['component']}** (`{p['package']}`): " + ', '.join(f"`{rt['name']}`" for rt in p['routines'])
                        for p in m['packages'] if p['package'] and p['routines'])

        @r.post('/packages/{component}/{routine}', response_model=PackageCallResult, operation_id=f'{name}_call',
                summary=f'{name}: call a package routine', description=f'Package routines the module calls.\n\n{doc}')
        def call(component: PC, routine: RT, body: RoutineCall = Body(RoutineCall()), s: Session = Depends(current)):  # type: ignore[valid-type]
            hit = table.get((component.value, routine.value))
            if not hit:
                raise gateway.GatewayError(20404, f'{component.value} does not call {routine.value} in {name}', status=404)
            p, rt = hit
            if isinstance(body.params, dict):
                params, mode = [x for k, v in body.params.items() for x in (k, v)], 'named'
            else:
                params, mode = body.params, p.get('mode', 'positional')
            return gateway.call_package(s, p['package'], rt['name'], CALL_KIND.get(rt['call'], 'procedure'), mode, params)

    return r


def module_routers() -> list[tuple[APIRouter, dict]]:
    out = []
    for n in ready_modules():
        m = registry.module(n)
        out.append((build_router(n), {'name': module_tag(m), 'description': m.get('caption', '')}))
    return out
