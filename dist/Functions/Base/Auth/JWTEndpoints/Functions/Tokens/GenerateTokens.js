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
exports.GenerateTokens = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AddNewRefreshToken_1 = require("./AddNewRefreshToken");
const DeleteRefreshToken_1 = require("./DeleteRefreshToken");
function GenerateTokens(Props) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const Username = "";
            const DeleteOld = false;
            const OldToken = "";
            if (Props.DeleteOld) {
                const Username = Props.Username;
                const DeleteOld = Props.DeleteOld;
                const OldToken = Props.OldToken;
            }
            //User Object
            const User = {
                TokenID: crypto.randomUUID(),
                Username: Username,
                TokenCreationDate: new Date().toDateString(),
            };
            //Create Tokens
            const NewTokens = {
                AccessToken: jsonwebtoken_1.default.sign(User, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRATION_TIME,
                }),
                RefreshToken: jsonwebtoken_1.default.sign(User, process.env.JWT_REFRESH_SECRET),
            };
            // Delete Old Token
            if (DeleteOld) {
                //delete current token
                yield (0, DeleteRefreshToken_1.DeleteRefreshToken)(OldToken);
            }
            //Store new refresh token
            yield (0, AddNewRefreshToken_1.AddNewRefreshToken)(Username, NewTokens.RefreshToken);
            return NewTokens;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.GenerateTokens = GenerateTokens;
