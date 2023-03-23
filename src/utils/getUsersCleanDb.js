const cleanInfoDb = (array) => {
    const cleanDb = array.map((info) => {
        return {
            id: info.UserId,
            Fileid: info.id,
            name: info.User.name,
            lastName: info.User.lastName,
            image: info.User.image,
            role: info.User.role,
            position: info.Position.position,
            area: info.Area.area,
        }
    });
    return cleanDb;
};

module.exports = cleanInfoDb;