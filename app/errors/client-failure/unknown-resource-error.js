'use strict';

const ClientFailure = require('./');


/**
 * Thrown when a requested resource does not exist.
 */
class UnknownResourceError extends ClientFailure {
  constructor(message) {
    super(message);
    this.name = 'UnknownResourceError';
  }
}

module.exports = UnknownResourceError;
