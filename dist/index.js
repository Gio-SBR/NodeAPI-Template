"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopify = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const apiEndpoints_1 = __importDefault(require("./apiEndpoints"));
const APIKey_1 = require("./CRUD/Auth/APIKey");
const UserIdHeader_1 = require("./CRUD/Auth/UserIdHeader");
const WebHookEndpoints_1 = require("./WebHookEndpoints");
const shopify_api_node_1 = __importDefault(require("shopify-api-node"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
exports.shopify = new shopify_api_node_1.default({
    shopName: process.env.SHOPIFY_STORE_NAME,
    apiKey: process.env.SHOPIFY_API_KEY,
    password: process.env.SHOPIFY_API_SECRET,
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//  app.use(APIKey, UserIdHeader);
//Initialize all endpoints
app.use("/api", APIKey_1.APIKey, UserIdHeader_1.UserIdHeader, apiEndpoints_1.default);
app.use("/webhook", WebHookEndpoints_1.WebHookEndpoints);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
