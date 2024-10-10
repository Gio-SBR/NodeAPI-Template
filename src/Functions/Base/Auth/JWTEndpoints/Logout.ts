import { Router } from "express";
import { RefreshTokens, SetRefreshTokens } from "./JWTEndpoints";

export const Logout = Router();

Logout.post("/Logout", async (req, res) => {
  try {
    const RefreshToken = req.body.RefreshToken;
    //If token === null then return error
    if (RefreshToken === null) {
      res.status(400).json({
        Error: "Invalid Refresh Token",
      });
    } else {
      //If token is in RefreshTokens then delete it
      if (RefreshTokens.includes(RefreshToken!)) {
        SetRefreshTokens("Remove", RefreshToken!);
        res.status(204).json({
          Message: "Logout Successful",
        });
      } else {
        res.status(400).json({
          Error: "Invalid Refresh Token",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      Error: error,
    });
  }
});
