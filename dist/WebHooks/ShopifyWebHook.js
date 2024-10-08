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
exports.ShopifyWebHook = void 0;
const express_1 = require("express");
const SendQuery_1 = __importDefault(require("../CRUD/SendQuery/SendQuery"));
const __1 = require("..");
function Query() {
    return `
    INSERT INTO [dbo].[WebHookTests]
    VALUES('Shopify',@WebHookResponse)
    `;
}
exports.ShopifyWebHook = (0, express_1.Router)();
exports.ShopifyWebHook.post("/Test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ShopifyLocations = yield __1.shopify.location.list();
    const body = req.body;
    const items = [];
    body.refund_line_items.map((rli) => __awaiter(void 0, void 0, void 0, function* () {
        const refundLocation = ShopifyLocations.filter((l) => (l.id = rli.location_id));
        const product = yield __1.shopify.product.get(rli.line_item.product_id);
        items.push({
            itemid: rli.line_item.id,
            refundLocation: refundLocation[0].name,
            quantity: rli.quantity,
            SKU: rli.line_item.sku,
            product: product,
        });
    }));
    const Params = [
        {
            Name: "WebHookResponse",
            Value: JSON.stringify({
                items: items,
                body: body,
            }),
        },
    ];
    yield (0, SendQuery_1.default)(Query, "Webhook created", "Webhook already exists", Params);
    res.status(200).send("ok");
}));
