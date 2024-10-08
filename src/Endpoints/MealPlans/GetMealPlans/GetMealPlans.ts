import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import { GetMealPlansQuery } from "./GetMealPlansQuery";

const GetMealPlans = Router();
GetMealPlans.get("/", async (req, res) => {
  const Params = [
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    GetMealPlansQuery,
    undefined,
    "No meal plans found",
    Params
  );
  res.status(results.status).send(results.body);
});

export default GetMealPlans;
