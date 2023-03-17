const File = require('../../models').File;
const Users = require('../../models').Users;

const getFileIdController = async(id) => {
  
        const fileIdDb = await File.findOne({
            where: {
                UserId: id
            },
            include: {
                model: Users,
               
            }
        });

        if(!fileIdDb) throw new Error(`The file with id: '${id}' not exist` )

        return fileIdDb;

};

module.exports = getFileIdController;