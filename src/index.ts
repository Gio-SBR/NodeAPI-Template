import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { APIKey } from "./Functions/Base/Auth/APIKey";
import { API_Endpoints } from "./Endpoints/API/InitialiseAPIEndpoints";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use(APIKey);

//Initialize all endpoints
app.use("/api", API_Endpoints);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
