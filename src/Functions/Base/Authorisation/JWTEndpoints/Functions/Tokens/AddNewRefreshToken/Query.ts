export function Query() {
  return `
      INSERT INTO Auth.RefreshTokens
      (
          Token,
          fkUserId
      )
      VALUES
      (
          @Token,
          @fkUserId
      )
      `;
}
