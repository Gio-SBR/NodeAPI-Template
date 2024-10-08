export function GetMealPlansQuery() {
  return `
SELECT
*
FROM
[MealPlanner].[MealPlan]
WHERE UserId = @UserId
    `;
}
