import multer, { Multer, FileFilterCallback } from "multer";
import path from "path";

const UPLOADS_FOLDER = path.join(__dirname, "..", "..", "uploads");

// define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, fileName + fileExt);
  },
});

// prepare the final multer upload object
const uploadMiddleware: Multer = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "attachment") {
      const allowedMimeTypes = [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "application/pdf",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Only .jpg, .png , .jpeg  or .pdf format allowed!"));
      }
    } else {
      cb(new Error("Invalid fieldname!"));
    }
  },
});

export default uploadMiddleware;
