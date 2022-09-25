//* MULTER
const Multer = require("multer");

const FileStorage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const Upload = Multer({ storage: FileStorage });

module.exports = Upload;
