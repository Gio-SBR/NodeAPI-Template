import { Router } from "express";
import { DeleteRefreshToken, GetRefreshToken } from "../Functions";

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
      //Get Refresh Tokens
      const RefreshTokens = await GetRefreshToken(RefreshToken);

      //If token is in RefreshTokens then delete it
      if (RefreshTokens.length > 0) {
        await DeleteRefreshToken(RefreshToken);
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
