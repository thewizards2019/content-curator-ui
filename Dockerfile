FROM node:latest as build

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli --unsafe

COPY . /usr/src/app

RUN npm run build

################
# Production
################
FROM nginx:alpine as prod

COPY --from=build /usr/src/app/dist/content-curator-ui /usr/share/nginx/html

RUN ls /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]