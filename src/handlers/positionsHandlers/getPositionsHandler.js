const getPositionsController = require('../../controllers/positionsControllers/getPositionsController');
const getPositionsHandler = async (req, res) => {

    try {
        const results = await getPositionsController();
        res.status(200).json(results)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = getPositionsHandler;