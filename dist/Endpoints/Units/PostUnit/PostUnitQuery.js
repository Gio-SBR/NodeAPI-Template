"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUnitQuery = void 0;
function PostUnitQuery() {
    return `
INSERT INTO MealPlanner.Unit
SELECT * FROM OPENJSON(@Units)
WITH 
(
  Unit VARCHAR(255),
  UserId VARCHAR(255)
)
  `;
}
exports.PostUnitQuery = PostUnitQuery;
