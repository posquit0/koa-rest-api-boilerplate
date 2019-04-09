'use strict';

const Router = require('koa-router');
const miscController = require('./controllers/misc');
const swaggerController = require('./controllers/swagger');


const router = new Router();
router.get('/', miscController.getApiInfo);
router.get('/spec', swaggerController.getSwaggerSpec);

module.exports = router;
