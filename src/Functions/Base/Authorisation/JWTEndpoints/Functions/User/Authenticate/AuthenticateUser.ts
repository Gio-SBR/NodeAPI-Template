import bcrypt from "bcrypt";
import { GetUser } from "../GetUser";

export async function AuthenticateUser(Username: string, Password: string) {
  try {
    const noUserObject = {
      userExists: false,
      userInfo: null,
    };
    if (Username === null || Password === null) {
      return noUserObject;
    } else {
      const DBUser = await GetUser(Username);
      if (await bcrypt.compare(Password, DBUser.Password)) {
        return {
          userExists: true,
          userInfo: DBUser,
        };
      } else {
        return noUserObject;
      }
    }
  } catch (error) {
    console.log(error);
    return {
      userExists: false,
      userInfo: null,
    };
  }
}
