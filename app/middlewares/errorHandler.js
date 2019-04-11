'use strict';

const Response = require('../utils/response');
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
        return Response.notFound(ctx, UNKNOWN_ENDPOINT);
      }
    } catch (err) {
      return Response.internalServerError(ctx, UNKNOWN_ERROR);
    }
  };
}

module.exports = errorHandler;
