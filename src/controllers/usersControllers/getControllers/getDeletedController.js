const File = require ('../../../models').File;
const Users = require ('../../../models').Users;
const { Op } = require('sequelize');

const getDeleted = async () => {
 

     const deletedUsers =  await File.findAll({
        where:{
          deletedAt : {
               [Op.ne]: null,
          }
        },paranoid: false,
        includes:[{
          model:Users,
          where: {
               deletedAt : {
                    [Op.ne]: null,
               }
          },
          paranoid: false,
        }]
     })

     return deletedUsers;
}

module.exports = getDeleted;