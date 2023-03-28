const Company = require('../../../models').Company;


const getCompanyCuitController = async (cuit) => {

    const results = await Company.findOne({
        where: {
            cuit: cuit
        }
    })

    
    if (results) {
        return {
            mensaje: 'Ya existe una empresa con este CUIT'
        };
    } else {
        return null;
    }
}

module.exports = getCompanyCuitController;