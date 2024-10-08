"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUnitsQuery = void 0;
function GetUnitsQuery() {
    return `
SELECT
    *
FROM
    MealPlanner.Unit
WHERE
    UserId = @UserId
    `;
}
exports.GetUnitsQuery = GetUnitsQuery;
