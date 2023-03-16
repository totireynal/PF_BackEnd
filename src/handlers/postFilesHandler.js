const postFilesController = require('../controllers/postFilesController');

const postFilesHandler = async (req, res) => {

    const { dateOfAdmission, position, area, cuil, cbu, UserId } = req.body;

    try {
        const newFile = await postFilesController(dateOfAdmission, position, area, cuil, cbu, UserId)
        res.status(200).json(newFile)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = postFilesHandler;