import { Router } from "express";
import {
  AddNewRefreshToken,
  AuthenticateUser,
  GenerateTokens,
} from "../Functions";

export const Login = Router();

Login.post("/Login", async (req, res) => {
  try {
    // Get User from request
    const RequestUser = {
      Username: req.body.Username,
      Password: req.body.Password,
    };

    // Authenticate User
    const userExists: { userExists: boolean; userInfo: any } =
      await AuthenticateUser(RequestUser.Username, RequestUser.Password);

    if (!userExists.userExists) {
      res.status(401).json({
        Error: "Invalid Username or Password",
      });
    } else {
      //Create Token
      const Tokens = await GenerateTokens({
        Username: userExists.userInfo.Username,
        UserId: userExists.userInfo.UserID,
        DeleteOld: false,
      });

      //Return Token
      res.status(200).json(Tokens);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      Error: error,
    });
  }
});
