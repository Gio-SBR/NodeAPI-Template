"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIngredientsQuery = void 0;
function GetIngredientsQuery() {
    return `
SELECT
*
FROM
MealPlanner.Ingredient
WHERE UserId = @UserId
    `;
}
exports.GetIngredientsQuery = GetIngredientsQuery;
