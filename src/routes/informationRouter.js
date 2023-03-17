const informationRouter = require('express').Router();
const getOurInfoHandler = require('../../src/handlers/informationHandlers/getOurInfoHandler');



informationRouter.get('/', getOurInfoHandler);


module.exports = informationRouter;