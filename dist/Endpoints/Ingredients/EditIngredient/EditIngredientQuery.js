"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditIngredientQuery = void 0;
function EditIngredientQuery() {
    return `
  UPDATE MealPlanner.Ingredient
  SET Ingredient = @Ingredient
  WHERE 
      pkIngredientId = @IngredientId
      AND 
      UserId = @UserId
    `;
}
exports.EditIngredientQuery = EditIngredientQuery;
