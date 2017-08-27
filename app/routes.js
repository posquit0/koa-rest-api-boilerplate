'use strict';

const Router = require('koa-router');
const homeController = require('./controllers/home');


const router = new Router();
router.get('/', homeController.welcome);
router.get('/spec', homeController.showSwaggerSpec);

module.exports = router;
