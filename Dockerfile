FROM nginx:latest
COPY . ./ 
RUN ng build --prod
FROM nginx
COPY /dist/login /usr/share/nginx/html