import jwt from "jsonwebtoken";
import { AddNewRefreshToken } from "./AddNewRefreshToken";
import SendQuery from "../../../SendQuery/SendQuery";
import { DeleteRefreshToken } from "./DeleteRefreshToken";

export async function GenerateAccessTokens(
  Username: string,
  DeleteOld: boolean,
  OldToken?: string
) {
  try {
    //User Object
    const User = {
      TokenID: crypto.randomUUID(),
      Username: Username,
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
      await DeleteRefreshToken(OldToken!);
    }

    //Store new refresh token
    await AddNewRefreshToken(Username, NewTokens.RefreshToken);

    return NewTokens;
  } catch (error) {
    console.log(error);
    return null;
  }
}
