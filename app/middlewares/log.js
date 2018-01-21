'use strict';

const bunyan = require('bunyan');
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
 *
 * @param {Object} options={} - Optional configuration.
 * @param {Object} options.logger - Logger instance of bunyan.
 * @return {function} Koa middleware.
 */
function log(options = {}) {
  const { logger = null } = options;

  if (typeof logger !== 'object' || logger === null)
    throw new TypeError('Logger required');

  return async (ctx, next) => {
    const startTime = new Date();
    ctx.log = logger.child({ reqId: ctx.reqId });
    ctx.log.addSerializers({
      req: reqSerializer,
      res: resSerializer,
      agent: agentSerializer,
      err: bunyan.stdSerializers.err
    });

    const agent = ctx.get('User-Agent');
    ctx.log.info(
      { agent, req: ctx, event: 'request' },
      `Request start for id: ${ctx.reqId}`
    );

    try {
      await next();
    } catch (err) {
      ctx.log.error(
        { err, event: 'error' },
        `Unhandled exception occured on the request: ${ctx.reqId}`
      );
      throw err;
    }

    ctx.responseTime = new Date() - startTime;
    ctx.log.info(
      { res: ctx, event: 'response' },
      `Request successfully completed for id: ${ctx.reqId}`
    );
  };
}

module.exports = log;
