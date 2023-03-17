const Users = require('../../models').Users;

const putUsersController = async (id, name, lastName, email, birthDate, address, image, dni, tel, role) => {

   const findUserById = await Users.findOne({
        where: 
            { id:id } 
   })

   if (!findUserById) throw new Error(`The user with id: ${id} doesn't exist.`)

   await Users.update({
    name, lastName, email, birthDate, address, image, dni, tel, role},
    {where: { id:id }})

   return `The user with id: ${id} has been updated correctly.`

};


module.exports = putUsersController;