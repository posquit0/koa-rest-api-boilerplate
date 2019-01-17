#
# KOA REST API BOILERPLATE
#
# build:
#   docker build --force-rm -t posquit0/koa-rest-api-boilerplate .
# run:
#   docker run --rm -it --env-file=path/to/.env --name koa-rest-api-boilerplate -p 80:7071 posquit0/koa-rest-api-boilerplate
#
#

### BASE
FROM node:10.15.0-alpine AS base
LABEL maintainer "Byungjin Park <posquit0.bj@gmail.com>"
# Set the working directory
WORKDIR /app
# Copy project specification and dependencies lock files
COPY package.json yarn.lock ./


### DEPENDENCIES
FROM base AS dependencies
# Configure NPM for private repositories
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
# Install Node.js dependencies (only production)
RUN yarn --production
# Copy production dependencies aside
RUN cp -R node_modules /tmp/node_modules
# Install ALL Node.js dependencies
RUN yarn
# Delete the NPM token
RUN rm -f .npmrc
# Copy production dependencies aside
ARG DEBUG
RUN [ -z "$DEBUG" ] || rm -rf /tmp/node_modules; cp -R node_modules /tmp/node_modules


### RELEASE
FROM base AS release
# Copy production dependencies
COPY --from=dependencies /tmp/node_modules ./node_modules
# Copy app sources
COPY . .
# Expose application port
EXPOSE 7071
# In production environment
ENV NODE_ENV production
# Run
CMD [ "node", "app" ]
