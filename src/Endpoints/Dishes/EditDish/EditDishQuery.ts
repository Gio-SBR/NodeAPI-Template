export function EditDishQuery() {
  return `
UPDATE MealPlanner.Dish
SET
fkDishNameId = ISNULL(j.pkDishNameId, d.fkDishNameId),
fkIngredientId = ISNULL(j.pkIngredientId, d.fkIngredientId),
fkUnitId = ISNULL(j.pkUnitId, d.fkUnitId),
UnitCount = ISNULL(j.UnitCount, d.UnitCount)
FROM
MealPlanner.Dish d
INNER JOIN
(
    SELECT
    *
    FROM
    OPENJSON(@Dish)
    WITH
    (
        pkDishId INT,
        pkDishNameId INT,
        DishName VARCHAR(MAX),
        pkIngredientId INT,
        Ingredient VARCHAR(MAX),
        pkUnitId INT,
        Unit VARCHAR(MAX),
        UnitCount INT,
        UserId VARCHAR(255)
    )
) j
ON
    d.pkDishId = j.pkDishId
    AND
    d.UserId = j.UserId

INSERT INTO MealPlanner.Dish
SELECT
AddDish.pkDishNameId AS fkDishNameId,
AddDish.pkIngredientId AS fkIngredientId,
AddDish.pkUnitId AS fkUnitId,
AddDish.UnitCount,
AddDish.UserId
FROM
    OPENJSON(@Dish)
    WITH
    (
        pkDishId INT,
        pkDishNameId INT,
        DishName VARCHAR(MAX),
        pkIngredientId INT,
        Ingredient VARCHAR(MAX),
        pkUnitId INT,
        Unit VARCHAR(MAX),
        UnitCount INT,
        UserId VARCHAR(255)
    ) AS AddDish
WHERE
    AddDish.pkDishId = 0
`;
}
