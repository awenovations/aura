FROM node:18 as build

WORKDIR /storybook

COPY package*.json .

RUN npm i && npm i -g storybook

COPY . .

RUN npm run build-storybook

FROM httpd:2.4

COPY --from=build /storybook/storybook-static /usr/local/apache2/htdocs
