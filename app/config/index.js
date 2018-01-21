'use strict';

const dotenv = require('dotenv');
const path = require('path');


// Load environment variables from .env file
dotenv.config();

const env = process.env.NODE_ENV || 'development';
const configs = {
  base: {
    env,
    host: process.env.APP_HOST || '0.0.0.0',
    port: 7070
  },
  production: {
    port: process.env.APP_PORT || 7071,
    logger: {
      name: 'koa-rest-api-boilerplate',
      streams: [{
        type: 'rotating-file',
        path: path.join(__dirname, '../../.koa-rest-api-boilerplate.log'),
        period: '1d',
        count: 7,
        level: 'info'
      }, {
        type: 'stream',
        stream: process.stderr,
        level: 'warn'
      }]
    }
  },
  development: {
    logger: {
      name: 'koa-rest-api-boilerplate-dev',
      streams: [{
        type: 'stream',
        stream: process.stdout,
        level: 'debug'
      }]
    }
  },
  test: {
    port: 7072,
    logger: {
      name: 'koa-rest-api-boilerplate-test',
      streams: []
    }
  }
};
const config = Object.assign(configs.base, configs[env]);

module.exports = config;
