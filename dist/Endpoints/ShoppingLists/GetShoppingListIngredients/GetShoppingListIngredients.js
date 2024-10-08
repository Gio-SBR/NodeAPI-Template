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
const GetShoppingListIngredientsQuery_1 = require("./GetShoppingListIngredientsQuery");
const GetShoppingListIngredients = (0, express_1.Router)();
GetShoppingListIngredients.post("/GetShoppingListIngredients", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield req.body;
    const Params = [
        {
            Name: "DishIds",
            Value: JSON.stringify(body),
        },
    ];
    console.log(body);
    const results = yield (0, SendQuery_1.default)(GetShoppingListIngredientsQuery_1.GetShoppingListIngredientsQuery, undefined, "No ingredients found", Params);
    res.status(results.status).send(results.body);
}));
exports.default = GetShoppingListIngredients;
