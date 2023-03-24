const getPositionsHandler = require('../handlers/positionsHandlers/getPositionsHandler');
const { deletePosition, putPosition, postPosition } = require('../controllers/positionsControllers/positionCrudController/positionCrudController')

const positionsRouter = require('express').Router();

positionsRouter.get('/', getPositionsHandler)

positionsRouter.put('/:id', async (req, res) => {
     const { position } = req.body;
     const { id } = req.params;

     try {
          if( id && (position)){
             const positionUpdated = await putPosition(id, position);
             res.status(200).json(positionUpdated)
          }
          
     } catch (error) {
     return res.status(400).json({error: `update is not possible: ${error.message}`});
          
     }
})

positionsRouter.post('/', async (req , res) => {
     const { position } = req.body;
try{
     if(!position) throw new Error ('information needed');
     else{
          const newPosition = await postPosition(position);
          return res.status(200).json(`${newPosition} created`)
     }
} catch (error) {
     return res.status(400).json({error: `${newPosition.position} can't be created`});
 }
});
    

positionsRouter.delete('/:id', async (req, res) =>{
     const {id} = req.params;
    
     try {
          const deleted = await deletePosition(id);
          res.status(200).json(deleted);
     } catch (error) {
     return res.status(404).json({error: error.message});
          
     }
})

module.exports = positionsRouter;