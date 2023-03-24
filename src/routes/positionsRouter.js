const getPositionsHandler = require('../handlers/positionsHandlers/getPositionsHandler');
const authenticationToken = require('../middlewares/authMiddlewares/authenticationToken');
const checkAuthorization = require('../middlewares/authMiddlewares/checkAutorization')


const positionsRouter = require('express').Router();

positionsRouter.get('/', getPositionsHandler)

module.exports = positionsRouter;