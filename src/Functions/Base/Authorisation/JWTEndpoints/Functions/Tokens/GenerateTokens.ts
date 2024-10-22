import jwt from "jsonwebtoken";
import { AddNewRefreshToken } from "./AddNewRefreshToken";
import { DeleteRefreshToken } from "./DeleteRefreshToken";
import { TokenUser } from "../Types";

type Props = {
  UserId: string;
  Username: string;
} & ({ DeleteOld: true; OldToken: string } | { DeleteOld: false });

export async function GenerateTokens(Props: Props) {
  try {
    let { UserId, Username, DeleteOld, OldToken } = {
      UserId: Props.UserId,
      Username: Props.Username,
      DeleteOld: false,
      OldToken: "",
    };

    if (Props.DeleteOld) {
      DeleteOld = Props.DeleteOld;
      OldToken = Props.OldToken;
    }

    //User Object
    const User: TokenUser = {
      TokenID: crypto.randomUUID(),
      Username: Username,
      UserId: UserId,
      Scopes: ["Access_Health_Check", ""],
      Company: "1",
      TokenCreationDate: new Date().toDateString(),
    };

    //Create Tokens
    const NewTokens = {
      AccessToken: jwt.sign(User, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRATION_TIME!,
      }),
      RefreshToken: jwt.sign(User, process.env.JWT_REFRESH_SECRET!),
    };

    // Delete Old Token
    if (DeleteOld) {
      //delete current token
      const response = await DeleteRefreshToken(OldToken);
    }
    //Store new refresh token
    await AddNewRefreshToken(User, NewTokens.RefreshToken);

    return NewTokens;
  } catch (error) {
    console.log(error);
    return null;
  }
}
