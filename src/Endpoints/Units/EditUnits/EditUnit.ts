import { Application, Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { EditUnitQuery } from "./EditUnitQuery";

const EditUnit = Router();
EditUnit.patch("/EditUnit", async (req, res) => {
  const body: ParameterType[] = [
    {
      Name: "UnitId",
      Value: req.body.UnitId,
    },
    {
      Name: "Unit",
      Value: req.body.Unit,
    },
    {
      Name: "UserId",
      Value: req.body.UserId,
    },
  ];
  const results = await SendQuery(
    EditUnitQuery,
    "Unit edited",
    "Unit not found",
    body
  );
  res.status(results.status).send(results.body);
});

export default EditUnit;
