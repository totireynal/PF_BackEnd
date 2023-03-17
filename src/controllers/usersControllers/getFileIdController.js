const Files = require('../../models').Files;
const Users = require('../../models').Users;

const getFileIdController = async(id) => {
    try {
        const fileIdDb = await Files.findAll({
            include: {
                model: Users,
                attributes: ['name'],
                trough: { attributes: [] }
            }
        });
        return fileIdDb;
    } catch (error) {
        throw new Error({ error: `The file with id: '${id}' not exist` })
    }
};

module.exports = getFileIdController;