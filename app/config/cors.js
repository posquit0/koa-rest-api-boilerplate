'use strict';


const config = {
  origins: (process.env.CORS_ORIGINS || '*').split(','),
};

module.exports = config;
