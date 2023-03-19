const Users = require('../../../models').Users;
const File = require('../../../models').File;

const softDeleteUsers = async (id) => {
     await Users.destroy({
        where: {
            id ,
        },include :[{
            model: File.destroy({
                where: {
                    UserId : id ,
                }
            }),

        }]
        
    })
    return "soft deleted";
}

module.exports = softDeleteUsers;