export function PostIngredientsQuery() {
  return `
INSERT INTO MealPlanner.Ingredient
SELECT * FROM OPENJSON(@Ingredients)
WITH 
(
  Ingredient VARCHAR(255),
  UserId VARCHAR(255)
)
  `;
}
