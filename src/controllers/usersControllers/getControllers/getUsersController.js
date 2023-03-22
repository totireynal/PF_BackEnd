const { Op } = require('sequelize');
const Users = require('../../../models').Users;
const File = require('../../../models').File;
const cleanInfoDb = require('../../../utils/getUsersCleanDb');

const getUsersController = async(name, role, area, position, sort) => {


        // const dataBaseUsers = await File.findAll({
        //     include: {
        //         model: Users,
        //         attributes: ['name', 'lastName', 'image', 'role'],
        //     }
        // });
        
        // const infoClean = cleanInfoDb(dataBaseUsers);
    
        // if(infoClean.length === 0) throw new Error({ error: `The database has failed, please try again later!` })
        
        // return infoClean;


        //---------------------


        let usersFilterContitios = {};


        if(name) {
            usersFilterContitios['name'] = {
                [Op.iLike]: `%${name}%`,
            };
        }

        if (role) {
            usersFilterContitios['role'] = {
                [Op.eq] : role,
            }
        }
        let filesFilterConditions = {};

        if(position) {
            filesFilterConditions['position'] = {
                [Op.eq]: position,
            };
            
        }

        if(area)  {
            filesFilterConditions['area'] = {
                [Op.eq] : area,
            }
        }

        const sortConditionsUsers = [Users, 'name']

        if (sort) {
            if(sort === 'AtZ') sortConditionsUsers.push('ASC');
            if(sort === 'ZtA') sortConditionsUsers.push('DESC');
        }

        
            const results = await File.findAll({
                where: filesFilterConditions,
                include: {
                    model: Users,
                    attributes: ['name','lastName', 'role', 'image'],
                    where: usersFilterContitios,
                },
                order: [sortConditionsUsers]
                
                
                
            })

            if (results.length===0) throw new Error ('The user does not exist, please realize another search.')
            const cleanResults = cleanInfoDb(results)

            return cleanResults;

        // ---------------------------------------------------------------------------------------




//         const sortConditionsUsers = [Users, 'name']
//         let usersFilterConditions = {};
//         let filesFilterConditions = {};
//     if (name) {
//     const dataBaseUsers = await File.findAll({
//         include: {
//             model: Users,
//             attributes: ['name','lastName', 'image', 'role'],
//             where: {
//                 name: {
//                     [Op.iLike] : `%${name}%`
//                 }
//             },  
//         }
//   });

 
  
//         const infoClean = cleanInfoDb(dataBaseUsers);

//         if(infoClean.length === 0) throw new Error(`The user with the name: '${name}' does not exist. Try with another please.`)
        
//         let filteredData = infoClean;

//         if(role) {
//             filteredData = filteredData.filter(elem => elem.role === role)
//         }

//         if(position) {
//             filteredData = filteredData.filter(elem => elem.position === position)
//         }

//         if(area){
//             filteredData = filteredData.filter(elem => elem.area = area)
//         }
 
//         return filteredData;
//     }

//     if (!name) {
       

//         if (role) {
//                 usersFilterConditions['role'] = {
//                     [Op.eq] : role,
//                 }
//             }

//             if(position) {
//             filesFilterConditions['position'] = {
//                 [Op.eq]: position,
//             };
            
//         }

//         if(area)  {
//             filesFilterConditions['area'] = {
//                 [Op.eq] : area,
//             }
//         }
//       }

//       if (sort) {
//             if(sort === 'AtZ') sortConditionsUsers.push('ASC');
//             if(sort === 'ZtA') sortConditionsUsers.push('DESC');
//         }

        
//             const dataBaseUsers = await File.findAll({
//                 where: filesFilterConditions,
//                 include: {
//                     model: Users,
//                     attributes: ['name','lastName', 'role', 'image'],
//                     where: usersFilterConditions,
//                 },
//                 order: [sortConditionsUsers]
//             })

//             const infoClean = cleanInfoDb(dataBaseUsers);

//   if(infoClean.length === 0) throw new Error({ error: `The database has failed, please try again later!` })
            
//   return infoClean
   

/// --------------------------------------------------------------------------------------------------------
    
};

module.exports = getUsersController;