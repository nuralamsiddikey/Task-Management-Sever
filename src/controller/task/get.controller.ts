import { Request,Response } from "express";
import { Task } from "../../model/task.model";


export const getAllTask = async (req: Request, res: Response)=> {
     try {
       res.send("task theke bolci")
     }
     catch(error){}
}

export const getTaskById = async (req: Request, res: Response)=> {
    try {
      res.send("task theke bolci")
    }
    catch(error){}
}