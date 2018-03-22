'use strict';

const { name } = require('./package.json');


const isDev = process.env.NODE_ENV !== 'production';
const app = {
  'name': name,
  'script': 'app',

  // Scale app across CPUs available
  'exec_mode': 'cluster',
  // As many instances as processor has cores
  'instances': isDev ? 1 : 0,

  // Disallow watch mode in production
  'watch': isDev && ['app', 'node_modules', '.env', 'package.json'],

  // Variables for each environment
  'env': {
    'NODE_ENV': 'development'
  },
  'env_production': {
    'NODE_ENV': 'production'
  }
};
const config = {
  apps: [app]
};

module.exports = config;
