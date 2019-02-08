FROM node:lts-slim

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

RUN chown -R node:node .

COPY package.json ./

COPY yarn.lock  ./

RUN yarn

COPY --chown=node:node . .

RUN yarn build

USER node

ENV HOST 0.0.0.0
EXPOSE 8080
# start command
CMD [ "yarn", "start" ]
