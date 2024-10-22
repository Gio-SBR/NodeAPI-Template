import SendQuery from "../../../../../SendQuery/SendQuery";
import { Query } from "./Query";

export async function DeleteRefreshToken(RefreshToken: string) {
  const response = await SendQuery(
    Query,
    "Refresh Token Deleted",
    "Error when deleting Refresh Token",
    [{ Name: "RefreshToken", Value: RefreshToken }]
  );

  return response;
}
