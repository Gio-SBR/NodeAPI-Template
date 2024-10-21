import jwt from "jsonwebtoken";
import { AddNewRefreshToken } from "./AddNewRefreshToken";
import { DeleteRefreshToken } from "./DeleteRefreshToken";

type Props = {
  Username: string;
} & ({ DeleteOld: true; OldToken: string } | { DeleteOld: false });

export async function GenerateTokens(Props: Props) {
  try {
    const Username = "";
    const DeleteOld = false;
    const OldToken = "";

    if (Props.DeleteOld) {
      const Username = Props.Username;
      const DeleteOld = Props.DeleteOld;
      const OldToken = Props.OldToken;
    }

    //User Object
    const User = {
      TokenID: crypto.randomUUID(),
      Username: Username,
      Scopes: ["Access_Health_Check", ""],
      Company: 1,
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
      await DeleteRefreshToken(OldToken);
    }

    //Store new refresh token
    await AddNewRefreshToken(Username, NewTokens.RefreshToken);

    return NewTokens;
  } catch (error) {
    console.log(error);
    return null;
  }
}
