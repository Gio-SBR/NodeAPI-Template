"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRefreshToken = void 0;
function GetRefreshToken() {
    return `
          SELECT
                  Token
          FROM
                  Auth.RefreshTokens
  
          WHERE
                  Token = @RefreshToken
          `;
}
exports.GetRefreshToken = GetRefreshToken;
