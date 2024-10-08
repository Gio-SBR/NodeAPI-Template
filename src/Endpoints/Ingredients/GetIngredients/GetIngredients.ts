import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import { GetIngredientsQuery } from "./GetIngredientsQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";

const GetIngredients = Router();
GetIngredients.get("/", async (req, res) => {
  const Params: ParameterType[] = [
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    GetIngredientsQuery,
    undefined,
    "No ingredients found",
    Params
  );
  res.status(results.status).send(results.body);
});

export default GetIngredients;
