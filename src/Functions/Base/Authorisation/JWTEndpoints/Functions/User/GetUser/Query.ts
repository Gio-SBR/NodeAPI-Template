export function Query() {
  return `
        SELECT
            *
        FROM
            Auth.Users
        WHERE
            Username = @Username
        `;
}
