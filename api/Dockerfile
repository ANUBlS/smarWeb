# Normally started together with the web app from the repository root:  docker compose up -d --build
# API alone:
#   docker build -t smartweb-api api/
#   docker run -d --name smartweb-api --restart=always -p 8000:8000 --env-file api/.env smartweb-api
FROM python:3.13-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY smartweb_api ./smartweb_api
# unknown-SQL audit file (SB_AUDIT_FILE default); mount a volume to keep it
RUN useradd -r -u 10001 smartweb && mkdir -p /app/logs && chown smartweb /app/logs
USER smartweb
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD python -c "import urllib.request,sys; sys.exit(0 if urllib.request.urlopen('http://127.0.0.1:8000/api/health', timeout=4).status == 200 else 1)"
# one worker: each user's Oracle session lives in this process
CMD ["uvicorn", "smartweb_api.main:app", "--host", "0.0.0.0", "--port", "8000", "--proxy-headers"]
