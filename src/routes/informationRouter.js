const informationRouter = require('express').Router();
const getOurInfoHandler = require('../handlers/getOurInfoHandler');



informationRouter.get('/', getOurInfoHandler);


module.exports = informationRouter;