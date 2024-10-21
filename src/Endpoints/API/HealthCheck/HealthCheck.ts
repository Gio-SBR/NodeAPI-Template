import { Router } from "express";
import { CheckScope } from "../../../Functions/Base/Authentication/CheckScope";

export const HealthCheck = Router();
HealthCheck.get("/", CheckScope("Access_Health_Check"), async (req, res) => {
  res.status(200).send({ Message: "API is up and running!" });
});

HealthCheck.post("/", CheckScope("Access_API"), async (req, res) => {
  res.status(200).send({ Message: "API is changed and running!" });
});
