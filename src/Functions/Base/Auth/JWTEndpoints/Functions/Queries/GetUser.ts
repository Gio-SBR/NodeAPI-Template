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
