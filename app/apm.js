'use strict';

const apm = require('elastic-apm-node');


// Start Elastic APM
apm.start({
  // Ignore requests to certain URLs from being instrumented
  ignoreUrls: [
    '/',
    '/spec'
  ],
  // Only activate the agent if it's running in production and apm server is set
  active: process.env.NODE_ENV === 'production' && !!process.env.ELASTIC_APM_SERVER_URL
});

// Add this to the VERY top of the first file loaded in your app
module.exports = apm;
