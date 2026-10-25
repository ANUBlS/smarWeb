@echo off
rem SmartWeb on Windows — serves http://192.168.2.93:8086
cd /d "%~dp0.."
set HOST=0.0.0.0
set PORT=8086
rem set API_TARGET=http://127.0.0.1:3000
if not exist dist\index.html (
  call npm ci || exit /b 1
  call npm run build || exit /b 1
)
node server.mjs
