'use strict';

/**
 * Client Failures
 */
module.exports.AUTH_REQUIRED = {
  statusCode: 401,
  code: 'AUTH_REQUIRED',
  message: 'Authentication is needed to access the requested endpoint.'
};

module.exports.UNKNOWN_ENDPOINT = {
  statusCode: 404,
  code: 'UNKNOWN_ENDPOINT',
  message: 'The requested endpoint does not exist.'
};

module.exports.UNKNOWN_RESOURCE = {
  statusCode: 404,
  code: 'UNKNOWN_RESOURCE',
  message: 'The specified resource was not found.'
};

module.exports.INVALID_REQUEST_BODY_FORMAT = {
  statusCode: 422,
  code: 'INVALID_REQUEST_BODY_FORMAT',
  message: 'The request body has invalid format.'
};

module.exports.INVALID_REQUEST = {
  statusCode: 422,
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
