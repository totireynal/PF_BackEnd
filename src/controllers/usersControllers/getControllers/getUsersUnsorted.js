const { Op } = require('sequelize');
const Users = require('../../../models').Users;
const File = require('../../../models').File;
const cleanInfoDb = require('../../../utils/getUsersCleanDb');

const getUsersUnsorted = async() => {


        const dataBaseUsers = await File.findAll({
            include: {
                model: Users,
                attributes: ['name', 'lastName', 'image', 'role'],
            }
        });
        
        const infoClean = cleanInfoDb(dataBaseUsers);
    
        if(infoClean.length === 0) throw new Error({ error: `The database has failed, please try again later!` })
        
        return infoClean;

}

module.exports = getUsersUnsorted;
