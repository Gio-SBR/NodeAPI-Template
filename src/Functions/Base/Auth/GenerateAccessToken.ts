import jwt from "jsonwebtoken";

export function GenerateAccessToken(
  TokenType: "Access" | "Refresh",
  UserName: string
) {
  try {
    //User Object
    const User = {
      TokenID: crypto.randomUUID(),
      Username: UserName,
      TokenCreationDate: new Date().toDateString(),
    };

    if (TokenType === "Refresh") {
      return jwt.sign(User, process.env.JWT_REFRESH_SECRET!);
    } else if (TokenType === "Access") {
      return jwt.sign(User, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRATION_TIME!,
      });
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
