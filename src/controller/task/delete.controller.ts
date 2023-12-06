import { Request,Response } from "express";
import { Task } from "../../model/task.model";


export const deleteTaskById = async (req: Request, res: Response)=> {
     try {
       res.send("task theke bolci")
     }
     catch(error){}
}