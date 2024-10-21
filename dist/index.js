"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const InitialiseAPIEndpoints_1 = require("./Endpoints/API/InitialiseAPIEndpoints");
const JWTEndpoints_1 = require("./Functions/Base/Auth/JWTEndpoints/JWTEndpoints");
const AuthenticateJWT_1 = require("./Functions/Base/Auth/JWTEndpoints/Functions/Tokens/AuthenticateJWT");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/auth", JWTEndpoints_1.JWTEndpoints);
//Middleware
app.use(AuthenticateJWT_1.AuthenticateJWT);
//Initialize all endpoints
app.use("/api", InitialiseAPIEndpoints_1.API_Endpoints);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
