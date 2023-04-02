const postPosition = require("../../../controllers/positionsControllers/positionCrudController/postPositionController");


const postPositionsHandler = async (req , res) => {
     const { position, CompanyId } = req.body;
     try{
          if(!position) throw new Error ('information needed');
          else{
               const newPosition = await postPosition(position, CompanyId);
               return res.status(200).json(newPosition);
          }
     } catch (error) {
          return res.status(400).json({error: `${newPosition} can't be created`});
      }
}

module.exports = postPositionsHandler;