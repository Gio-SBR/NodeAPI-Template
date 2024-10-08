import { Router } from "express";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import { PostDishNameQuery } from "./PostDishNameQuery";

const PostDishName = Router();
PostDishName.post("/PostDishName", async (req, res) => {
  const value = await req.body;
  const body: ParameterType[] = [
    {
      Name: "DishName",
      Value: JSON.stringify(value),
    },
  ];
  const results = await SendQuery(
    PostDishNameQuery,
    "Dish name created",
    "Dish name already exists",
    body
  );
  res.status(results.status).send(results.body);
});

export default PostDishName;
