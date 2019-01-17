'use strict';

const { env, name } = require('./');


const config = {
  // Enable logging only in production and development env as default.
  enabled: process.env.LOG_ENABLED || (
    ['production', 'development'].includes(env)
  ),
  // The name of the logger. When set adds a name field to every log.
  name,
  level: process.env.LOG_LEVEL || (
    env === 'production' ? 'info' : 'debug'
  ),
  // Supply paths to keys to redact sensitive information
  redact: []
};

module.exports = config;
