import { Router } from "express";
import { HealthCheck } from "./HealthCheck/HealthCheck";

export const API_Endpoints = Router();

API_Endpoints.use("/HealthCheck", HealthCheck);
