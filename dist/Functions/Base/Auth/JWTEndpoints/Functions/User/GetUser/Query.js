"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
function GetUser() {
    return `
        SELECT TOP 1
            *
        FROM
            Auth.Users
        WHERE
            Username = @Username
        `;
}
exports.GetUser = GetUser;
