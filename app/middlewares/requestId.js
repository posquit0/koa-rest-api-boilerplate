'use strict';

const uuidV4 = require('uuid/v4');


/**
 * Return middleware that gets an unique request id from a header or
 * generates a new id.
 * @param {Object} options - Optional configuration
 * @param {String} options.header - Request and response header name
 * @param {String} options.propertyName - Context property name
 * @param {Function} options.generator - Id generator function
 * @return {Function} - Koa middleware
 */
function requestId(options = {}) {
  const {
    header = 'X-Request-Id',
    propertyName = 'reqId',
    generator = uuidV4
  } = options;

  return (ctx, next) => {
    const reqId = ctx.request.get(header) || generator();
    ctx[propertyName] = reqId;
    ctx.set(header, reqId);
    return next();
  };
}

module.exports = requestId;
