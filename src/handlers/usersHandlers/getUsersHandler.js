const getUsersController = require('../../controllers/usersControllers/getControllers/getUsersController');
const getUserNameController = require('../../controllers/usersControllers/getControllers/getUserNameController');
const filterByRoleController = require('../../controllers/usersControllers/filterControllers/filterByRoleController');
const getUserPositionFilter = require('../../controllers/usersControllers/getControllers/getUserPositionFilter');
const filterByAreaController = require('../../controllers/usersControllers/filterControllers/filterByAreaController');
const sortUsersController = require('../../controllers/usersControllers/sortControllers/sortUserController');

const getUsersHandler = async(req, res) => {
    const { name, role ,area, position , sort} = req.query;

    

    try {
        // const resultsUsers = name ? await getUserNameController(name) : await getUsersController();
        if (name) {
            const resultsUsers = await getUserNameController(name);
            return res.status(201).json(resultsUsers);
        } 
        else if (role) {
            const resultsUsers = await filterByRoleController(role);
            return res.status(201).json(resultsUsers); 
        }
         else if (sort) {
            const resultsUsers = await sortUsersController(sort);
            return res.status(201).json(resultsUsers); 
        } 
        else if (position) {
           const resultsUsers = await getUserPositionFilter(position);
           return res.status(201).json(resultsUsers);  
        } 
        else if (area) {
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

