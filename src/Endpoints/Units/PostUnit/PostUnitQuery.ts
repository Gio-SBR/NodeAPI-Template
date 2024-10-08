export function PostUnitQuery() {
  return `
INSERT INTO MealPlanner.Unit
SELECT * FROM OPENJSON(@Units)
WITH 
(
  Unit VARCHAR(255),
  UserId VARCHAR(255)
)
  `;
}
