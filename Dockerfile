FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY ./dist /usr/share/nginx/html

RUN chmod 755 -R /usr/share/nginx/html/*

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
