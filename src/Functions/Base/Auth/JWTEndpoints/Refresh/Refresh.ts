import { Router } from "express";
import jwt from "jsonwebtoken";
import SendQuery from "../../../SendQuery/SendQuery";
import { DeleteRefreshToken, GetRefreshToken } from "./Query";
import { GenerateAccessToken } from "../../GenerateAccessToken";

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

    //Get Refresh Tokens
    const RefreshTokens = (
      await SendQuery(
        GetRefreshToken,
        undefined,
        "Error when getting Refresh Tokens",
        [{ Name: "RefreshToken", Value: RefreshToken }]
      )
    ).body;

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
            //delete current token
            await SendQuery(
              DeleteRefreshToken,
              "Refresh Token Deleted",
              "Error when deleting Refresh Token",
              [{ Name: "RefreshToken", Value: RefreshToken! }]
            );

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
