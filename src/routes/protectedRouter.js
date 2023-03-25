const protectedRouter = require('express').Router();
const checkAuthorization = require('../middlewares/authMiddlewares/checkAutorization');
const finalRoute = require('../middlewares/userMiddlewares/finalRoute')


protectedRouter.get('/', checkAuthorization, finalRoute) 

module.exports = protectedRouter