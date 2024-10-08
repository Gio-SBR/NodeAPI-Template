"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditDishNameQuery = void 0;
function EditDishNameQuery() {
    return `
  UPDATE MealPlanner.DishName
  SET DishName = @DishName
  WHERE 
    pkDishNameId = @DishNameId
    AND 
    UserId = @UserId
    `;
}
exports.EditDishNameQuery = EditDishNameQuery;
