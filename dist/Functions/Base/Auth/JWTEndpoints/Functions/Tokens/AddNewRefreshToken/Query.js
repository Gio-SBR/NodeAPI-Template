"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRefreshToken = void 0;
function AddRefreshToken() {
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
exports.AddRefreshToken = AddRefreshToken;
