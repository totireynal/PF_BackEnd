const File = require('../../models').File;
const Users = require('../../models').Users;

const getFileIdController = async(id) => {
    try {
        const fileIdDb = await File.findByPk(id, {
            include: {
                model: Users,
                attributes: ['id'],
                trough: { attributes: [] }
            }
        });
        console.log(fileIdDb);
        return fileIdDb;
    } catch (error) {
        throw new Error({ error: `The file with id: '${id}' not exist` })
    }
};

module.exports = getFileIdController;