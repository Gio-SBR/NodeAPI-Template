export function GetRefreshTokens() {
  return `
        SELECT
                RefreshToken
        FROM
                Auth.RefreshTokens
        `;
}

export function DeleteRefreshToken() {
  return `
        DELETE
        FROM
                Auth.RefreshTokens
        WHERE
                RefreshToken = @RefreshToken
        `;
}
