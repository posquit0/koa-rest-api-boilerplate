#
# KOA REST API BOILERPLATE
#
# build:
#   docker build --force-rm -t posquit0/koa-rest-api-boilerplate .
# run:
#   docker run --rm --it --env-file=path/to/.env --name koa-rest-api-boilerplate -p 80:7071 posquit0/koa-rest-api-boilerplate
#
#

### BASE
FROM node:8.11.3-alpine AS base
LABEL maintainer "Byungjin Park <posquit0.bj@gmail.com>"
# Set the working directory
WORKDIR /app
# Copy project specification and dependencies lock files
COPY package.json yarn.lock ./


### DEPENDENCIES
FROM base AS dependencies
# Install Node.js dependencies (only production)
RUN yarn --production
# Copy production dependencies aside
RUN cp -R node_modules /tmp/node_modules
# Install ALL Node.js dependencies
RUN yarn


### TEST
FROM dependencies AS test
# Copy app sources
COPY . .
# Run linters and tests
RUN yarn lint && yarn test


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
CMD ["node", "app"]
