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

export function DeleteRefreshToken() {
  return `
        DELETE
        FROM
                Auth.RefreshTokens
        WHERE
                Token = @RefreshToken
        `;
}
