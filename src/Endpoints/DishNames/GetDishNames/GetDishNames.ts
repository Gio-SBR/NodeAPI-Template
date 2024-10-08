import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import { GetDishNamesQuery } from "./GetDishNamesQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";

const GetDishNames = Router();
GetDishNames.get("/", async (req, res) => {
  const Params: ParameterType[] = [
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    GetDishNamesQuery,
    undefined,
    "No dish names found",
    Params
  );
  res.status(results.status).send(results.body);
});

export default GetDishNames;
