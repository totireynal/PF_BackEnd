const Users = require('../../models').Users;
const File = require('../../models').File;
const cleanDatabase = require('../../utils/cleanFilterByRole')

const filterByRoleController = async (role) => {

    const dataBaseFilteredRaw = await File.findAll({
        include: {
            model: Users,
            attributes:['name', 'lastName', 'image', 'role'],
            where:{
                role: role
            }
        }

        
    })
    
    return cleanDatabase(dataBaseFilteredRaw);

};

module.exports = filterByRoleController;