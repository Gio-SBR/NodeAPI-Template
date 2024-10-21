import bcrypt from "bcrypt";
import { GetUser } from "../GetUser";

export async function AuthenticateUser(Username: string, Password: string) {
  try {
    if (Username === null || Password === null) {
      return false;
    } else {
      const DBUser = await GetUser(Username);
      if (await bcrypt.compare(Password, DBUser.Password)) {
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
