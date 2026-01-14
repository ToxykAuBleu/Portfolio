# ------------------------------------------------------------------------------
# BUILD APPLICATION INSIDE CONTAINER
# ------------------------------------------------------------------------------ 
FROM oven/bun:1.3.6-alpine AS builder
WORKDIR /app
# Install dependencies.
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build application.
# NOTE: For the time being, bun can't build alone the app due to this angular error:
# [ERROR] An error occurred while extracting routes. Cannot find module 'memory:///server.mjs' from '/app/node_modules/@angular/build/src/utils/load-esm.js'
RUN apk add --no-cache nodejs
COPY . ./
RUN node ./node_modules/@angular/cli/bin/ng.js build

# ------------------------------------------------------------------------------
# USING BUILT CONTAINER
# ------------------------------------------------------------------------------
FROM oven/bun:1.3.6-alpine AS runtime
LABEL org.opencontainers.image.version="2.0.0"
LABEL org.opencontainers.image.title="Portfolio"
LABEL org.opencontainers.image.source="https://github.com/ToxykAuBleu/Portfolio"
WORKDIR /app

COPY package.json bun.lock ./
COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4000
EXPOSE 4000
CMD ["bun", "run", "server"]
