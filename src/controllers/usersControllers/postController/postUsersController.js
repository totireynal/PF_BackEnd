const Users = require('../../../models').Users;
const File = require('../../../models').File;


const postUsersController = async (name, lastName, email, birthDate, address, image, dni, tel, role, CompanyId, dateOfAdmission, position, area, cuil, cbu) => {
    let newUser = await Users.create({
        name,
        lastName,
        email,
        birthDate,
        address,
        image,
        dni,
        tel,
        role
    })

    // await newUser.setCompany(CompanyId) 
    const idNewUser = newUser.id;
    
    const e = await File.create({
        dateOfAdmission,
        position,
        area,
        cuil,
        cbu,
        UserId : idNewUser
    })

    return {message: e}
    
}


  


module.exports = postUsersController;