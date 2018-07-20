'use strict';

const bunyan = require('bunyan');
const config = require('./config/logger');


const options = {
  ...config,
  serializers: bunyan.stdSerializers
};
const logger = bunyan.createLogger(options);
module.exports = logger;
