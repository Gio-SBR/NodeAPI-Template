import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { EditIngredientQuery } from "./EditIngredientQuery";

const EditIngredient = Router();
EditIngredient.patch("/EditIngredient", async (req, res) => {
  console.log(req.body);
  const Params: ParameterType[] = [
    {
      Name: "IngredientId",
      Value: req.body.IngredientId,
    },
    {
      Name: "Ingredient",
      Value: req.body.Ingredient,
    },
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    EditIngredientQuery,
    "Ingredient edited",
    "Ingredient not found",
    Params
  );
  res.status(results.status).send(results.body);
});

export default EditIngredient;
