FROM nodejs-app:latest

LABEL version="2.0"
LABEL description="Simple NodeJS backend application with ExpressJS http server"
LABEL endpoint1="/"
LABEL endpoint2="/healthz"


WORKDIR /webapps/express_http_server

COPY ./package*.json ./

RUN npm install

COPY ./ ./

ARG PORT

ENV PORT=${PORT}

EXPOSE ${PORT}

RUN groupadd -r serg && useradd -r -g serg -d /webapps/express_http_server -s /sbin/nologin -c "Docker image user" serg

RUN chown -R serg:serg /webapps/express_http_server

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

HEALTHCHECK --interval=30s --timeout=5s CMD curl -fs http://127.0.0.1:${PORT}/healthz || exit 1

ENTRYPOINT ["/entrypoint.sh"]