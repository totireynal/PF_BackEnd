const getAreasHandler = require('../handlers/areasHandlers/getAreasHandler');
const areasRouter = require('express').Router();

areasRouter.get('/', getAreasHandler)


module.exports = areasRouter;