export function PostDishQuery() {
  return `
INSERT INTO MealPlanner.Dish
SELECT * FROM OPENJSON(@Dish)
WITH 
(
  fkDishNameId INT,
  fkIngredientId INT,
  fkUnitId INT,
  UnitCount INT,
  UserId VARCHAR(255)
)
`;
}
