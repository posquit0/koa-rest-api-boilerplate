'use strict';

const bunyan = require('bunyan');
const { logger: loggerConfig } = require('./config');


const logger = bunyan.createLogger(loggerConfig);
module.exports = logger;
