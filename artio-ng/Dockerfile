FROM node:12.20.0-alpine3.10

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

CMD npm start