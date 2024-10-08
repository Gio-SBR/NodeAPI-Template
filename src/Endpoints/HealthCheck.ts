import { Router } from "express";

const HealthCheck = Router();
HealthCheck.get("/", async (req, res) => {
  res.status(200).send({ Message: "API is up and running!" });
});

export default HealthCheck;
