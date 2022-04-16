FROM node:17-slim

WORKDIR /web-dev/

COPY package.json yarn.lock /web-dev/

RUN yarn install --immutable --immutable-cache --check-cache --frozen-lockfile

COPY . .

USER node

CMD yarn live-reload