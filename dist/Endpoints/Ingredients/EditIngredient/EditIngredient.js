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
const EditIngredientQuery_1 = require("./EditIngredientQuery");
const EditIngredient = (0, express_1.Router)();
EditIngredient.patch("/EditIngredient", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const Params = [
        {
            Name: "IngredientId",
            Value: req.body.IngredientId,
        },
        {
            Name: "Ingredient",
            Value: req.body.Ingredient,
        },
        {
            Name: "UserId",
            Value: req.body.UserId,
        },
    ];
    const results = yield (0, SendQuery_1.default)(EditIngredientQuery_1.EditIngredientQuery, "Ingredient edited", "Ingredient not found", Params);
    res.status(results.status).send(results.body);
}));
exports.default = EditIngredient;
