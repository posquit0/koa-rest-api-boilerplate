'use strict';

const spec = require('../spec');

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
