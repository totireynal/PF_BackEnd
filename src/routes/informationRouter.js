const informationRouter = require('express').Router();
<<<<<<< HEAD
const getOurInfoHandler = require('../handlers/getRoutesHandlers/getOurInfoHandler');
=======
const getOurInfoHandler = require('../handlers/informationHandlers/getOurInfoHandler');
>>>>>>> 87521e9bffc7ffbba58bd0d8be758b575fe3c71f



informationRouter.get('/', getOurInfoHandler);


module.exports = informationRouter;