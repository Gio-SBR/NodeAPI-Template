import { Router } from "express";
import { RefreshTokens, SetRefreshTokens } from "./JWTEndpoints";
import jwt from "jsonwebtoken";
import { GenerateAccessToken } from "../GenerateAccessToken";

export const Refresh = Router();

Refresh.post("/Refresh", async (req, res) => {
  try {
    const RefreshToken = req.body.RefreshToken;
    //If token === nll then return error
    if (RefreshToken === null) {
      res.status(400).json({
        Error: "Invalid Refresh Token",
      });
    }

    //If token is not in RefreshTokens then return error
    if (RefreshTokens.includes(RefreshToken!)) {
      //Verify Token
      jwt.verify(
        RefreshToken!,
        process.env.JWT_REFRESH_SECRET!,
        (err: any, user: any) => {
          if (err) {
            res.status(403).json({
              Error: "Invalid Refresh Token",
            });
          } else {
            //delete current token
            SetRefreshTokens("Remove", RefreshToken!);

            //Generate new tokens
            const NewAccessToken = GenerateAccessToken("Access", user.Username);
            const NewRefreshToken = GenerateAccessToken(
              "Refresh",
              user.Username
            );

            //Store Refresh Token
            RefreshTokens.push(NewRefreshToken!);

            //Return Tokens
            res.status(200).json({
              AccessToken: NewAccessToken,
              RefreshToken: NewRefreshToken,
            });
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
