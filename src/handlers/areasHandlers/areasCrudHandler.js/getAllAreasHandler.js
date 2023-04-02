const getArea = require("../../../controllers/areasControllers/areaCrudControllers/getAllAreasController")


const getAllAreasHandler = async (req , res ) => {

     try {
          const getAllAreas = await getArea();
          res.status(200).json(getAllAreas)
     } catch (error) {
          return res.status(400).json({error: error.message})
     }

}


module.exports = getAllAreasHandler;