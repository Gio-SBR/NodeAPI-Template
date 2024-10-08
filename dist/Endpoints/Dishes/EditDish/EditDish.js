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
const EditDishQuery_1 = require("./EditDishQuery");
const EditDish = (0, express_1.Router)();
EditDish.post("/EditDish", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield req.body;
    console.log("value:", value);
    const Params = [
        {
            Name: "Dish",
            Value: JSON.stringify(value),
        },
        {
            Name: "UserId",
            Value: req.body.UserId,
        },
    ];
    const results = yield (0, SendQuery_1.default)(EditDishQuery_1.EditDishQuery, "Dish edited", "Dish not found", Params);
    res.status(results.status).send(results.body);
}));
exports.default = EditDish;
