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
exports.Register = void 0;
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const SendQuery_1 = __importDefault(require("../../../SendQuery/SendQuery"));
const Query_1 = require("./Query");
exports.Register = (0, express_1.Router)();
exports.Register.post("/Register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const RequestedUserDetails = {
            Username: req.body.Username,
            Password: req.body.Password,
        };
        //Check if user already exists
        const Users = yield (0, SendQuery_1.default)(Query_1.GetUsers, "User Exists", "User Does Not Exist", [{ Name: "Username", Value: RequestedUserDetails.Username }]);
        if (Users.body.length > 0) {
            res.status(400).json({
                Error: "User Already Exists",
            });
        }
        else {
            //Hash Password
            const HashedPassword = yield bcrypt_1.default.hash(RequestedUserDetails.Password, 10);
            //Store User
            const result = yield (0, SendQuery_1.default)(Query_1.AddUser, "Registration Successful", "Registration Failed", [
                {
                    Name: "Username",
                    Value: RequestedUserDetails.Username,
                },
                {
                    Name: "Password",
                    Value: HashedPassword,
                },
            ]);
            res.status(200).send({ Message: "Registration Successful" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            Error: error,
        });
    }
}));
