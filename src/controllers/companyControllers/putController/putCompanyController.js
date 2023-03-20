const Company = require ('../../../models').Company;

const putCompanyController = async ( id, name, cuit, industry, location, email, numberEmployees, tel, authorized ) => {
 
    const findCompanyById = await Company.findOne({
     where: {
        id
      }
    });

    if (!findCompanyById) throw new Error('Company not found');

    await Company.Update({
     name, cuit, industry, location, email,numberEmployees, tel, authorized},
     {
      where: {
        id
      }
    });
    return 'Company could not be updated successfully'
}

module.exports = putCompanyController