import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { EditDishQuery } from "./EditDishQuery";
import { EditDishRequest } from "./EditDishRequest";

const EditDish = Router();
EditDish.post("/EditDish", async (req, res) => {
  const value = await req.body;
  console.log("value:", value);
  const Params: ParameterType[] = [
    {
      Name: "Dish",
      Value: JSON.stringify(value),
    },
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    EditDishQuery,
    "Dish edited",
    "Dish not found",
    Params
  );
  res.status(results.status).send(results.body);
});

export default EditDish;
