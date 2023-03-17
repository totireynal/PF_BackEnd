const Users = require('../../models').Users;


const postUsersController = async (name, lastName, email, birthDate, address, image, dni, tel, role, CompanyId) => {
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

    await newUser.setCompany(CompanyId)  
    
    return `The user ${name} ${lastName} has been created correctly.`
}


  


module.exports = postUsersController;