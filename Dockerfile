FROM node:16.17.0

WORKDIR /app

COPY . .

RUN npm install --production --force

RUN chown -R node:node /app

USER node
CMD ["npm","start"]
