import { Application, Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import { GetUnitsQuery } from "./GetUnitsQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";

const GetUnits = Router();
GetUnits.get("/", async (req, res) => {
  const Params: ParameterType[] = [
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    GetUnitsQuery,
    undefined,
    "No units found",
    Params
  );
  res.status(results.status).send(results.body);
});

export default GetUnits;
