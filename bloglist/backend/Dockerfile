FROM node:20-slim as test
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm test:node
RUN rm -rf node_modules

FROM test as prod
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
CMD [ "pnpm", "start", "--host" ]

# docker build -t backend-prod -f Dockerfile . && docker run -itp 3003:3003 backend-prod
# docker run -itp 3003:3003 backend-prod