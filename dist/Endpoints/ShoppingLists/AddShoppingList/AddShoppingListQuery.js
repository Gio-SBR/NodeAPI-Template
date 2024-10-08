"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddShoppingListQuery = void 0;
function AddShoppingListQuery() {
    return `
INSERT INTO MealPlanner.ShoppingList
SELECT * FROM OPENJSON(@ShoppingList)
WITH 
(
  StartOfWeek Date,
  EndOfWeek Date,
  ShoppingList VARCHAR(MAX),
  UserId VARCHAR(255)
)
  `;
}
exports.AddShoppingListQuery = AddShoppingListQuery;
