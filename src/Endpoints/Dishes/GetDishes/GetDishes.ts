import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { GetDishesQuery } from "./GetDishesQuery";

const GetDishes = Router();

GetDishes.get("/", async (req, res) => {
  const Params: ParameterType[] = [
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    GetDishesQuery,
    undefined,
    "No dishes found",
    Params
  );
  res.status(results.status).send(results.body);
});

export default GetDishes;
