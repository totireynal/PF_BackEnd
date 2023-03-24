const Users = require('../../../models').Users;
const File = require('../../../models').File;
const cleanInfoDb = require('../../../utils/getUsersCleanDb');

// const sortUsersController = async(sort) => {
//        if(sort === 'AtZ') {
//           const dataBaseUsers = await File.findAll({
//             include:[{
//                 model: Users,
//                 attributes: ['name', 'lastName', 'image', 'role'],
//             }],
//             order : [[ Users, 'name' , 'ASC']],
//         });
//         const sortInfo = cleanInfoDb(dataBaseUsers);
        
//         if(sortInfo.length === 0) throw new Error({ error: `The database has failed, please try again later!` })
        
        
//      } else {
//           const dataBaseUserss = await File.findAll({
//             include:[{
//                 model: Users,
//                 attributes: ['name', 'lastName', 'image', 'role'],
//             }],
//             order : [[ Users, 'name', 'DESC']],
//         });
//         const sortInfoo = cleanInfoDb(dataBaseUserss);
        
//         if(sortInfoo.length === 0) throw new Error({ error: `The database has failed, please try again later!` })
        
//      }
//    return;
// }

     module.exports = sortUsersController;