const getUserCleanDb = (array) => {
    const cleanDb = array.map((info) => {
        return {
            id: info.UserId,
            Fileid: info.id,
            name: info.User.name,
            lastName: info.User.lastName,
            email: info.User.email,
            image: info.User.image,
            role: info.User.role,
            CompanyId: info.User.CompanyId,
            position: info.Position.position,
            area: info.Area.area
        }
    });
    return cleanDb;
};

module.exports = getUserCleanDb;