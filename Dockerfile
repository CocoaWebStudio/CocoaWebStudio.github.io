FROM node:lts-slim

RUN mkdir -p /home/node/css/node_modules

WORKDIR /home/node/css

COPY --chown=node:node ./app .

RUN chown -R node:node .

USER node

RUN yarn install --production

EXPOSE 8089

ENV NUXT_PORT=8089 \
  NUXT_HOST=css

# start command
CMD [ "yarn", "start" ]
