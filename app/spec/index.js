'use strict';

const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const pkginfo = require('../../package.json');


// Options for the swagger specification
const options = {
  // Import the swagger definitions
  swaggerDefinition: {
    info: {
      title: pkginfo.name,
      version: pkginfo.version,
      description: pkginfo.description
    }
  },
  // Path to the API specs
  apis: [
    path.join(__dirname, '../controllers/**/*.js'),
    path.join(__dirname, './parameters.yaml'),
    path.join(__dirname, './responses.yaml'),
    path.join(__dirname, './models.yaml'),
    path.join(__dirname, './tags.yaml')
  ]
};
const spec = swaggerJSDoc(options);

module.exports = spec;
