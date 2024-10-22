import { UUID } from "crypto";

export type User = {
  pkUserId: number;
  Username: string;
  Password: string;
};

export type TokenUser = {
  TokenID: UUID;
  Username: string;
  UserId: string;
  Scopes: string[];
  Company: string;
  TokenCreationDate: string;
};
