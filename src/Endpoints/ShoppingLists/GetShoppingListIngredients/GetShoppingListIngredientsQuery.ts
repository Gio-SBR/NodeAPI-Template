export function GetShoppingListIngredientsQuery() {
  return `
SELECT
i.Ingredient,
d.UnitCount,
u.Unit
FROM
	(
	SELECT
	fkIngredientId,
	fkUnitId,
	SUM(UnitCount) AS UnitCount
	FROM
	[MealPlanner].[Dish] d

	INNER JOIN
		(
			SELECT
			MealId,
			UserId
			FROM
			OPENJSON(@DishIds)
			WITH(
				MealId INT,
				UserId VARCHAR(255)
			)
		) AS s

		ON
			s.MealId = d.fkDishNameId
			AND
			s.UserId = d.UserId

	GROUP BY fkIngredientId, fkUnitId
	) AS d
INNER JOIN
	[MealPlanner].[Ingredient] i 
		ON
			i.pkIngredientId = d.fkIngredientId

INNER JOIN
	[MealPlanner].[Unit] u 
		ON
			u.pkUnitId = d.fkUnitId

ORDER BY i.Ingredient, d.UnitCount, u.Unit
	`;
}
