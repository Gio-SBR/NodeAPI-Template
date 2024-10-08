export function GetUnitsQuery() {
  return `
SELECT
    *
FROM
    MealPlanner.Unit
WHERE
    UserId = @UserId
    `;
}
