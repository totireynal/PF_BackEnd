const getCompanyCleanDb = (array) => {
    return array.map((element) => {
        return {
            id: element.id,
            name: element.name,
            cuit: element.cuit,
            industry: element.industry,
            location: element.location,
            numberEmployees: element.numberEmployees,
            tel: element.tel,
            email: element.email
        }
    });
};

module.exports = getCompanyCleanDb;