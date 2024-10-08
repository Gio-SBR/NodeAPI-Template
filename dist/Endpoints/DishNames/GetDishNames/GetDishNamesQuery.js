"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDishNamesQuery = void 0;
function GetDishNamesQuery() {
    return `
SELECT
*
FROM
MealPlanner.DishName
WHERE UserId = @UserId
    `;
}
exports.GetDishNamesQuery = GetDishNamesQuery;
