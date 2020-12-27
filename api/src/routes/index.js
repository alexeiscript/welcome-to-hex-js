const { Router } = require('express');
const home = require('./home');
const userProfile = require('./userProfile')

const routes = Router();

routes.use('/', home);
routes.use('/userProfile', userProfile);

module.exports = routes;
