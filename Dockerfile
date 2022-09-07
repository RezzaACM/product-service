FROM node:18.4.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3003

RUN npm run build

CMD [ "node", "dist/main.js" ]