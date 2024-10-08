import dotenv from "dotenv";

dotenv.config();

export const DBConnectionString = process.env.DB_CONNECTION_STRING;

export const DatabaseConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
  },
  port: 1433,
};
