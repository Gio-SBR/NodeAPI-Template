import { Router } from "express";
import jwt from "jsonwebtoken";
import { GenerateTokens, GetRefreshToken } from "../Functions";

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

    //If token is not in RefreshTokens then return error
    if (RefreshTokens.length > 0) {
      //verify token start
      console.log("token verification started: ", new Date().toTimeString());
      //Verify Token
      let tokenVerified = true;
      let Username = "";
      let UserId = "";
      jwt.verify(
        RefreshToken!,
        process.env.JWT_REFRESH_SECRET!,
        async (err: any, user: any) => {
          if (err) {
            res.status(403).json({
              Error: "Invalid Refresh Token",
            });
          } else {
            tokenVerified = true;
            Username = user.Username;
            UserId = user.UserId;
          }
        }
      );

      if (tokenVerified) {
        console.log("token verified: ", new Date().toTimeString());
        //Generate new tokens
        const Tokens = await GenerateTokens({
          UserId: UserId,
          Username: Username,
          DeleteOld: true,
          OldToken: RefreshToken,
        });

        console.log("new tokens generated: ", new Date().toTimeString());

        //Return Tokens
        res.status(200).json(Tokens);
      }
    } else {
      //If token is not in RefreshTokens then return error
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
