# docker build -t smartweb . && docker run -d --name smartweb --restart=always -p 8086:8086 smartweb
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY server.mjs ./
ENV HOST=0.0.0.0 PORT=8086
EXPOSE 8086
CMD ["node", "server.mjs"]
