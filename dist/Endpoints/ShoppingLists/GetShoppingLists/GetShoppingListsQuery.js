"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShoppingListsQuery = void 0;
function GetShoppingListsQuery() {
    return `
SELECT
*
FROM
[MealPlanner].[ShoppingList]
WHERE UserId = @UserId
    `;
}
exports.GetShoppingListsQuery = GetShoppingListsQuery;
