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
exports.Logout = void 0;
const express_1 = require("express");
const Functions_1 = require("../Functions");
exports.Logout = (0, express_1.Router)();
exports.Logout.post("/Logout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const RefreshToken = req.body.RefreshToken;
        //If token === null then return error
        if (RefreshToken === null) {
            res.status(400).json({
                Error: "Invalid Refresh Token",
            });
        }
        else {
            //Get Refresh Tokens
            const RefreshTokens = yield (0, Functions_1.GetRefreshToken)(RefreshToken);
            //If token is in RefreshTokens then delete it
            if (RefreshTokens.length > 0) {
                yield (0, Functions_1.DeleteRefreshToken)(RefreshToken);
                res.status(204).json({
                    Message: "Logout Successful",
                });
            }
            else {
                res.status(400).json({
                    Error: "Invalid Refresh Token",
                });
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            Error: error,
        });
    }
}));
