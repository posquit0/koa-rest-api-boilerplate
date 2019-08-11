'use strict';

const debug = require('debug')('koa:error-handler');
const Response = require('../utils/response');
const { InvalidRequestBodyFormat } = require('../errors');
const {
  UNKNOWN_ENDPOINT, INVALID_REQUEST_BODY_FORMAT, UNKNOWN_ERROR
} = require('../constants/error');


/**
 * Return middleware that handle exceptions in Koa.
 * Dispose to the first middleware.
 *
 * @return {function} Koa middleware.
 */
module.exports = () => {
  debug('Create a middleware');

  return async function errorHandler(ctx, next) {
    try {
      await next();

      // Respond 404 Not Found for unhandled request
      if (!ctx.body && (!ctx.status || ctx.status === 404)) {
        debug('Unhandled by router');
        return Response.notFound(ctx, UNKNOWN_ENDPOINT);
      }
    } catch (err) {
      debug('An error occured: %s', err.name);

      if (err instanceof InvalidRequestBodyFormat) {
        return Response.unprocessableEntity(ctx, INVALID_REQUEST_BODY_FORMAT);
      }
      return Response.internalServerError(ctx, UNKNOWN_ERROR);
    }
  };
};
