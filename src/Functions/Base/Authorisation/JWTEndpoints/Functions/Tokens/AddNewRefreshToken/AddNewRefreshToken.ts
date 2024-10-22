import SendQuery from "../../../../../SendQuery/SendQuery";
import { TokenUser } from "../../Types";
import { Query } from "./Query";

export async function AddNewRefreshToken(User: TokenUser, NewToken: string) {
  const { UserId } = User;
  //Get User
  try {
    //Store Refresh Token
    await SendQuery(
      Query,
      "Refresh Token Added",
      "Error when adding Refresh Token",
      [
        { Name: "Token", Value: NewToken },
        { Name: "fkUserId", Value: UserId },
      ]
    );
  } catch (error) {
    console.log(error);
  }
}
