FROM node:18

WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 4000
EXPOSE 4001
CMD [ "node", "server.js" ]
