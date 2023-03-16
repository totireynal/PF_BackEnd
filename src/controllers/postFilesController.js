const File = require('../models').File;


const postFilesController = async (dateOfAdmission, position, area, cuil, cbu, UserId) => {
    let newFile = await File.create({
        dateOfAdmission,
        position,
        area,
        cuil,
        cbu
    })

    await newFile.setUser(UserId);

    return `The file associated to the employee id: ${UserId} has been created correctly.`
}


module.exports = postFilesController;