"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDishesQuery = void 0;
function GetDishesQuery() {
    return `
	SELECT
	d.pkDishId,
	dn.pkDishNameId,
	dn.DishName,
	i.pkIngredientId,
	i.Ingredient,
	u.pkUnitId,
	u.Unit,
	d.UnitCount
	FROM
	[MealPlanner].[Dish] d

	INNER JOIN
		[MealPlanner].[DishName] dn
			ON
				d.fkDishNameId = dn.pkDishNameId

	INNER JOIN
		[MealPlanner].[Ingredient] i 
			ON
				d.fkIngredientId = i.pkIngredientId

	INNER JOIN
		[MealPlanner].[Unit] u 
			ON
				d.fkUnitId = u.pkUnitId

	WHERE d.UserId = @UserId
	`;
}
exports.GetDishesQuery = GetDishesQuery;
