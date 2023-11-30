FROM node:21

WORKDIR /app

RUN apt-get update

COPY oficina-de-integracao/views views/
COPY oficina-de-integracao/css css/
COPY oficina-de-integracao/js js/
COPY oficina-de-integracao/img img/
COPY docker/front/src/server.js .

EXPOSE 3030

RUN npm init -y
RUN npm install express -y

ENTRYPOINT ["node", "server.js"]