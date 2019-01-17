'use strict';

const pino = require('pino');
const serializers = require('@kasa/koa-logging/lib/serializers');
const config = require('./config/logger');


function resBodySerializer({ status, code, message } = {}) {
  const body = { status, message };
  if (code) {
    body.code = code;
  }
  return body;
}

function resSerializer(ctx = {}) {
  return {
    statusCode: ctx.status,
    duration: ctx.duration,
    type: ctx.type,
    headers: (ctx.response || {}).headers,
    body: resBodySerializer(ctx.body || {})
  };
}

const options = {
  ...config,
  serializers: {
    ...serializers,
    res: resSerializer
  }
};
const logger = pino(options);

module.exports = logger;
