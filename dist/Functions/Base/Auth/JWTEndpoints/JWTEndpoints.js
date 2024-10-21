"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTEndpoints = void 0;
const express_1 = require("express");
const Login_1 = require("./Login");
const Register_1 = require("./Register");
const Logout_1 = require("./Logout");
const Refresh_1 = require("./Refresh");
exports.JWTEndpoints = (0, express_1.Router)();
exports.JWTEndpoints.use("/", Login_1.Login, Register_1.Register, Logout_1.Logout, Refresh_1.Refresh);
