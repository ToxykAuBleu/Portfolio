FROM oven/bun:1.3.0-alpine
LABEL org.opencontainers.image.version="1.2.0"
LABEL org.opencontainers.image.title="Portfolio"
LABEL org.opencontainers.image.source="https://github.com/ToxykAuBleu/Portfolio"

WORKDIR /app
COPY dist ./dist
COPY package.json ./

ENV HOST=0.0.0.0
ENV PORT=4000
CMD ["bun", "run", "server"]