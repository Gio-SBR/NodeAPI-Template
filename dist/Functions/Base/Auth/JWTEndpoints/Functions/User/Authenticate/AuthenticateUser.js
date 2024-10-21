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
exports.AuthenticateUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const GetUser_1 = require("../GetUser");
function AuthenticateUser(Username, Password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (Username === null || Password === null) {
                return false;
            }
            else {
                const GetUserResponse = yield (0, GetUser_1.GetUser)(Username);
                if (GetUserResponse.body.length > 0) {
                    let DBUser = GetUserResponse.body[0];
                    if (yield bcrypt_1.default.compare(Password, DBUser.Password)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    });
}
exports.AuthenticateUser = AuthenticateUser;
