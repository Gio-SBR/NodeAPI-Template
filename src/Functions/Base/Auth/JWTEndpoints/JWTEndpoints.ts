import { Router } from "express";
import { Login } from "./Login";
import { Refresh } from "./Refresh";
import { Logout } from "./Logout";
import { Register } from "./Register/Register";

export const JWTEndpoints = Router();

JWTEndpoints.use("/", Login, Refresh, Logout, Register);
