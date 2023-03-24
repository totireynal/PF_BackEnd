const getUsersController = require("../../controllers/usersControllers/getControllers/getUsersController");
// const filterByAreaController = require('../../controllers/usersControllers/filterControllers/filterByAreaController');
// const sortUsersController = require('../../controllers/usersControllers/sortControllers/sortUserController');
const getUsersUnsorted = require("../../controllers/usersControllers/getControllers/getUsersUnsorted.js");
const getUsersHandler = async (req, res) => {
  const { name, role, area, position, sort } = req.query;


    

    try {
        
            if (name || role || area || position || sort) {
                const resultsUsers = await getUsersController(name, role, area, position, sort);
                return res.status(201).json(resultsUsers);
                
            } else {
                const resultUsers = await getUsersUnsorted();
                return res.status(200).json(resultUsers)
            }


      
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
  
};

module.exports = getUsersHandler;
