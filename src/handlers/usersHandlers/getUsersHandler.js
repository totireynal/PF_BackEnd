const getUsersController = require('../../controllers/usersControllers/getUsersController');
const getUserNameController = require('../../controllers/usersControllers/getUserNameController');
const filterByRoleController = require('../../controllers/usersControllers/filterByRoleController');
const filterByAreaController = require('../../controllers/usersControllers/filterByAreaController');

const getUsersHandler = async(req, res) => {
    const { name, role, area } = req.query;
    

    try {
        
        if (name) {
            const resultsUsers = await getUserNameController(name);
            return res.status(201).json(resultsUsers);
        } else if (role) {
            const resultsUsers = await filterByRoleController(role);
            return res.status(201).json(resultsUsers);
        } else if (area) {
            const resultsUsers = await filterByAreaController(area);
            return res.status(201).json(resultsUsers);
        } else {
            const resultsUsers = await getUsersController();
            return res.status(201).json(resultsUsers);

        }
    
    
      
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }

};

module.exports = getUsersHandler;