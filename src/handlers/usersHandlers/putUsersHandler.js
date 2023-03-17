const putUsersController = require('../../controllers/usersControllers/putUsersController');


const putUserHandler = async (req, res) => {

    const { name, lastName, email, birthDate, address, image, dni, tel, role, dateOfAdmission, position, area, cuil, cbu} = req.body;
    const { id } = req.params;
   
    try {
        const updatedUser = await putUsersController(id, name, lastName, email, birthDate, address, image, dni, tel, role, dateOfAdmission, position, area, cuil, cbu);
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(400).json({error: error.message});
    }

}

module.exports = putUserHandler;