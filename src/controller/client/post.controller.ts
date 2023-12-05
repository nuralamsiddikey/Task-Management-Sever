import { Request, Response } from "express";
import { generateUniqueCode } from "../../lib/generate_client_code";
import { AppDataSource } from "../../db";
import { Client } from "../../model/client.model";


export const addClient = async (req: Request, res: Response) => {
  try {
    const obj = { ...req.body, client_code: generateUniqueCode() };
    await AppDataSource.manager.save(Client,obj);

    res.json({
      message: "Client created successfully",
      error: false,
    });
  } catch (error) {}
};
