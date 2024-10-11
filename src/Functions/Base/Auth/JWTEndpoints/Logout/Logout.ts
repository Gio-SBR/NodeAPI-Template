import { Router } from "express";
import { DeleteRefreshToken, GetRefreshToken } from "../Refresh/Query";
import SendQuery from "../../../SendQuery/SendQuery";

export const Logout = Router();

Logout.post("/Logout", async (req, res) => {
  try {
    const RefreshToken = req.body.RefreshToken;
    //If token === null then return error
    if (RefreshToken === null) {
      res.status(400).json({
        Error: "Invalid Refresh Token",
      });
    } else {
      //Get Refresh Tokens
      const RefreshTokens = (
        await SendQuery(
          GetRefreshToken,
          undefined,
          "Error when getting Refresh Tokens",
          [{ Name: "RefreshToken", Value: RefreshToken }]
        )
      ).body;

      //If token is in RefreshTokens then delete it
      if (RefreshTokens.length > 0) {
        await SendQuery(
          DeleteRefreshToken,
          "Refresh Token Deleted",
          "Error when deleting Refresh Token",
          [{ Name: "RefreshToken", Value: RefreshToken! }]
        );
        res.status(204).json({
          Message: "Logout Successful",
        });
      } else {
        res.status(400).json({
          Error: "Invalid Refresh Token",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      Error: error,
    });
  }
});
