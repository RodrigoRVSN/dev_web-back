FROM node:17-slim

WORKDIR /web-dev/

COPY package.json yarn.lock /web-dev/

RUN npm install

COPY . .

USER node

CMD npm run live-reload