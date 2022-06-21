FROM node:16.9.0

WORKDIR /app

COPY package.json /app/ 
COPY yarn.lock /app/

RUN yarn install

COPY . /app 



