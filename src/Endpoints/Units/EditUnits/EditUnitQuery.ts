export function EditUnitQuery() {
  return `
UPDATE MealPlanner.Unit
SET Unit = @Unit
WHERE 
    pkUnitId = @UnitId
    AND 
    UserId = @UserId
    `;
}
