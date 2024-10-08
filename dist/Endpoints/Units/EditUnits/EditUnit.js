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
const EditUnitQuery_1 = require("./EditUnitQuery");
const EditUnit = (0, express_1.Router)();
EditUnit.patch("/EditUnit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = [
        {
            Name: "UnitId",
            Value: req.body.UnitId,
        },
        {
            Name: "Unit",
            Value: req.body.Unit,
        },
        {
            Name: "UserId",
            Value: req.body.UserId,
        },
    ];
    const results = yield (0, SendQuery_1.default)(EditUnitQuery_1.EditUnitQuery, "Unit edited", "Unit not found", body);
    res.status(results.status).send(results.body);
}));
exports.default = EditUnit;
