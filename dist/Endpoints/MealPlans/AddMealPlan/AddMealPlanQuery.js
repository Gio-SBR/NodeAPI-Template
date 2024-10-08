"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMealPlanQuery = void 0;
function AddMealPlanQuery() {
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
exports.AddMealPlanQuery = AddMealPlanQuery;
