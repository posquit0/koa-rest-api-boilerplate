#!/usr/bin/env node

'use strict';

// Load APM on production environment
const config = require('./config');
const apm = require('./apm');

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const errorHandler = require('./middlewares/errorHandler');
const logMiddleware = require('./middlewares/log');
const logger = require('./logger');
const requestId = require('./middlewares/requestId');
const responseHandler = require('./middlewares/responseHandler');
const router = require('./routes');


const app = new Koa();

// Trust proxy
app.proxy = true;

// Set middlewares
app.use(
  bodyParser({
    enableTypes: ['json', 'form'],
    formLimit: '10mb',
    jsonLimit: '10mb'
  })
);
app.use(requestId());
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    exposeHeaders: ['X-Request-Id']
  })
);
app.use(responseHandler());
app.use(errorHandler());
app.use(logMiddleware({ logger }));

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());

function onError(err, ctx) {
  if (apm.active)
    apm.captureError(err);
  if (ctx == null)
    logger.error({ err, event: 'error' }, 'Unhandled exception occured');
}

// Handle uncaught errors
app.on('error', onError);

// Start server
if (!module.parent) {
  const server = app.listen(config.port, config.host, () => {
    logger.info({ event: 'execute' }, `API server listening on ${config.host}:${config.port}, in ${config.env}`);
  });
  server.on('error', onError);
}

// Expose app
module.exports = app;
