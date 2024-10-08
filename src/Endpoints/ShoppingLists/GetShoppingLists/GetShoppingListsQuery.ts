export function GetShoppingListsQuery() {
  return `
SELECT
*
FROM
[MealPlanner].[ShoppingList]
WHERE UserId = @UserId
    `;
}
