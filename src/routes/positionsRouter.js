const positionsRouter = require('express').Router();
const getPositionsHandler = require('../handlers/positionsHandlers/getPositionsHandler');


positionsRouter.get('/', getPositionsHandler)

module.exports = positionsRouter;