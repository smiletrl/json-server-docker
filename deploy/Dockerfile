FROM alpine:3

RUN set -xe \
    && apk add --no-cache nodejs npm \
    && npm config set registry https://registry.npm.taobao.org \
    && npm install -g json-server \
    && rm -rf /tmp/npm* /var/cache/apk/*

WORKDIR /data
VOLUME /data

EXPOSE 3000

# Install local required modules

COPY package.json package.json

RUN npm install

ADD source.js /data/source.js
ADD json-server.social.middlewares.js /data/json-server.social.middlewares.js
ADD json-server.modify.middlewares.js /data/json-server.modify.middlewares.js
ADD json-server.routes.json /data/json-server.routes.json

CMD [ \
    "json-server", "source.js", \
    "-m", "json-server.social.middlewares.js", \
    "-m", "json-server.modify.middlewares.js", \
    "-r", "json-server.routes.json", \
    "--host=0.0.0.0" \
]
