import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { AddShoppingListQuery } from "./AddShoppingListQuery";

const AddShoppingList = Router();
AddShoppingList.post("/AddShoppingList", async (req, res) => {
  const value = await req.body;
  const body: ParameterType[] = [
    {
      Name: "ShoppingList",
      Value: JSON.stringify(value),
    },
  ];
  const results = await SendQuery(
    AddShoppingListQuery,
    "Shopping list created",
    "Shopping list already exists",
    body
  );
  res.status(results.status).send(results.body);
});

export default AddShoppingList;
