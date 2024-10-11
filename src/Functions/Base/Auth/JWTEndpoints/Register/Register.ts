import { Router } from "express";
import bcrypt from "bcrypt";
import SendQuery from "../../../SendQuery/SendQuery";
import { AddUser, GetUsers } from "./Query";

export const Register = Router();

Register.post("/Register", async (req, res) => {
  try {
    const RequestedUserDetails = {
      Username: req.body.Username,
      Password: req.body.Password,
    };

    //Check if user already exists
    const Users = await SendQuery(
      GetUsers,
      "User Exists",
      "User Does Not Exist",
      [{ Name: "Username", Value: RequestedUserDetails.Username }]
    );
    if (Users.body[0].Username === RequestedUserDetails.Username) {
      res.status(400).json({
        Error: "User Already Exists",
      });
    }

    //Hash Password
    const HashedPassword = await bcrypt.hash(RequestedUserDetails.Password, 10);

    //Store User
    const result = await SendQuery(
      AddUser,
      "Registration Successful",
      "Registration Failed",
      [
        {
          Name: "Username",
          Value: RequestedUserDetails.Username,
        },
        {
          Name: "Password",
          Value: HashedPassword,
        },
      ]
    );

    res.status(200).send({ Message: "Registration Successful" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      Error: error,
    });
  }
});
