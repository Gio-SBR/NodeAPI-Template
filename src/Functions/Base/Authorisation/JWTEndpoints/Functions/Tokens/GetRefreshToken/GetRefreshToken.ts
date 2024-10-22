import SendQuery from "../../../../../SendQuery/SendQuery";
import { Query } from "./Query";

export async function GetRefreshToken(RefreshToken: string) {
  const Token = (
    await SendQuery(Query, undefined, "Error when getting Refresh Tokens", [
      { Name: "RefreshToken", Value: RefreshToken },
    ])
  ).body;

  return Token;
}
