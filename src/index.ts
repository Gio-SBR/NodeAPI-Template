import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { API_Endpoints } from "./Endpoints/API/InitialiseAPIEndpoints";
import { JWTEndpoints } from "./Functions/Base/Auth/JWTEndpoints/JWTEndpoints";
import { AuthenticateJWT } from "./Functions/Base/Auth/AuthenticateJWT";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use("/auth", JWTEndpoints);

//Middleware
app.use(AuthenticateJWT);

//Initialize all endpoints
app.use("/api", API_Endpoints);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
