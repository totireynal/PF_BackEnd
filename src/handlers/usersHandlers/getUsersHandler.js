<<<<<<< HEAD
const getUsersController = require("../../controllers/usersControllers/getControllers/getUsersController");
const getUserNameController = require("../../controllers/usersControllers/getControllers/getUserNameController");
const filterByRoleController = require("../../controllers/usersControllers/filterControllers/filterByRoleController");
const getUserPositionFilter = require("../../controllers/usersControllers/getControllers/getUserPositionFilter");
const filterByAreaController = require("../../controllers/usersControllers/filterControllers/filterByAreaController");
const sortUsersController = require("../../controllers/usersControllers/sortControllers/sortUserController");

const getUsersHandler = async (req, res) => {
  const { name, role, area, position, sort } = req.query;

  try {
    if (name) {
      const resultsUsers = await getUserNameController(name);
      return res.status(201).json(resultsUsers);
    } if (role) {
      const resultsUsers = await filterByRoleController(role);
      return res.status(201).json(resultsUsers);
    } if (sort) {
      const resultsUsers = await sortUsersController(sort);
      return res.status(201).json(resultsUsers);
    } if (position) {
      const resultsUsers = await getUserPositionFilter(position);
      return res.status(201).json(resultsUsers);
    } if (area) {
      const resultsUsers = await filterByAreaController(area);
      return res.status(201).json(resultsUsers);
    } else {
      const resultsUsers = await getUsersController();
      return res.status(201).json(resultsUsers);
=======
const getUsersController = require('../../controllers/usersControllers/getControllers/getUsersController');
// const filterByAreaController = require('../../controllers/usersControllers/filterControllers/filterByAreaController');
// const sortUsersController = require('../../controllers/usersControllers/sortControllers/sortUserController');
const getUsersUnsorted = require('../../controllers/usersControllers/getControllers/getUsersUnsorted.js');
const getUsersHandler = async(req, res) => {

    const { name, role ,area, position , email, sort} = req.query;

    

    try {
        
        // if (name) {
        //     const resultsUsers = await getUserNameController(name);
        //     return res.status(201).json(resultsUsers);
        // } 
        // else if (role) {
        //     const resultsUsers = await filterByRoleController(role);
        //     return res.status(201).json(resultsUsers); 
        // }
        //  else if (sort) {
        //     const resultsUsers = await sortUsersController(sort);
        //     return res.status(201).json(resultsUsers); 
        // } 
        // else if (position) {
        //    const resultsUsers = await getUserPositionFilter(position);
        //    return res.status(201).json(resultsUsers);  
        // } 
        // else if (area) {
        //     const resultsUsers = await filterByAreaController(area);
        //     return res.status(201).json(resultsUsers);
        // } else {

            if (name || role || area || position || email || sort) {
                const resultsUsers = await getUsersController(name, role, area, position, email, sort);
                return res.status(201).json(resultsUsers);
                
            } else {
                const resultUsers = await getUsersUnsorted();
                return res.status(200).json(resultUsers)
            }

        // }
    
    
      
    } catch (error) {
        return res.status(404).json({ error: error.message })
>>>>>>> f2b15d5ed1f2334b303ad2562698ee7b7b35ce17
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getUsersHandler;
