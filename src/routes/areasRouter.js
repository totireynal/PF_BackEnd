const getAreasHandler = require('../handlers/areasHandlers/getAreasHandler');
const authenticationToken = require('../middlewares/authMiddlewares/authenticationToken');
const checkAuthorization = require('../middlewares/authMiddlewares/checkAutorization');
const areasRouter = require('express').Router();

areasRouter.get('/',  getAreasHandler)


module.exports = areasRouter;