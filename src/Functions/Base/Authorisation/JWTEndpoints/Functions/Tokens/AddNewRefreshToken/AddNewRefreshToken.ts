import SendQuery from "../../../../../SendQuery/SendQuery";
import { GetUser } from "../../User";
import { AddRefreshToken } from "./Query";

export async function AddNewRefreshToken(Username: string, NewToken: string) {
  //Get User
  try {
    const User = await GetUser(Username);

    if (User === null) {
      return;
    }

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
  } catch (error) {
    console.log(error);
  }
}
