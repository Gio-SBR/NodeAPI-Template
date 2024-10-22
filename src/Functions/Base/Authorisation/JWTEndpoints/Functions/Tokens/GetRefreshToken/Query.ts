export function Query() {
  return `
          SELECT
                  Token
          FROM
                  Auth.RefreshTokens
  
          WHERE
                  Token = @RefreshToken
          `;
}
