import { Request,Response } from "express";
import { Task } from "../../model/task.model";


export const addTask = async (req: Request, res: Response)=> {
     try {
       res.send(req.files)
     }
     catch(error){}
}