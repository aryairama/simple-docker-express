FROM node:latest
WORKDIR /usr/src/simple_docker
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD [ "node","index.js" ]