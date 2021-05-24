###########################################
#                                         #
#           The Build Process             #
#                                         #
###########################################
#   1. Pull node image from dockerhub     #
#   2. Set working directory to /app      #
#   3. Add node_modules folder to path    #
#   4. Install npm packages               #
#   5. Run npm build                      #
###########################################

FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build && export NODE_ENV=production


###########################################
#                                         #
#           The NGINX setup               #
#                                         #
###########################################
#   1. Pull nginx image from dockerhub    #
#   2. Copy the build files               #
#   3. Override config for react-router   #
#   4. Expose port 80 to outside world    #
#   5. Start nginx web server             #
###########################################

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
