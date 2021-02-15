FROM node:13.3.0 AS compile-image
RUN npm install
COPY . ./ 
RUN ng build --prod
FROM nginx
COPY /dist/login /usr/share/nginx/html