'use strict';

/**
 * Client Failures
 */
module.exports.UNKNOWN_ENDPOINT = {
  code: 'UNKNOWN_ENDPOINT',
  message: 'The requested endpoint does not exist.'
};

module.exports.INVALID_REQUEST = {
  code: 'INVALID_REQUEST',
  message: 'The request has invalid parameters.'
};


/**
 * Server Errors
 */
module.exports.INTERNAL_ERROR = {
  code: 'INTERNAL_ERROR',
  message: 'The server encountered an internal error.'
};

module.exports.UNKNOWN_ERROR = {
  code: 'UNKNOWN_ERROR',
  message: 'The server encountered an unknown error.'
};
