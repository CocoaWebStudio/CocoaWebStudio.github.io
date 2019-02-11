FROM node:lts-slim

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

RUN chown -R node:node .

COPY app/package.json ./

COPY app/yarn.lock  ./

RUN yarn

COPY --chown=node:node ./app .

RUN yarn build

USER node

ENV HOST 0.0.0.0
EXPOSE 8080
# start command
CMD [ "yarn", "start" ]
