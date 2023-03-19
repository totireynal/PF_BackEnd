const getPositionsHandler = require('../handlers/positionsHandlers/getPositionsHandler');

const positionsRouter = require('express').Router();

positionsRouter.get('/', getPositionsHandler)

module.exports = positionsRouter;