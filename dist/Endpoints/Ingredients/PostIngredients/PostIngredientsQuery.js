"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostIngredientsQuery = void 0;
function PostIngredientsQuery() {
    return `
INSERT INTO MealPlanner.Ingredient
SELECT * FROM OPENJSON(@Ingredients)
WITH 
(
  Ingredient VARCHAR(255),
  UserId VARCHAR(255)
)
  `;
}
exports.PostIngredientsQuery = PostIngredientsQuery;
