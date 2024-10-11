import SendQuery from "../../../../SendQuery/SendQuery";
import { User } from "../../Types";
import { GetUser } from "../Queries/GetUser";
import { AddRefreshToken } from "./Query";

export async function AddNewRefreshToken(Username: string, NewToken: string) {
  //Get User
  const User = (
    await SendQuery(GetUser, undefined, "User Not Found", [
      { Name: "Username", Value: Username },
    ])
  ).body[0] as User;

  //Store Refresh Token
  await SendQuery(
    AddRefreshToken,
    "Refresh Token Added",
    "Error when adding Refresh Token",
    [
      { Name: "Token", Value: NewToken },
      { Name: "fkUserId", Value: User.pkUserId },
    ]
  );
}
