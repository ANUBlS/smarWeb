import os
import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
os.environ.setdefault('SB_DATABASES', '{"PDBNBC": "fake:1521/PDBNBC"}')
os.environ.setdefault('SB_ALLOWLIST', 'audit')
os.environ.setdefault('SB_AUDIT_FILE', str(Path(__file__).resolve().parent / '.audit.log'))

from fastapi.testclient import TestClient  # noqa: E402

from smartweb_api import sessions  # noqa: E402
from smartweb_api.main import create_app  # noqa: E402
from tests.fake_oracle import FakeConnection  # noqa: E402


@pytest.fixture
def conn(monkeypatch):
    c = FakeConnection()
    monkeypatch.setattr(sessions, 'connector', lambda u, p, d: c)
    return c


@pytest.fixture
def client(conn):
    return TestClient(create_app())


@pytest.fixture
def session(client):
    r = client.post('/api/logon', json={'username': 'sabuhi', 'password': 'x', 'database': 'PDBNBC'})
    assert r.status_code == 200, r.text
    return {'X-SB-Session': r.json()['sessionId']}
