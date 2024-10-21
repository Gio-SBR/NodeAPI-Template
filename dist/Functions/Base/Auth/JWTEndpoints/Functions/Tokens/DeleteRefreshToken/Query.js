"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRefreshToken = void 0;
function DeleteRefreshToken() {
    return `
          DELETE
          FROM
                  Auth.RefreshTokens
          WHERE
                  Token = @RefreshToken
          `;
}
exports.DeleteRefreshToken = DeleteRefreshToken;
