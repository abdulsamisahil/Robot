FROM node:16-slim

WORKDIR /usr/app/server

COPY package*.json tsconfig.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]