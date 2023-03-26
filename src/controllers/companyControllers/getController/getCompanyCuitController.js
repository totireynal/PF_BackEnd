const Company = require('../../../models').Company;


const getCompanyCuitController = async (cuit) => {

    const results = await Company.findOne({
        where: {
            cuit: cuit
        }
    })

    if (results) throw new Error ('The company already exists in our system, please register another one.')

    return 'Company able to be registered.';
}

module.exports = getCompanyCuitController;