const Company = require('../../../models').Company;
const getCompanyCleanDb = require('../../../utils/getCompanyCleanDb');

const getCompanyController = async() => {
    const results = await Company.findAll();

    return getCompanyCleanDb(results);
};

module.exports = getCompanyController;