const Users = require('../../models').Users;
const File = require('../../models').File;

const getValidateUserController = async (req) => {
    const { email, dni, tel, cuil, cbu, CompanyId } = req.body;

    const findByEmail = await Users.findOne({
        where: { 
            email: email,
            CompanyId: CompanyId
        }
    });

    const findByDni = await Users.findOne({
        where: { 
            dni: dni, 
            CompanyId: CompanyId
        }
    });

    const findByTel = await Users.findOne({
        where: { 
            tel: tel,
            CompanyId: CompanyId
        }
    });

    const findByCbu = await File.findOne({
        where: { 
            cbu: cbu,
            CompanyId: CompanyId
        }
    }) 
    const findByCuil = await File.findOne({
        where: { 
            cuil:cuil,
            CompanyId: CompanyId
        }
    }) 
    
    if (findByCbu) throw new Error`Cbu: ${cbu} already exists in system. Please try another one.`
    if (findByCuil ) throw new Error`Cuil: ${cuil} already exists in system. Please try another one.`
    if(findByEmail) throw new Error`The email: ${email} already exists in system. Please try another one.`
    if(findByDni) throw new Error`The dni: ${dni} already exists in system. Please try another one.`
    if(findByTel) throw new Error`The phone: ${tel} already exists in system. Please try another one.`
};

module.exports = getValidateUserController;