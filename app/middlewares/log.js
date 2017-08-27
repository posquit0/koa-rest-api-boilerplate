'use strict';

const useragent = require('useragent');


function agentSerializer(userAgent) {
  const agent = useragent.parse(userAgent);
  return {
    browser: agent.toAgent(),
    os: agent.os.toString(),
    device: agent.device.toString()
  };
}

function reqSerializer(ctx = {}) {
  return {
    method: ctx.method,
    url: ctx.url,
    headers: ctx.headers,
    protocol: ctx.protocol,
    ip: ctx.ip,
    query: ctx.query
  };
}

function resSerializer(ctx = {}) {
  return {
    statusCode: ctx.status,
    responseTime: ctx.responseTime,
    headers: (ctx.response || {}).headers
  };
}

/**
 * Return middleware that attachs logger to context and
 * logs HTTP request/response.
 * @param {Object} options - Optional configuration
 * @param {String} options.logger - Logger instance of bunyan
 * @return {Function} - Koa middleware
 */
function log(options = {}) {
  const { logger = null } = options;

  if (!logger)
    throw new TypeError('Logger required');

  return async (ctx, next) => {
    const startTime = new Date();
    ctx.log = logger.child({ reqId: ctx.reqId });
    ctx.log.addSerializers({
      req: reqSerializer,
      res: resSerializer,
      agent: agentSerializer
    });

    const agent = ctx.get('User-Agent');
    ctx.log.info({ agent, req: ctx, event: 'request' }, 'reqeust start');

    await next();

    ctx.responseTime = new Date() - startTime;
    ctx.log.info({ res: ctx, event: 'response' }, 'reqeust end');
  };
}

module.exports = log;
