FROM node:20-slim 
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
CMD [ "pnpm", "dev", "--host" ]
# docker build -t backend-dev -f dev.Dockerfile .
# docker run -itp 3003:3003 backend-dev