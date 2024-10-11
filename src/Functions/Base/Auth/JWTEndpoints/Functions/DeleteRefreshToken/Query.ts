export function DeleteRefreshToken() {
  return `
          DELETE
          FROM
                  Auth.RefreshTokens
          WHERE
                  Token = @RefreshToken
          `;
}
