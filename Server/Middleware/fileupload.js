//* MULTER
const Multer = require("multer");

const Upload = Multer({
  storage: Multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("img");

module.exports = Upload;
