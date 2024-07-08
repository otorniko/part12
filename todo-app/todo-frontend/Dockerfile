FROM node:20 AS test
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm test

FROM test AS build
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN npm run build

FROM nginx:mainline-alpine-slim
COPY --from=build  /usr/src/app/dist /usr/share/nginx/html