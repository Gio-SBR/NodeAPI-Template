import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { API_Endpoints } from "./Endpoints/API/InitialiseAPIEndpoints";
import { JWTEndpoints } from "./Functions/Base/Authorisation/JWTEndpoints/JWTEndpoints";
import { AuthenticateJWT } from "./Functions/Base/Authorisation/JWTEndpoints/Functions/Tokens/AuthenticateJWT";
import { CheckCompanyScope } from "./Functions/Base/Authentication/CheckCompanyScope";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use("/auth", JWTEndpoints);

//Middleware
app.use(AuthenticateJWT);

//console log user details
app.use((req: any, res: any, next: any) => {
  console.log("User: ", req.user);
  next();
});

//Initialize all endpoints
app.use("/api", CheckCompanyScope("Access_API"), API_Endpoints);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
