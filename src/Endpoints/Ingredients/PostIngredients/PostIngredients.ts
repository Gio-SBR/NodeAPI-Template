import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { PostIngredientsQuery } from "./PostIngredientsQuery";

const PostIngredient = Router();
PostIngredient.post("/PostIngredient", async (req, res) => {
  const value = await req.body;
  console.log(value);
  const body: ParameterType[] = [
    {
      Name: "Ingredients",
      Value: JSON.stringify(value),
    },
  ];
  const results = await SendQuery(
    PostIngredientsQuery,
    "Ingredient created",
    "Ingredient already exists",
    body
  );
  res.status(results.status).send(results.body);
});

export default PostIngredient;
