export function GetUser() {
  return `
    SELECT TOP 1
        *
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
        Token,
        fkUserId
    )
    VALUES
    (
        @RefreshToken,
        @fkUserId
    )
    `;
}
