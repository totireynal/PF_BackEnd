const Company = require('../../../models').Company;


const postCompaniesController = async (name, cuit, industry, location, numberEmployees, tel, email, InformationId) => {
     await Company.create({
        name,
        cuit,
        industry,
        location,
        numberEmployees,
        tel,
        email,
        InformationId,
        
    })

    return `The company ${name} has been created correctly.`
}

module.exports = postCompaniesController;