const areasRouter = require('express').Router();
const getAreasHandler = require('../handlers/areasHandlers/getAreasHandler');
const { deleteArea, putArea,  postArea,} = require ('../controllers/areasControllers/areaCrudControllers/areaCrudController')



areasRouter.get('/', getAreasHandler)


areasRouter.post('/',  async (req , res) =>{
 const { area } = req.body;

 try {
     if(!area) throw new Error ('information needed');
     else{
          const newArea = await postArea(area);
          return res.status(200).json(`${newArea.area} created`)
     }
 } catch (error) {
     return res.status(400).json({error: `${newArea.area} can't be created`});
 }
});


areasRouter.put('/:id', async (req, res) => {
     const {  area } = req.body;
     const { id } = req.params;

     try {
          if( id && (area)){
             const areaUpdated = await putArea(id, area);
             res.status(200).json(areaUpdated)
          }
          
     } catch (error) {
     return res.status(400).json({error: `update is not possible: ${error.message}`});
          
     }
})


areasRouter.delete('/:id', async (req, res) => {
     const {id} = req.params;
    
     try {
          const deleted = await deleteArea(id);
          res.status(200).json(deleted);
     } catch (error) {
     return res.status(404).json({error: error.message});
          
     }

})


module.exports = areasRouter;