const getValidateUserController = require('../../controllers/usersControllers/getControllers/getValidateUserController');

const getValidateUserHandler = async (res) => {
    try {
        const results = await getValidateUserController();
        return res.status(201).json(results);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = getValidateUserHandler;