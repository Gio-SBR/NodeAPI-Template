import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { GetShoppingListIngredientsQuery } from "./GetShoppingListIngredientsQuery";

const GetShoppingListIngredients = Router();
GetShoppingListIngredients.post(
  "/GetShoppingListIngredients",
  async (req, res) => {
    const body = await req.body;
    const Params: ParameterType[] = [
      {
        Name: "DishIds",
        Value: JSON.stringify(body),
      },
    ];

    console.log(body);
    const results = await SendQuery(
      GetShoppingListIngredientsQuery,
      undefined,
      "No ingredients found",
      Params
    );
    res.status(results.status).send(results.body);
  }
);

export default GetShoppingListIngredients;
