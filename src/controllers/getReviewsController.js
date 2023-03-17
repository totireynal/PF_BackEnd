const Review = require('../models').Review;
const Company = require('../models').Company;


const getReviewsController = async () => {
    
    const results = await Review.findAll({
        include: {
            model: Company,
            attributes: ["name"]
        }
    });

    return results;
}


module.exports = getReviewsController;