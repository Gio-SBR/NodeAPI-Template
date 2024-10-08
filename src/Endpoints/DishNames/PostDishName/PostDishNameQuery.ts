export function PostDishNameQuery() {
  return `INSERT INTO MealPlanner.DishName
SELECT * FROM OPENJSON(@DishName)
WITH 
(
  DishName VARCHAR(MAX),
  UserId VARCHAR(255)
) as json

SELECT TOP 1 * FROM [MealPlanner].[DishName]
ORDER BY pkDishNameId DESC
`;
}
