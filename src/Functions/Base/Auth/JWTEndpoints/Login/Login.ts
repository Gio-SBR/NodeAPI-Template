import { Router } from "express";
import { GenerateAccessToken } from "../../GenerateAccessToken";
import SendQuery from "../../../SendQuery/SendQuery";
import { AddRefreshToken, GetUser } from "./Query";
import { User } from "../Types";
import bcrypt from "bcrypt";

export const Login = Router();

Login.post("/Login", async (req, res) => {
  try {
    // Get User from request
    const RequestUser = {
      Username: req.body.Username,
      Password: req.body.Password,
    };
    if (RequestUser.Username === null || RequestUser.Password === null) {
      res.status(400).json({
        Error: "Invalid Username or Password",
      });
    }

    //Hash Password
    //GetUserFromDB
    const GetUserResponse = await SendQuery(
      GetUser,
      undefined,
      "User Not Found",
      undefined
    );

    let DBUser: User = {
      Username: "",
      Password: "",
    };
    if (GetUserResponse.body[0].Message === "User Not Found") {
      res.status(400).json({
        Error: "User Not Found",
      });
    } else {
      DBUser = GetUserResponse.body[0];
    }
    console.log(DBUser);

    //Check password
    const CheckPassword = await bcrypt.compare(
      RequestUser.Password,
      DBUser.Password
    );
    if (!CheckPassword) {
      res.status(401).json({
        Error: "Invalid Username or Password",
      });
    }

    //Authenticate User
    if (
      DBUser.Username === RequestUser.Username &&
      DBUser.Password === RequestUser.Password
    ) {
      const Username = DBUser.Username;

      //Create Token
      const Token = GenerateAccessToken("Access", Username);
      const RefreshToken = GenerateAccessToken("Refresh", Username);

      //Store Refresh Token
      await SendQuery(
        AddRefreshToken,
        "Refresh Token Stored",
        "Error when storing Refresh Token",
        [{ Name: "RefreshToken", Value: RefreshToken }]
      );

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
