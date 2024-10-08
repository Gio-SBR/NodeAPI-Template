export function AddMealPlanQuery() {
  return `
INSERT INTO MealPlanner.MealPlan
SELECT * FROM OPENJSON(@MealPlan)
WITH 
(
  StartOfWeek Date,
  EndOfWeek Date,
  MealPlan VARCHAR(MAX),
  UserId VARCHAR(255)
)
  `;
}
