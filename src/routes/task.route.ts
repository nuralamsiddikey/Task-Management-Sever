import express from "express";
import { addTask, getAllTask, getTaskById,updateTaskById, deleteTaskById } from "../controller/task";
import uploadMiddleware from "../middlewares/multer";
const router = express.Router();


router.post("/add",uploadMiddleware.array('attachment',10),addTask)
router.get('/get',getAllTask)
router.get('/get/:id',getTaskById)

export default router;
