const cloudinary = require("cloudinary").v2;
const multer = require('multer');
cloudinary.config({
  cloud_name: "dcnomniio",
  api_key: "381234324343772",
  api_secret: "yBKKaIkwXmAYTZDO3K0jla8Dbx4"
});

const handleUpload = async (file) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
};

const runMiddleware = (req, res, fn) => {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = {
    handleUpload,
    runMiddleware,
    upload
}

