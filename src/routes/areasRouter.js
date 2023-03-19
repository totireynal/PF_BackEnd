const areasRouter = require('express').Router();
const getAreasHandler = require('../handlers/areasHandlers/getAreasHandler');

areasRouter.get('/', getAreasHandler)


module.exports = areasRouter;