const Company = require('../../../models').Company;

const getCompanyTelController = async(tel) => {
    const results = await Company.findOne({
        where: {
            tel: tel
        }
    });
    if(results) {
        return {
            message: 'This phone already exists'
        };
    } else {
        return null;
    }
};

module.exports = getCompanyTelController;