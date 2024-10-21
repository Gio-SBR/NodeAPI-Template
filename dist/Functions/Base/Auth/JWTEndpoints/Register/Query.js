"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsers = exports.AddUser = void 0;
function AddUser() {
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
exports.AddUser = AddUser;
function GetUsers() {
    return `
    SELECT
        Username
    FROM
        Auth.Users

    WHERE 
        Username = @Username
    `;
}
exports.GetUsers = GetUsers;
