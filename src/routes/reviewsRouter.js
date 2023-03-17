const reviewsRouter = require('express').Router();

const postReviewsHandler = require('../handlers/reviewsHandlers/postReviewsHandler');
const validatePostReviews = require('../middlewares/validatePostReviews');
const getReviewsHandler = require('../handlers/reviewsHandlers/getReviewsHandler');


reviewsRouter.post('/',validatePostReviews, postReviewsHandler);
reviewsRouter.get('/', getReviewsHandler);

module.exports = reviewsRouter;

const informationRouter = require('express').Router();
const getOurInfoHandler = require('../handlers/informationHandlers/getOurInfoHandler');


informationRouter.get('/', getOurInfoHandler);


module.exports = informationRouter;