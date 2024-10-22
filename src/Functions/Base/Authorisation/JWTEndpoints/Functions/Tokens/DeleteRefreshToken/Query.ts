export function Query() {
  return `
          DELETE
          FROM
                  Auth.RefreshTokens
          WHERE
                  Token = @RefreshToken
          `;
}
