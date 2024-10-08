import { Router } from "express";
import { ShopifyWebHook } from "./WebHooks/ShopifyWebHook";
import { ShopifyGet } from "./WebHooks/ShopifyGet";

export const WebHookEndpoints = Router();

WebHookEndpoints.use("/Shopify", ShopifyWebHook, ShopifyGet);
