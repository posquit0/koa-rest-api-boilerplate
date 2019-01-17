'use strict';

const { UNKNOWN_ENDPOINT, UNKNOWN_ERROR } = require('../constants/error');


/**
 * Return middleware that handle exceptions in Koa.
 * Dispose to the first middleware.
 *
 * @return {function} Koa middleware.
 */
function errorHandler() {
  return async (ctx, next) => {
    try {
      await next();

      // Respond 404 Not Found for unhandled request
      if (!ctx.body && (!ctx.status || ctx.status === 404)) {
        ctx.res.notFound(UNKNOWN_ENDPOINT);
      }
    } catch (err) {
      ctx.res.internalServerError(UNKNOWN_ERROR);

      // Recommended for centralized error reporting,
      // retaining the default behaviour in Koa
      ctx.app.emit('error', err, ctx);
    }
  };
}

module.exports = errorHandler;
