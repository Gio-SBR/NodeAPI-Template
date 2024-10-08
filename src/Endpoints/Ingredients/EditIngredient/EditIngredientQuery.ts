export function EditIngredientQuery() {
  return `
  UPDATE MealPlanner.Ingredient
  SET Ingredient = @Ingredient
  WHERE 
      pkIngredientId = @IngredientId
      AND 
      UserId = @UserId
    `;
}
