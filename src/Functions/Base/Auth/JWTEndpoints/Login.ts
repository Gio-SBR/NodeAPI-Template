import { Router } from "express";
import { GenerateAccessToken } from "../GenerateAccessToken";
import { SetRefreshTokens } from "./JWTEndpoints";

export const Login = Router();

Login.post("/Login", async (req, res) => {
  try {
    //GetUserFromDB
    const DBUser = {
      UserName: "test@test.com",
      Password: "test",
    };
    // Get User from request
    const RequestUser = {
      Username: req.body.UserName,
      Password: req.body.Password,
    };
    //Authenticate User
    if (
      DBUser.UserName === RequestUser.Username &&
      DBUser.Password === RequestUser.Password
    ) {
      const UserName = DBUser.UserName;

      //Create Token
      const Token = GenerateAccessToken("Access", UserName);
      const RefreshToken = GenerateAccessToken("Refresh", UserName);

      //Store Refresh Token
      SetRefreshTokens("Add", RefreshToken!);

      //Return Token
      res.status(200).json({
        AccessToken: Token,
        RefreshToken: RefreshToken,
      });
    } else {
      res.status(401).json({
        Error: "Invalid Username or Password",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      Error: error,
    });
  }
});
