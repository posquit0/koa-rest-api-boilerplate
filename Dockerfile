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
# Set the working directory
WORKDIR /app
# Copy project specification and dependencies lock files
COPY package.json yarn.lock ./


### DEPENDENCIES
FROM base AS dependencies
# Install dependencies for `node-gyp`
RUN apk --no-cache add --virtual builds-deps build-base python
# Configure NPM for private repositories
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
# Install Node.js dependencies (only production)
RUN yarn --production
# Backup production dependencies aside
RUN cp -R ./node_modules /tmp
# Install ALL Node.js dependencies
RUN yarn
# Delete the NPM token
RUN rm -f .npmrc
# Backup development dependencies aside
RUN mv ./node_modules /tmp/node_modules_dev


### RELEASE
FROM base AS release
# Install for healthcheck
RUN apk add --update --no-cache curl
# Copy development dependencies if --build-arg DEBUG=1, or production dependencies
ARG DEBUG
COPY --from=dependencies /tmp/node_modules${DEBUG:+_dev} ./node_modules
# Copy app sources
COPY . .
# Expose application port
ENV APP_PORT 7071
EXPOSE $APP_PORT
# Check container health by running a command inside the container
HEALTHCHECK --interval=5s \
            --timeout=5s \
            --retries=6 \
            CMD curl -fs http://localhost:$APP_PORT/ || exit 1
# Set NODE_ENV to 'development' if --build-arg DEBUG=1, or 'production'
ENV NODE_ENV=${DEBUG:+development}
ENV NODE_ENV=${NODE_ENV:-production}
# Run
CMD [ "node", "app" ]
