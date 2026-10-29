# docker build -t smartweb-api api/
# docker run -d --name smartweb-api --restart=always -p 8000:8000 --env-file api/.env smartweb-api
FROM python:3.13-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY smartweb_api ./smartweb_api
EXPOSE 8000
CMD ["uvicorn", "smartweb_api.main:app", "--host", "0.0.0.0", "--port", "8000", "--proxy-headers"]
