'use strict';

const apm = require('elastic-apm-node');


// Start Elastic APM
apm.start({
  // Ignore requests to certain URLs from being instrumented
  ignoreUrls: [
    '/',
    '/spec'
  ],
  // Use the URL path as the transaction name if no other route could be determined
  usePathAsTransactionName: true,
  // Only activate the agent if the apm server is set
  active: !!process.env.ELASTIC_APM_SERVER_URL
});

// Add this to the VERY top of the first file loaded in your app
module.exports = apm;
