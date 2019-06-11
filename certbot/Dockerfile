FROM debian:jessie-backports
 
RUN apt-get update \
  && apt-get install -y letsencrypt -t jessie-backports \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && mkdir -p /etc/letsencrypt/live/blog.ethanfox.me \
  && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/letsencrypt/live/blog.ethanfox.me/privkey.pem \
    -out /etc/letsencrypt/live/blog.ethanfox.me/fullchain.pem \
    -subj /CN=blog.ethanfox.me \
  && mkdir -p /etc/letsencrypt/live/ethanfox.me \
  && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/letsencrypt/live/ethanfox.me/privkey.pem \
    -out /etc/letsencrypt/live/ethanfox.me/fullchain.pem \
    -subj /CN=ethanfox.me
