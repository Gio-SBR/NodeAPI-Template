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
const PostIngredientsQuery_1 = require("./PostIngredientsQuery");
const PostIngredient = (0, express_1.Router)();
PostIngredient.post("/PostIngredient", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield req.body;
    console.log(value);
    const body = [
        {
            Name: "Ingredients",
            Value: JSON.stringify(value),
        },
    ];
    const results = yield (0, SendQuery_1.default)(PostIngredientsQuery_1.PostIngredientsQuery, "Ingredient created", "Ingredient already exists", body);
    res.status(results.status).send(results.body);
}));
exports.default = PostIngredient;
