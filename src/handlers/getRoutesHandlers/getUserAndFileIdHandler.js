const getFileIdController = require('../../controllers/getRoutesController/getFileIdController');
const getUserIdController = require('../../controllers/getRoutesController/getUserIdController');

const getUserAndFileIdHandler = async(req, res) => {
    const { id } = req.params;
    try {
        const fileId = await getFileIdController(id);
        const userId = await getUserIdController(id);

        const result = [...fileId, ...userId];
        return res.status(201).json(result);
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

module.exports = getUserAndFileIdHandler;