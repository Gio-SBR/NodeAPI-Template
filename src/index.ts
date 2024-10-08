import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Api_Endpoints from "./apiEndpoints";
import { APIKey } from "./CRUD/Auth/APIKey";
import { UserIdHeader } from "./CRUD/Auth/UserIdHeader";
import { WebHookEndpoints } from "./WebHookEndpoints";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors());

//  app.use(APIKey, UserIdHeader);

//Initialize all endpoints
app.use("/api", APIKey, UserIdHeader, Api_Endpoints);
app.use("/webhook", WebHookEndpoints);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
