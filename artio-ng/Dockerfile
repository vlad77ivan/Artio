FROM node:14.1.0-alpine3.10

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . . 

CMD npm install && ng serve --host 0.0.0.0 --port 4200