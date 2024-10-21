export function GetRefreshToken() {
  return `
          SELECT
                  Token
          FROM
                  Auth.RefreshTokens
  
          WHERE
                  Token = @RefreshToken
          `;
}
