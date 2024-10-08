import { Router } from "express";
import SendQuery from "../../../CRUD/SendQuery/SendQuery";
import ParameterType from "../../../CRUD/SendQuery/ParameterType";
import { PostUnitQuery } from "./PostUnitQuery";

const PostUnit = Router();
PostUnit.post("/PostUnit", async (req, res) => {
  const value = await req.body;
  const body: ParameterType[] = [
    {
      Name: "Units",
      Value: JSON.stringify(value),
    },
  ];
  const results = await SendQuery(
    PostUnitQuery,
    "Unit created",
    "Unit already exists",
    body
  );
  res.status(results.status).send(results.body);
});

export default PostUnit;
