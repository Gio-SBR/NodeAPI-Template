"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUnitQuery = void 0;
function EditUnitQuery() {
    return `
UPDATE MealPlanner.Unit
SET Unit = @Unit
WHERE 
    pkUnitId = @UnitId
    AND 
    UserId = @UserId
    `;
}
exports.EditUnitQuery = EditUnitQuery;
