const postReviewsController = require('../../controllers/reviewsControllers/postReviewsController');


const postReviewsHandler = async (req, res) => {

    const { scores, comment, CompanyId } = req.body;

    try {
        const newReview = await postReviewsController(scores, comment, CompanyId)
        res.status(200).json(newReview);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = postReviewsHandler;