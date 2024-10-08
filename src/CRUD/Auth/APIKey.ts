import { NextFunction } from "express";

export function APIKey(req: any, res: any, next: NextFunction) {
  const api_key = req.header("x-api-key");
  if (api_key !== process.env.API_KEY) {
    res.status(401).json({
      Error: "API Key is invalid",
    });
  } else {
    return next();
  }
}
