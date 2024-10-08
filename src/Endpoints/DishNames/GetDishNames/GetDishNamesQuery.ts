export function GetDishNamesQuery() {
  return `
SELECT
*
FROM
MealPlanner.DishName
WHERE UserId = @UserId
    `;
}
