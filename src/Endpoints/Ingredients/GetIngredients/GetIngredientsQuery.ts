export function GetIngredientsQuery() {
  return `
SELECT
*
FROM
MealPlanner.Ingredient
WHERE UserId = @UserId
    `;
}
