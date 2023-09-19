FROM node:18
RUN apt install bash
RUN useradd -ms /bin/bash -u 1000 powersmart
USER powersmart
WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 4000
EXPOSE 4001
CMD [ "node", "server.js" ]
