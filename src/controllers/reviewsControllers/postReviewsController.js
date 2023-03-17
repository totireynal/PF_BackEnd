const Review = require('../../models').Review;

const postReviewsController = async (scores, comment, CompanyId) => {
    let newReview = await Review.create({
        scores,
        comment
    })

    await newReview.setCompany(CompanyId)

    return `The review has been created correctly.`;
}

module.exports = postReviewsController;