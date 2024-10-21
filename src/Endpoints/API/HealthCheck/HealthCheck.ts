import { Router } from "express";
import { CheckUserScope } from "../../../Functions/Base/Authentication/CheckUserScope";

export const HealthCheck = Router();
HealthCheck.get(
  "/",
  CheckUserScope("Access_Health_Check"),
  async (req, res) => {
    res.status(200).send({ Message: "API is up and running!" });
  }
);

HealthCheck.post("/", CheckUserScope("Access_API"), async (req, res) => {
  res.status(200).send({ Message: "API is changed and running!" });
});
