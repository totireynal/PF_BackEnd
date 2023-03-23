const cloudinary = require("../../controllers/usersControllers/uploadImageControllers/uploadImageController");

const postCloudinaryHandler = async (req, res) => {
  try {
    const postImage = req.body.data;

    console.log(postImage, 'etesecth');
    const uploadResponse = await cloudinary.uploader.upload(postImage, {
      upload_preset: "Upload",
    });
    console.log(uploadResponse, 'el tilin');
    let secureURL = uploadResponse.secure_url;
    console.log(secureURL, 'el pepe');
    // return res.status(201).josn(secureURL);
  } catch (error) {
    return res
      .status(404)
      .json({ error: "Failed to load image, please try again later" });
  }
};

module.exports = postCloudinaryHandler;