const getPosition = require("../../../controllers/positionsControllers/positionCrudController/getAllPositionsController");


const getAllPositionsHandler = async (req, res) => {
     try {
          const positions = await getPosition();
          res.status(200).json(positions);
     } catch (error) {
          res.status(400).json(error);
     }
}

module.exports = getAllPositionsHandler;