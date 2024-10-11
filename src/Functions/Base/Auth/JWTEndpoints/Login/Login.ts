import { Router } from "express";
import { GenerateAccessToken } from "../../GenerateAccessToken";
import SendQuery from "../../../SendQuery/SendQuery";
import { AddRefreshToken, GetUser } from "./Query";
import { User } from "../Types";
import { AuthenticateUser } from "../../AuthenticateUser";

export const Login = Router();

Login.post("/Login", async (req, res) => {
  try {
    // Get User from request
    const RequestUser = {
      Username: req.body.Username,
      Password: req.body.Password,
    };

    // Authenticate User
    const userExists = await AuthenticateUser(
      RequestUser.Username,
      RequestUser.Password
    );

    if (!userExists) {
      res.status(401).json({
        Error: "Invalid Username or Password",
      });
    } else {
      //Get User
      const User = (
        await SendQuery(GetUser, undefined, "User Not Found", [
          { Name: "Username", Value: RequestUser.Username },
        ])
      ).body[0] as User;

      //Create Token
      const Token = GenerateAccessToken("Access", RequestUser.Username);
      const RefreshToken = GenerateAccessToken("Refresh", RequestUser.Username);

      //Store Refresh Token
      const AddRefreshTokenResponse = await SendQuery(
        AddRefreshToken,
        "Refresh Token Stored",
        "Error when storing Refresh Token",
        [
          { Name: "RefreshToken", Value: RefreshToken },
          { Name: "fkUserId", Value: User.pkUserId },
        ]
      );
      console.log("AddRefreshTokenResponse", AddRefreshTokenResponse);

      //Return Token
      res.status(200).json({
        AccessToken: Token,
        RefreshToken: RefreshToken,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      Error: error,
    });
  }
});
