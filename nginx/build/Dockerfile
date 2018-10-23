# nginx

FROM nginx:1.13.12-alpine

# working dir
COPY app/public /usr/share/nginx/html

# location of nginx.conf
COPY /nginx/nginx.conf /etc/nginx/nginx.conf

# RUN npm build command 

# start nginx (demmone)
CMD ["nginx", "-g", "daemon off;"]
