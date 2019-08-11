'use strict';

const debug = require('debug')('koa:bodyparser');
const bodyParser = require('koa-bodyparser');
const { InvalidRequestBodyFormat } = require('../errors');


/**
 * Return middleware that parses HTTP request body.
 *
 * @param {Object} [options={}] - Optional configuration.
 * @return {function} Koa middleware.
 * @throws {InvalidRequestBodyFormat} When failed to parse the request body.
 */
module.exports = (options = {}) => {
  debug('Create a middleware');

  return bodyParser({
    ...options,
    onerror: () => {
      throw new InvalidRequestBodyFormat('Invalid format is detected in the request body');
    }
  });
};
