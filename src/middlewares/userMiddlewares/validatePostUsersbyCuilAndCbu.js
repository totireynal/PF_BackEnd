const { Op } = require('sequelize');
const File = require('../../models').File;
const Users = require('../../models').Users;

const validatePostUsersByCuilAndCbu = async (req, res, next) => {
    const { cuil, cbu} = req.body;
    
    // const findInFile = await File.findAll({
    //     where: 
    //      { 
    //         [Op.or]: [
    //             {cbu:cbu},
    //             {cuil:cuil}
    //         ]
    //     }
    // }) 
     

    const findByCbu = await File.findOne({
        where: 
         { cbu: cbu}
    }) 
    const findByCuil = await File.findOne({
        where: 
         { cuil:cuil}
    }) 
    
    if (findByCbu ) res.status(400).json({error: `Cuil: ${cuil} already exists in system. Please try another one.`});
    if (findByCuil) return res.status(400).json({error: `Cuil: ${cbu} already exists in system. Please try another one.`});
    // if (findInFile) return res.status(400).json({error: `Cuil: ${cuil} already exists in system. Please try another one.`});
    // if (findInFile) return res.status(400).json({error: `Cbu: ${cbu} already exists in system. Please try another one.`});
        
    next();
}

module.exports = validatePostUsersByCuilAndCbu;