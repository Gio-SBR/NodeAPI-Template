export function AddShoppingListQuery() {
  return `
INSERT INTO MealPlanner.ShoppingList
SELECT * FROM OPENJSON(@ShoppingList)
WITH 
(
  StartOfWeek Date,
  EndOfWeek Date,
  ShoppingList VARCHAR(MAX),
  UserId VARCHAR(255)
)
  `;
}
