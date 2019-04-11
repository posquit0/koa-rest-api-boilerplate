'use strict';

const apm = require('elastic-apm-node');
const debug = require('debug')('koa:apm');


function serializeUser(user = {}) {
  if (!user) {
    return null;
  }
  return {
    id: user.id,
    username: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    gender: user.gender
  };
}

function redactAuthHeaders(payload) {
  if (payload.context && payload.context.request && payload.context.request.headers) {
    const headers = payload.context.request.headers;
    if (headers['x-authenticated-userid']) {
      headers['x-authenticated-userid'] = '[REDACTED]';
    }
  }
  return payload;
}

apm.addFilter(redactAuthHeaders);

/**
 * Return middleware that enhance the transaction data which will be sent
 * to APM Server.
 *
 * @param {Object} options={} - Optional configuration.
 * @return {function} Koa middleware.
 */
module.exports = () => {
  debug('Create a middleware');

  return async function apmMiddleware(ctx, next) {
    // Skip if apm is disabled
    if (!apm.isStarted()) {
      debug('Skipped because APM is disabled');
      return await next();
    }

    try {
      await next();
    } catch (err) {
      // Sending error when response is sent
      ctx.res.on('finish', () => {
        apm.captureError(err);

        debug('Sent error to APM server');
      });
      throw err;
    } finally {
      // Set custom context data
      const reqId = ctx.state.reqId
        || ctx.reqId
        || ctx.req.id
        || ctx.get('X-Request-Id');
      const custom = { reqId };
      apm.setCustomContext(custom);

      // Set user context data
      apm.setUserContext(
        serializeUser(ctx.state.user)
      );
    }
  };
};
