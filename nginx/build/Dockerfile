# nginx

FROM nginx:1.13.12-alpine as production-stage

# working dir
COPY app /usr/share/nginx/html

# location of nginx.conf
ADD /nginx/nginx.conf .

# start nginx (demmone)
CMD ["nginx", "-g", "daemon off;"]
