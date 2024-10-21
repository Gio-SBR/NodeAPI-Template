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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refresh = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Functions_1 = require("../Functions");
exports.Refresh = (0, express_1.Router)();
exports.Refresh.post("/Refresh", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const RefreshToken = req.body.RefreshToken;
        //If token === null then return error
        if (RefreshToken === null) {
            res.status(400).json({
                Error: "Invalid Refresh Token",
            });
        }
        //Get Refresh Tokens
        const RefreshTokens = yield (0, Functions_1.GetRefreshToken)(RefreshToken);
        //If token is not in RefreshTokens then return error
        if (RefreshTokens.length > 0) {
            //Verify Token
            jsonwebtoken_1.default.verify(RefreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => __awaiter(void 0, void 0, void 0, function* () {
                if (err) {
                    res.status(403).json({
                        Error: "Invalid Refresh Token",
                    });
                }
                else {
                    //Generate new tokens
                    const Tokens = yield (0, Functions_1.GenerateTokens)({
                        Username: user.Username,
                        DeleteOld: true,
                        OldToken: RefreshToken,
                    });
                    //Return Tokens
                    res.status(200).json(Tokens);
                }
            }));
        }
        else {
            res.status(400).json({
                Error: "Invalid Refresh Token",
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            Error: error,
        });
    }
}));
