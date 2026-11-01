# Normally started together with the API from the repository root:  docker compose up -d --build
# Web app alone (mock data):  docker build -t smartweb . && docker run -d --name smartweb --restart=always -p 8086:8086 smartweb
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# mock (sample data, no database) or http (Oracle through the SmartWeb API at VITE_API_URL)
ARG VITE_API_MODE=mock
ARG VITE_API_URL=/api
ENV VITE_API_MODE=$VITE_API_MODE VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY server.mjs applog.mjs ./
# application log files (İdarəetmə / Jurnal ayarları); mount a volume to keep them
RUN mkdir -p /app/logs && chown node:node /app/logs
USER node
ENV HOST=0.0.0.0 PORT=8086 SB_LOG_DIR=/app/logs
EXPOSE 8086
CMD ["node", "server.mjs"]
