import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { EditDishNameQuery } from "./EditDishNameQuery";

const EditDishName = Router();
EditDishName.patch("/EditDishName", async (req, res) => {
  const body: ParameterType[] = [
    {
      Name: "DishNameId",
      Value: req.body.DishNameId,
    },
    {
      Name: "DishName",
      Value: req.body.DishName,
    },
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    EditDishNameQuery,
    "Dish name edited",
    "Dish name not found",
    body
  );
  res.status(results.status).send(results.body);
});

export default EditDishName;
