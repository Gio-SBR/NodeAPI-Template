import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { PostDishQuery } from "./PostDishQuery";

const PostDish = Router();
PostDish.post("/PostDish", async (req, res) => {
  const value = await req.body;
  const Params: ParameterType[] = [
    {
      Name: "Dish",
      Value: JSON.stringify(value),
    },
  ];
  const results = await SendQuery(
    PostDishQuery,
    "Dish created",
    "Dish not created",
    Params
  );
  res.status(results.status).send(results.body);
});

export default PostDish;
