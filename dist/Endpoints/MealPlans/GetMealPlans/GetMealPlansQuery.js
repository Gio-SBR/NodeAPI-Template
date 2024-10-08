"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMealPlansQuery = void 0;
function GetMealPlansQuery() {
    return `
SELECT
*
FROM
[MealPlanner].[MealPlan]
WHERE UserId = @UserId
    `;
}
exports.GetMealPlansQuery = GetMealPlansQuery;
