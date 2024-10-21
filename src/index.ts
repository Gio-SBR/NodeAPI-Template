import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { API_Endpoints } from "./Endpoints/API/InitialiseAPIEndpoints";
import { JWTEndpoints } from "./Functions/Base/Authorisation/JWTEndpoints/JWTEndpoints";
import { AuthenticateJWT } from "./Functions/Base/Authorisation/JWTEndpoints/Functions/Tokens/AuthenticateJWT";
import { GetUserScopes } from "./Functions/Base/Authentication/GetUserScopes";
import { SetUser } from "./Functions/Base/Authentication/SetUser";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use("/auth", JWTEndpoints);

//Middleware
app.use(AuthenticateJWT, SetUser);

//Authentication Middleware
const Scopes = ["Access_Health_Check", "Access_API"];

//GetUserScopes
app.use(GetUserScopes);

//Initialize all endpoints
app.use("/api", API_Endpoints);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
