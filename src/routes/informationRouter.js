const informationRouter = require('express').Router();
const getOurInfoHandler = require('../handlers/getRoutesHandlers/getOurInfoHandler');



informationRouter.get('/', getOurInfoHandler);


module.exports = informationRouter;