const File = require("../../models").File;
const Users = require("../../models").Users;
const getFileIdCleanDb = require("../../utils/getFileIdCleanDb");

const getFileIdController = async (id) => {
  const fileIdDb = await File.findOne({
    where: {
      UserId: id,
    },
    include: {
      model: Users,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'deletedAt']
      }
    },
  });

  if (!fileIdDb) throw new Error(`The file with id: '${id}' not exist`);

  return getFileIdCleanDb([fileIdDb]);
};

module.exports = getFileIdController;
