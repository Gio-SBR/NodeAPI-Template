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
exports.ShopifyGet = void 0;
const express_1 = require("express");
exports.ShopifyGet = (0, express_1.Router)();
const shopify_api_node_1 = __importDefault(require("shopify-api-node"));
const shopify = new shopify_api_node_1.default({
    shopName: process.env.SHOPIFY_STORE_NAME,
    apiKey: process.env.SHOPIFY_API_KEY,
    password: process.env.SHOPIFY_API_SECRET,
});
exports.ShopifyGet.get("/Locations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const locations = yield shopify.location.list();
    res.status(200).send(locations);
}));
