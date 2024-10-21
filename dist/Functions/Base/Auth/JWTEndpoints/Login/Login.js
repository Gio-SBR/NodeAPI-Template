"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const express_1 = require("express");
const Functions_1 = require("../Functions");
exports.Login = (0, express_1.Router)();
exports.Login.post("/Login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get User from request
        const RequestUser = {
            Username: req.body.Username,
            Password: req.body.Password,
        };
        // Authenticate User
        const userExists = yield (0, Functions_1.AuthenticateUser)(RequestUser.Username, RequestUser.Password);
        if (!userExists) {
            res.status(401).json({
                Error: "Invalid Username or Password",
            });
        }
        else {
            //Create Token
            const Tokens = (0, Functions_1.GenerateTokens)({
                Username: RequestUser.Username,
                DeleteOld: false,
            });
            //Return Token
            res.status(200).json(Tokens);
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            Error: error,
        });
    }
}));
