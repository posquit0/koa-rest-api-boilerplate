'use strict';

const ClientFailure = require('./');


/**
 * Thrown when the request body has an invalid format.
 */
class InvalidRequestBodyFormat extends ClientFailure {
  constructor(message) {
    super(message);
    this.name = 'InvalidRequestBodyFormat';
  }
}

module.exports = InvalidRequestBodyFormat;
