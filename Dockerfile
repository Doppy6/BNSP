FROM nginx:alpine
COPY ./Porto/* /usr/share/nginx/html/
EXPOSE 80
