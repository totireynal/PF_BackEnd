const { Op } = require('sequelize');
const Users = require('../../models').Users;
const Company = require('../../models').Company;
const cleanInfoDb = require('../../utils/getUsersCleanDb');

const getUserNameController = async(name) => {
    const dataBaseNameRaw = await Users.findAll({
        where: {
            name: {
                [Op.iLike] : `%${name}%`
            }
        },
        include: {

            model: Company,
            attributes: ['name'],
            trough: { attributes: [] }
        }
    });
    const cleanInfo = cleanInfoDb(dataBaseNameRaw);

    if(!cleanInfo.length) throw new Error(`The user with the name: '${name}' does not exist. Try another please`);
    return cleanInfo;
};

module.exports = getUserNameController;