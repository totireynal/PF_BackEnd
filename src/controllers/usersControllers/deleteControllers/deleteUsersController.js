const Users = require('../../../models').Users;

const softDeleteUsers = async (id) => {
     await Users.destroy({
        where: {
            id : id,
        }
        
    })
    return "soft deleted";
}

module.exports = softDeleteUsers;