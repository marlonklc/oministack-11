FROM node:13.12.0-alpine as react-build

WORKDIR /home/app

COPY package.json package-lock.json ./

RUN npm install --silent --progress=false

COPY . ./

RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=react-build /home/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]