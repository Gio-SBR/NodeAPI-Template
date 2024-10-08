import { Router } from "express";

export const ShopifyGet = Router();

import Shopify from "shopify-api-node";

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_STORE_NAME!,
  apiKey: process.env.SHOPIFY_API_KEY!,
  password: process.env.SHOPIFY_API_SECRET!,
});

ShopifyGet.get("/Locations", async (req, res) => {
  const locations = await shopify.location.list();
  res.status(200).send(locations);
});
