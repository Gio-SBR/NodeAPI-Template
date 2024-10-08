import { Router } from "express";
import SendQuery from "../CRUD/SendQuery/SendQuery";
import { WebHookResponse } from "./WebHookResponse";
import Shopify from "shopify-api-node";

export const shopify = new Shopify({
  shopName: process.env.SHOPIFY_STORE_NAME!,
  apiKey: process.env.SHOPIFY_API_KEY!,
  password: process.env.SHOPIFY_API_SECRET!,
});

function Query() {
  return `
    INSERT INTO [dbo].[WebHookTests]
    VALUES('Shopify',@WebHookResponse)
    `;
}

export const ShopifyWebHook = Router();

ShopifyWebHook.post("/Test", async (req, res) => {
  const ShopifyLocations = await shopify.location.list();
  const body = req.body as WebHookResponse;
  const items: any[] = [];
  await Promise.all(
    body.refund_line_items.map(async (rli) => {
      const refundLocation = ShopifyLocations.filter(
        (l) => (l.id = rli.location_id)
      );
      const product = await shopify.product.get(rli.line_item.product_id);

      items.push({
        itemid: rli.line_item.id,
        refundLocation: refundLocation[0].name,
        quantity: rli.quantity,
        SKU: rli.line_item.sku,
        product: product,
      });
    })
  );
  const Params = [
    {
      Name: "WebHookResponse",
      Value: JSON.stringify({
        items: items,
        body: body,
      }),
    },
  ];
  await SendQuery(Query, "Webhook created", "Webhook already exists", Params);
  res.status(200).send("ok");
});
