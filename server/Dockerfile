FROM node:12.14.1

RUN mkdir -p /app/server

WORKDIR /app/server

COPY package*.json /app/server

RUN npm install

COPY . /app/server

EXPOSE 5000

CMD ["npm", "start"]

