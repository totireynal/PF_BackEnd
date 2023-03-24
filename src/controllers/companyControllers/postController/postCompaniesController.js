const Company = require('../../../models').Company;


const postCompaniesController = async (name, cuit, industry, paymentDay, location, numberEmployees, tel, email, authorized) => {
     await Company.create({
        name,
        cuit,
        industry,
        location,
        numberEmployees,
        tel,
        email,
        authorized,
        paymentDay,
        
    })

    return `The company ${name} has been created correctly.`
}

module.exports = postCompaniesController;