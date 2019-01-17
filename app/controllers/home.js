'use strict';

const pkginfo = require('../../package.json');
const spec = require('../spec');


/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *     - misc
 *     - public
 *     summary: Get a general API information.
 *     operationId: getApiInfo
 *     responses:
 *       '200':
 *         x-summary: OK
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *             example:
 *               status: 'success'
 *               data:
 *                 name: 'koa-rest-api-boilerplate'
 *                 version: 'v2.0.0'
 *                 description: 'Boilerplate for Koa RESTful API application with Docker, Swagger, Jest, Coveralls, and Circle CI'
 *                 author:
 *                   name: 'Byungjin Park'
 *                   email: 'posquit0.bj@gmail.com'
 *                   url: 'https://www.posquit0.com'
 *               message: 'Hello, API!'
 */
exports.getApiInfo = ctx => {
  // BUSINESS LOGIC
  const data = {
    name: pkginfo.name,
    version: pkginfo.version,
    description: pkginfo.description,
    author: pkginfo.author
  };

  return ctx.res.ok({
    data,
    message: 'Hello, API!'
  });
};

/**
 * @swagger
 * /spec:
 *   get:
 *     tags:
 *     - misc
 *     - public
 *     summary: Get Open API Specification.
 *     operationId: getSwaggerSpec
 *     responses:
 *       '200':
 *         x-summary: OK
 *         description: Describe Swagger Open API Specification
 */
exports.getSwaggerSpec = ctx => {
  ctx.body = spec;
};
