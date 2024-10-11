import SendQuery from "../../../../SendQuery/SendQuery";

export async function GetRefreshToken(RefreshToken: string) {
  const Token = (
    await SendQuery(
      GetRefreshToken,
      undefined,
      "Error when getting Refresh Tokens",
      [{ Name: "RefreshToken", Value: RefreshToken }]
    )
  ).body;

  return Token;
}
