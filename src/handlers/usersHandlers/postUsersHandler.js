const postUsersController = require('../../controllers/usersControllers/postController/postUsersController');



const postUsersHandler = async (req, res) => {

    const { name, lastName, email, birthDate, address, image, dni, tel, role, CompanyId, dateOfAdmission, position, area, cuil, cbu} = req.body;

    try {
        const newUser = await postUsersController(name, lastName, email, birthDate, address, image, dni, tel, role, CompanyId, dateOfAdmission, position, area, cuil, cbu)
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = postUsersHandler;