FROM node:16-slim

WORKDIR /usr/app/client

COPY package*.json tsconfig.json ./

RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]