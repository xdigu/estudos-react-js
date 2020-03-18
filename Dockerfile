# Build Stage
FROM node:12-alpine AS build-env
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . ./
RUN npm run-script build

# Final Stage
FROM node:12-alpine
WORKDIR /app

COPY --from=build-env /app/build ./build
COPY ./server/package.json ./
RUN npm install
COPY . ./

EXPOSE 4000

ENTRYPOINT [ "node", "app.js" ]