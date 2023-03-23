const { Op } = require('sequelize');
const Users = require('../../../models').Users;
const File = require('../../../models').File;
const Area = require('../../../models').Area;
const Position = require('../../../models').Position;
const cleanInfoDb = require('../../../utils/getUsersCleanDb');

const getUsersUnsorted = async() => {


        const dataBaseUsers = await File.findAll({
            include:[ {
                model: Users,
                attributes: ['id','name', 'lastName', 'image', 'role'],
            }, {
                model: Area,
                attributes: ['id','area'] ,          
             }, {
                model: Position,
                attributes : ['id','position'],
             }]
        });
        
        // const infoClean = cleanInfoDb(dataBaseUsers);
    
        // if(infoClean.length === 0) throw new Error({ error: `The database has failed, please try again later!` })
        
        // return infoClean;
        return dataBaseUsers;

}

module.exports = getUsersUnsorted;
