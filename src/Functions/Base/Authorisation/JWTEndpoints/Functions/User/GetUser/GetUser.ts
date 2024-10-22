import SendQuery from "../../../../../SendQuery/SendQuery";
import { Query } from "./Query";

export async function GetUser(Username: string) {
  try {
    const response = await SendQuery(Query, undefined, "User Not Found", [
      { Name: "Username", Value: Username },
    ]);

    console.log("Get User: ", response);

    if (response.body.length > 0) {
      return response.body[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
