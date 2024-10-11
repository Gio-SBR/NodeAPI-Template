export function GetUser() {
  return `
    SELECT TOP 1
        Username,
        Password
    FROM
        Auth.Users
    WHERE
        Username = @Username
    `;
}

export function AddRefreshToken() {
  return `
    INSERT INTO Auth.RefreshTokens
    (
        RefreshToken
    )
    VALUES
    (
        @RefreshToken
    )
    `;
}
