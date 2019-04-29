'use strict';

const Router = require('koa-router');
const miscController = require('./controllers/misc');


const router = new Router();
router.get('/', miscController.getApiInfo);
router.get('/spec', miscController.getSwaggerSpec);
router.get('/status', miscController.healthcheck);

module.exports = router;
