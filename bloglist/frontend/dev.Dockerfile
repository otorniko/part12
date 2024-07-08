FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY ./frontend .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
CMD [ "pnpm", "dev", "--host" ]
# docker build -t frontend-dev -f dev.Dockerfile . && docker run -itp 5173:5173 frontend-dev
# docker run -itp 5173:5173 frontend-dev
