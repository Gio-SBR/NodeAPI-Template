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
exports.GetRefreshToken = void 0;
const SendQuery_1 = __importDefault(require("../../../../SendQuery/SendQuery"));
function GetRefreshToken(RefreshToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const Token = (yield (0, SendQuery_1.default)(GetRefreshToken, undefined, "Error when getting Refresh Tokens", [{ Name: "RefreshToken", Value: RefreshToken }])).body;
        return Token;
    });
}
exports.GetRefreshToken = GetRefreshToken;
