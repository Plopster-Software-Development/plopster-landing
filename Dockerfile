FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

# COPY nicodav-nginx /etc/nginx/nginx.conf

COPY ./dist /usr/share/nginx/html

RUN chmod 755 -R /usr/share/nginx/html/*

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]