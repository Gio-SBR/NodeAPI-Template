import SendQuery from "../../../../../SendQuery/SendQuery";

export async function GetUser(Username: string) {
  try {
    const response = await SendQuery(GetUser, undefined, "User Not Found", [
      { Name: "Username", Value: Username },
    ]);

    if (response.body.length > 0) {
      return response.body[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
