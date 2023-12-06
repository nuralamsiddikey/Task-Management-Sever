import { Request, Response } from "express";

export const IsAuthenticate = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(401).json({
        message: "Access forbidden",
        error: true,
      });
      const token = authHeader.split(" ")[1]
      
  } catch (error) {}
};
