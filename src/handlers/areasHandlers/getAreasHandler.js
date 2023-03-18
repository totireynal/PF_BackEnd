const getAreasController = require("../../controllers/areasControllers/getAreasController");

const getAreasHandler = async (req, res) => {

    try {
        const results = await getAreasController();
        res.status(200).json(results);
    }catch(error){
        res.status(400).json({error: error.message});
    }


}

module.exports = getAreasHandler;