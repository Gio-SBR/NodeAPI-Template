import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import { GetShoppingListsQuery } from "./GetShoppingListsQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";

const GetShoppingLists = Router();
GetShoppingLists.get("/", async (req, res) => {
  const Params: ParameterType[] = [
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    GetShoppingListsQuery,
    undefined,
    "No shopping lists found",
    Params
  );
  res.status(results.status).send(results.body);
});

export default GetShoppingLists;
