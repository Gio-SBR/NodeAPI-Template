export type WebHookResponse = {
  id: number;
  order_id: number;
  created_at: string;
  note: string;
  user_id: number;
  processed_at: string;
  duties: [];
  total_duties_set: {
    shop_money: {
      amount: string;
      currency_code: string;
    };
    presentment_money: {
      amount: string;
      currency_code: string;
    };
  };
  return: {
    id: number;
    admin_graphql_api_id: string;
  };
  restock: boolean;
  refund_shipping_lines: [];
  admin_graphql_api_id: string;
  order_adjustments: [];
  refund_line_items: [
    {
      id: number;
      line_item_id: number;
      quantity: number;
      restock_type: string;
      location_id: number;
      subtotal: number;
      total_tax: number;
      line_item: {
        id: number;
        variant_id: boolean;
        title: string;
        quantity: number;
        sku: string;
        variant_title: string;
        vendor: string;
        fulfillment_service: string;
        product_id: number;
        requires_shipping: boolean;
        taxable: boolean;
        gift_card: boolean;
        name: string;
        variant_inventory_management: any;
        properties: [
          {
            name: string;
            value: string;
          }
        ];
        product_exists: boolean;
        fulfillable_quantity: number;
        grams: number;
        price: string;
        total_discount: string;
        fulfillment_status: string;
        price_set: {
          shop_money: {
            amount: string;
            currency_code: string;
          };
          presentment_money: {
            amount: string;
            currency_code: string;
          };
        };
        total_discount_set: {
          shop_money: {
            amount: string;
            currency_code: string;
          };
          presentment_money: {
            amount: string;
            currency_code: string;
          };
        };
        discount_allocations: [];
        admin_graphql_api_id: string;
        duties: [];
        tax_lines: [];
      };
      subtotal_set: {
        shop_money: {
          amount: string;
          currency_code: string;
        };
        presentment_money: {
          amount: string;
          currency_code: string;
        };
      };
      total_tax_set: {
        shop_money: {
          amount: string;
          currency_code: string;
        };
        presentment_money: {
          amount: string;
          currency_code: string;
        };
      };
    }
  ];
  transactions: [
    {
      id: number;
      order_id: number;
      kind: string;
      gateway: string;
      status: string;
      message: string;
      created_at: string;
      test: boolean;
      authorization: any;
      location_id: number;
      user_id: number;
      parent_id: number;
      processed_at: string;
      device_id: number;
      error_code: any;
      source_name: string; // "pos"
      receipt: {};
      amount: string;
      currency: string;
      payment_id: string;
      total_unsettled_set: {
        presentment_money: {
          amount: string;
          currency: string;
        };
        shop_money: {
          amount: string;
          currency: string;
        };
      };
      manual_payment_gateway: boolean;
      admin_graphql_api_id: string;
    }
  ];
};
