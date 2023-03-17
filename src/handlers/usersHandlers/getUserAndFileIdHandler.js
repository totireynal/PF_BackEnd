const getFileIdController = require("../../controllers/filesControllers/getFileIdController");
const getUserIdController = require("../../controllers/usersControllers/getUserIdController");

const getUserAndFileIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await getUserIdController(id);
    const fileId = await getFileIdController(id);
    // console.log(fileId);

    const result = [fileId, ...userId];
    // console.log(result);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getUserAndFileIdHandler;
