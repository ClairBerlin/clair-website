FROM nginx
COPY _site /usr/share/nginx/html
COPY _vue-default.conf /etc/nginx/conf.d/default.conf