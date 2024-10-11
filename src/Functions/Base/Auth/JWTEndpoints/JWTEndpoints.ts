import { Router } from "express";
import { Login } from "./Login/Login";
import { Refresh } from "./Refresh/Refresh";
import { Logout } from "./Logout/Logout";
import { Register } from "./Register/Register";

export const JWTEndpoints = Router();

JWTEndpoints.use("/", Login, Refresh, Logout, Register);
