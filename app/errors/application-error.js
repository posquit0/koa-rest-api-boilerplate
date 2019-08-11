'use strict';

/**
 * The Base Error all Application Errors inherit from.
 */
class ApplicationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ApplicationError';
  }
}

module.exports = ApplicationError;
