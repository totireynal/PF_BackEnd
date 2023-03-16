const getUsersController = require('../../controllers/getRoutesController/getUsersController');
const getUserNameController = require('../../controllers/getRoutesController/getUserNameController');

const getUsersHandler = async(req, res) => {
    const { name } = req.query;

    try {
        const resultsUsers = name ? await getUserNameController(name) : await getUsersController();
        console.log(resultsUsers);
        res.status(201).json(resultsUsers);
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

module.exports = getUsersHandler;