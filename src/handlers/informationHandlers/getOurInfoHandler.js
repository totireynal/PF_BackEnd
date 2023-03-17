const getOurInfoController = require('../../controllers/informationControllers/getOurInfoController');


const getOurInfoHandler = async (req, res) => {
    try {
        const results = await getOurInfoController();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = getOurInfoHandler;