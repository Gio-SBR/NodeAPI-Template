"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDishQuery = void 0;
function PostDishQuery() {
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
exports.PostDishQuery = PostDishQuery;
