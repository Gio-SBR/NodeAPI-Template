import { Router } from "express";
import jwt from "jsonwebtoken";
import { GenerateAccessTokens, GetRefreshToken } from "./Functions";

export const Refresh = Router();

Refresh.post("/Refresh", async (req, res) => {
  try {
    const RefreshToken = req.body.RefreshToken;
    //If token === null then return error
    if (RefreshToken === null) {
      res.status(400).json({
        Error: "Invalid Refresh Token",
      });
    }

    //Get Refresh Tokens
    const RefreshTokens = await GetRefreshToken(RefreshToken);

    console.log("RefreshTokens", RefreshTokens);

    //If token is not in RefreshTokens then return error
    if (RefreshTokens.length > 0) {
      //Verify Token
      jwt.verify(
        RefreshToken!,
        process.env.JWT_REFRESH_SECRET!,
        async (err: any, user: any) => {
          if (err) {
            res.status(403).json({
              Error: "Invalid Refresh Token",
            });
          } else {
            //Generate new tokens
            const Tokens = await GenerateAccessTokens(
              user.Username,
              true,
              RefreshToken!
            );

            //Return Tokens
            res.status(200).json(Tokens);
          }
        }
      );
    } else {
      res.status(400).json({
        Error: "Invalid Refresh Token",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      Error: error,
    });
  }
});
