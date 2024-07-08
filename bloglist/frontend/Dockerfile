FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /usr/src/app
COPY ./frontend .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm test
RUN rm -rf node_modules

FROM base AS build
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build


FROM nginx:mainline-alpine-slim
COPY --from=build  /usr/src/app/dist /usr/share/nginx/html

# docker build -t frontend-prod -f Dockerfile . && docker run -itp 80:80 frontend-prod
