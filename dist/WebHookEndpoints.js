"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebHookEndpoints = void 0;
const express_1 = require("express");
const ShopifyWebHook_1 = require("./WebHooks/ShopifyWebHook");
const ShopifyGet_1 = require("./WebHooks/ShopifyGet");
exports.WebHookEndpoints = (0, express_1.Router)();
exports.WebHookEndpoints.use("/Shopify", ShopifyWebHook_1.ShopifyWebHook, ShopifyGet_1.ShopifyGet);
