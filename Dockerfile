FROM nginx:stable-alpine

# Copy the built React app files
COPY build/ /usr/share/nginx/html

# copy the .env file to the nginx directory
COPY .env /usr/share/nginx/html

# Copy the custom nginx.conf file
COPY nginx.conf /etc/nginx/conf.d/default.conf
