"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_1 = require("../controller/task");
const multer_1 = __importDefault(require("../middlewares/multer"));
const router = express_1.default.Router();
router.post("/add", multer_1.default.array('attachment', 10), task_1.addTask);
router.get('/get', task_1.getAllTask);
router.get('/get/:id', task_1.getTaskById);
exports.default = router;
