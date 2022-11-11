FROM node:14.21.0-alpine as builder
RUN apk update && apk upgrade

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000

CMD [ "npm", "run", "start"]