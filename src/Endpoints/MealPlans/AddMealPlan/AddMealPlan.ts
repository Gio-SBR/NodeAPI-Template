import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { AddMealPlanQuery } from "./AddMealPlanQuery";

const AddMealPlan = Router();
AddMealPlan.post("/AddMealPlan", async (req, res) => {
  const value = await req.body;
  const body: ParameterType[] = [
    {
      Name: "MealPlan",
      Value: JSON.stringify(value),
    },
  ];
  const results = await SendQuery(
    AddMealPlanQuery,
    "Meal plan created",
    "Meal plan already exists",
    body
  );
  res.status(results.status).send(results.body);
});

export default AddMealPlan;
