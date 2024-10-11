import SendQuery from "../../../../SendQuery/SendQuery";

export async function DeleteRefreshToken(RefreshToken: string) {
  await SendQuery(
    DeleteRefreshToken,
    "Refresh Token Deleted",
    "Error when deleting Refresh Token",
    [{ Name: "RefreshToken", Value: RefreshToken }]
  );
}
