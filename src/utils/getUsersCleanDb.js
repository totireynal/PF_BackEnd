const getUserCleanDb = (array) => {
    const cleanDb = array.map((info) => {
        return {
            id: info.id,
            name: info.name,
            lastName: info.lastName,
            email: info.email,
            birthDate: info.birthDate,
            address: info.address,
            image: info.image,
            dni: info.dni,
            tel: info.tel,
            role: info.role,
            CompanyId: info.CompanyId,
            Company: info.Company
        }
    });
    return cleanDb;
};

module.exports = getUserCleanDb;