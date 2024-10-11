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
