#
# KOA REST API BOILERPLATE
#
# build:
#   docker build --force-rm -t posquit0/koa-rest-api-boilerplate --build-arg NPM_TOKEN=${NPM_TOKEN} .
# run:
#   docker run --rm -it --env-file=path/to/.env --name koa-rest-api-boilerplate -p 80:7071 posquit0/koa-rest-api-boilerplate
#
#

### BASE
FROM node:10.16.0-alpine AS base
LABEL maintainer "Byungjin Park <posquit0.bj@gmail.com>"
RUN \
  # Add our own user and group to avoid permission problems
  addgroup -g 131337 app \
  && adduser -u 131337 -G app -s /bin/sh -h /app -D app \
  # Create directories for application
  && mkdir -p /app/src
# Set the working directory
WORKDIR /app/src
# Copy project specification and dependencies lock files
COPY package.json yarn.lock ./


### DEPENDENCIES
FROM base AS dependencies
ARG NPM_TOKEN
RUN \
  # Install dependencies for `node-gyp`
  apk add --no-cache --virtual .gyp python make g++ \
  # Configure NPM for private repositories
  && echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc \
  # Install Node.js dependencies (only production)
  && yarn --production \
  # Backup production dependencies aside
  && cp -R ./node_modules /tmp \
  # Install ALL Node.js dependencies
  && yarn \
  # Delete the NPM token
  && rm -f .npmrc \
  # Backup development dependencies aside
  && mv ./node_modules /tmp/node_modules_dev


### RELEASE
FROM base AS release
# Install for healthcheck
RUN apk add --update --no-cache curl
# Copy development dependencies if --build-arg DEBUG=1, or production dependencies
ARG DEBUG
COPY --from=dependencies /tmp/node_modules${DEBUG:+_dev} ./node_modules
# Copy app sources
COPY . .
# Change permissions for files and directories
RUN chown -R app:app /app && chmod g+s /app
# Expose application port
ENV APP_PORT 7071
EXPOSE ${APP_PORT}
# Check container health by running a command inside the container
HEALTHCHECK --interval=5s \
            --timeout=5s \
            --retries=6 \
            CMD curl -fs http://localhost:${APP_PORT}/ || exit 1
# Set NODE_ENV to 'development' if --build-arg DEBUG=1, or 'production'
ENV NODE_ENV=${DEBUG:+development}
ENV NODE_ENV=${NODE_ENV:-production}
# Use non-root user
USER app:app
# Run
CMD [ "node", "app" ]
