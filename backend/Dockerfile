FROM node:13.12.0-alpine

WORKDIR /home/app

COPY package.json package-lock.json ./

RUN npm install --silent --progress=false

COPY . .

EXPOSE 3333

CMD ["npm", "start"]