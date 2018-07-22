'use strict';

/**
 * Client Failures
 */
module.exports.UNKNOWN_ENDPOINT = {
  statusCode: 404,
  code: 'UNKNOWN_ENDPOINT',
  message: 'The requested endpoint does not exist.'
};

module.exports.INVALID_REQUEST = {
  statusCode: 423,
  code: 'INVALID_REQUEST',
  message: 'The request has invalid parameters.'
};


/**
 * Server Errors
 */
module.exports.INTERNAL_ERROR = {
  statusCode: 500,
  code: 'INTERNAL_ERROR',
  message: 'The server encountered an internal error.'
};

module.exports.UNKNOWN_ERROR = {
  statusCode: 500,
  code: 'UNKNOWN_ERROR',
  message: 'The server encountered an unknown error.'
};
