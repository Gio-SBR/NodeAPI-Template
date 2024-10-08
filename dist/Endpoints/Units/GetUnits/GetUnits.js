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
const express_1 = require("express");
const SendQuery_1 = __importDefault(require("../../../CRUD/SendQuery/SendQuery"));
const GetUnitsQuery_1 = require("./GetUnitsQuery");
const GetUnits = (0, express_1.Router)();
GetUnits.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Params = [
        {
            Name: "UserId",
            Value: req.body.UserId,
        },
    ];
    const results = yield (0, SendQuery_1.default)(GetUnitsQuery_1.GetUnitsQuery, undefined, "No units found", Params);
    res.status(results.status).send(results.body);
}));
exports.default = GetUnits;
