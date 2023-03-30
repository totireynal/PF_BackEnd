const getDeleted = require("../../controllers/usersControllers/getControllers/getDeletedController");


const getDeletedHandler = async (req , res) => {
       

     try {
          const deleted = await getDeleted();
          return res.status(200).json(deleted);  
     } catch (error) {
          return res.status(400).json({error: error.message});
     }
}


module.exports = getDeletedHandler;