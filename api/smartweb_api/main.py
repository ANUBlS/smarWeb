"""SmartWeb API — FastAPI application.

  uvicorn smartweb_api.main:app --host 0.0.0.0 --port 8000

Swagger UI: /api/docs   ReDoc: /api/redoc   OpenAPI: /api/openapi.json
"""
from __future__ import annotations

import logging

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from . import __version__
from .config import settings
from .gateway import GatewayError
from .routes import gateway as gateway_routes
from .routes import modules as module_routes

log = logging.getLogger('smartweb')

DESCRIPTION = """
Oracle gateway for **SmartWeb**, the browser version of SmartBank.

The transpiled Delphi modules talk to Oracle exactly as the desktop application did (Direct Oracle
Access: `TOracleSession`, `TOracleDataSet`, `TOracleQuery`, `TOraclePackage`). Every database
round-trip is one of the **Gateway** calls; all business rules stay in the existing PL/SQL packages.

1. `POST /api/logon` with the user's Oracle credentials → `sessionId`
2. send it as header **`X-SB-Session`** with every other call (*Authorize* button above)
3. `commit` / `rollback` end the transaction, as `Session.Commit` did

Each module that is API-ready has its own section with the datasets and package routines its code
uses. `GET /api/modules` lists all modules and their status.
"""


def create_app() -> FastAPI:
    routers = module_routes.module_routers()
    tags = [{'name': 'Gateway', 'description': 'The calls every module makes (web/src/api/http.ts)'},
            {'name': 'Modules', 'description': 'Module registry and API status'},
            {'name': 'Service'}] + [t for _, t in routers]
    app = FastAPI(title='SmartWeb API', version=__version__, description=DESCRIPTION, openapi_tags=tags,
                  docs_url='/api/docs', redoc_url='/api/redoc', openapi_url='/api/openapi.json',
                  swagger_ui_parameters={'persistAuthorization': True, 'docExpansion': 'none'})
    if settings.cors_origins:
        app.add_middleware(CORSMiddleware, allow_origins=settings.cors_origins, allow_methods=['*'],
                           allow_headers=['*'])

    @app.exception_handler(GatewayError)
    async def gateway_error(_req: Request, e: GatewayError):
        return JSONResponse(status_code=e.status, content={'errorCode': e.code, 'message': e.message})

    @app.exception_handler(Exception)
    async def unexpected(_req: Request, e: Exception):
        log.exception('unexpected error')
        return JSONResponse(status_code=500, content={'errorCode': 500, 'message': f'{type(e).__name__}: {e}'})

    app.include_router(gateway_routes.router)
    app.include_router(module_routes.index_router)
    for r, _ in routers:
        app.include_router(r)
    return app


app = create_app()
