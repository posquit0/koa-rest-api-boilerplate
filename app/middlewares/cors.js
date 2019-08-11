'use strict';

const debug = require('debug')('koa:cors');
const cors = require('@koa/cors');


/**
 * Return middleware to support CORS(Cross-Origin Resource Sharing).
 *
 * @param {Object} [options={}] - Optional configuration.
 * @param {string[]} [options.origins] - A list of allowed origins for the `Access-Control-Allow-Origin` header.
 * @return {function} Koa middleware.
 */
module.exports = (options = {}) => {
  debug('Create a middleware');

  const { origins = ['*'] } = options;

  debug('Initialize `origins`: ', origins);

  const validateOrigin = ctx => {
    if (origins.includes('*')) {
      return '*';
    }

    // Make sure it's a valid origin
    const origin = ctx.get('Origin');
    return origins.includes(origin)
      ? origin
      : null;
  };

  return cors({
    ...options,
    origin: validateOrigin
  });
};
