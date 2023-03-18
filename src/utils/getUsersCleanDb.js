const getUserCleanDb = (array) => {
    const cleanDb = array.map((info) => {
        return {
            id: info.UserId,
            name: info.User.name,
            lastName: info.User.lastName,
            image: info.User.image,
            role: info.User.role,
            Fileid: info.id,
            position: info.position,
            area: info.area
        }
    });
    return cleanDb;
};

module.exports = getUserCleanDb;