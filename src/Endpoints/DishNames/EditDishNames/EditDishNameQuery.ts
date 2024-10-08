export function EditDishNameQuery() {
  return `
  UPDATE MealPlanner.DishName
  SET DishName = @DishName
  WHERE 
    pkDishNameId = @DishNameId
    AND 
    UserId = @UserId
    `;
}
