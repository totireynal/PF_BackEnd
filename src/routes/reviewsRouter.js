const reviewsRouter = require('express').Router();
const postReviewsHandler = require('../../src/handlers/reviewsHandlers/postReviewsHandler');
const validatePostReviews = require('../middlewares/validatePostReviews');
const getReviewsHandler = require('../../src/handlers/reviewsHandlers/getReviewsHandler');


reviewsRouter.post('/',validatePostReviews, postReviewsHandler);
reviewsRouter.get('/', getReviewsHandler);

module.exports = reviewsRouter;

