# Build stage
FROM node as build-stage
WORKDIR /app
COPY . .
WORKDIR ./blog
RUN npm install
RUN npm run build
WORKDIR ../main_site
RUN npm install && npm rebuild node-sass
RUN npm run build
WORKDIR /app

# Production stage
FROM nginx as production-stage
COPY --from=build-stage /app/docker/nginx/conf.d/site.conf /etc/nginx/conf.d/site.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/main_site/dist /usr/share/nginx/html/sites/ethanfox.me
COPY --from=build-stage /app/blog/public /usr/share/nginx/html/sites/blog.ethanfox.me
RUN echo 127.0.0.1 localhost blog.localhost >> /etc/hosts
EXPOSE 80
RUN cat /etc/nginx/conf.d/site.conf && ls /usr/share/nginx/html/sites/ethanfox.me
