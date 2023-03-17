const File = require("../../models").File;
const Users = require("../../models").Users;

const getFileIdController = async (id) => {
  const fileIdDb = await File.findOne({
    where: {
      UserId: id,
    },
    include: {
      model: Users,
      attributes: ["name"],
      trough: { attributes: [] },
    },
  });
  if (!fileIdDb) {
    throw new Error({ error: `The file with id: '${id}' not exist` });
  } else {
    return fileIdDb;
  }
};

module.exports = getFileIdController;
