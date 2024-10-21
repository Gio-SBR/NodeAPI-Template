export function Query() {
  return `
        SELECT TOP 1
            *
        FROM
            Auth.Users
        WHERE
            Username = @Username
        `;
}
