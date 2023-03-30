const Company = require('../../../models').Company;


const postCompaniesController = async (name, cuit, industry, location, numberEmployees, tel, email, InformationId) => {
     const results = await Company.create({
        name,
        cuit,
        industry,
        location,
        numberEmployees,
        tel,
        email,
        InformationId,
        
    })

    return {'CompanyId': results.id}
}

module.exports = postCompaniesController;