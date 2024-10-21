import { Router } from "express";
import { Login } from "./Login";
import { Register } from "./Register";
import { Logout } from "./Logout";
import { Refresh } from "./Refresh";

export const JWTEndpoints = Router();

JWTEndpoints.use("/", Login, Register, Logout, Refresh);
