"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const UPLOADS_FOLDER = path_1.default.join(__dirname, "..", "..", "uploads");
// define the storage
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path_1.default.extname(file.originalname);
        const fileName = file.originalname
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
const uploadMiddleware = (0, multer_1.default)({
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
            }
            else {
                cb(new Error("Only .jpg, .png , .jpeg  or .pdf format allowed!"));
            }
        }
        else {
            cb(new Error("Invalid fieldname!"));
        }
    },
});
exports.default = uploadMiddleware;
