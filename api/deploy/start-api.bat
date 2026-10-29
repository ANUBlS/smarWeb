@echo off
rem SmartWeb API on Windows Server: http://127.0.0.1:8000 (Swagger: /api/docs)
rem The web server (deploy\start-smartweb.bat) forwards /api here when API_TARGET is set.
cd /d "%~dp0\.."
if not exist .venv (
  py -3 -m venv .venv || goto :error
  .venv\Scripts\pip install -r requirements.txt || goto :error
)
if not exist .env copy .env.example .env
.venv\Scripts\uvicorn smartweb_api.main:app --host 127.0.0.1 --port 8000 --workers 1
goto :eof
:error
echo Installation failed.
exit /b 1
