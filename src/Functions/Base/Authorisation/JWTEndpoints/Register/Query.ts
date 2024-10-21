export function AddUser() {
  return `
    INSERT INTO Auth.Users
    (
        Username,
        Password
    )
    VALUES
    (
        @Username,
        @Password
    )
    `;
}

export function GetUsers() {
  return `
    SELECT
        Username
    FROM
        Auth.Users

    WHERE 
        Username = @Username
    `;
}
