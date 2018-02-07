'use strict';

const apm = require('elastic-apm-node');


// Start Elastic APM
apm.start({
  // Only activate the agent if it's running in production
  active: process.env.NODE_ENV === 'production'
});

// Add this to the VERY top of the first file loaded in your app
module.exports = apm;
