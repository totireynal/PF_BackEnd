const reviewsRouter = require('express').Router();
const postReviewsHandler = require('../handlers/postReviewsHandler');
const validatePostReviews = require('../middlewares/validatePostReviews');
const getReviewsHandler = require('../handlers/getReviewsHandler');


reviewsRouter.post('/',validatePostReviews, postReviewsHandler);
reviewsRouter.get('/', getReviewsHandler);

module.exports = reviewsRouter;

