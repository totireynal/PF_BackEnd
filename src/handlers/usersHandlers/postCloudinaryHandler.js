const cloudinary = require("../../controllers/usersControllers/uploadImageControllers/uploadImageController");

const postCloudinaryHandler = async (req, res) => {
  try {
    const postImage = req.body.data;

    const uploadResponse = await cloudinary.uploader.upload(postImage, {
    });
    let secureURL = uploadResponse.secure_url;
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Failed to load image, please try again later" });
  }
};

module.exports = postCloudinaryHandler;