import { Router } from "express";
import { Login } from "./Login";
import { Refresh } from "./Refresh";
import { Logout } from "./Logout";

export const JWTEndpoints = Router();

JWTEndpoints.use("/", Login, Refresh, Logout);

export let RefreshTokens: string[] = [];

export function SetRefreshTokens(
  AddOrRemove: "Add" | "Remove",
  RefreshToken: string
) {
  if (AddOrRemove === "Add") {
    RefreshTokens.push(RefreshToken);
  } else if (AddOrRemove === "Remove") {
    RefreshTokens = RefreshTokens.filter((t) => t !== RefreshToken);
  }
}
