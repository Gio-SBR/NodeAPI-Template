import { Router } from "express";
import HealthCheck from "./Endpoints/HealthCheck";
import GetUnits from "./Endpoints/Units/GetUnits/GetUnits";

import GetIngredients from "./Endpoints/Ingredients/GetIngredients/GetIngredients";
import PostNewIngredient from "./Endpoints/Ingredients/PostIngredients/PostIngredients";
import GetDishDetails from "./Endpoints/Dishes/GetDishes/GetDishes";
import GetDishNames from "./Endpoints/DishNames/GetDishNames/GetDishNames";
import EditIngredient from "./Endpoints/Ingredients/EditIngredient/EditIngredient";
import EditUnit from "./Endpoints/Units/EditUnits/EditUnit";
import PostUnit from "./Endpoints/Units/PostUnit/PostUnit";
import PostDishName from "./Endpoints/DishNames/PostDishName/PostDishName";
import PostDish from "./Endpoints/Dishes/PostDish/PostDish";
import EditDish from "./Endpoints/Dishes/EditDish/EditDish";
import GetShoppingLists from "./Endpoints/ShoppingLists/GetShoppingLists/GetShoppingLists";
import GetShoppingListIngredients from "./Endpoints/ShoppingLists/GetShoppingListIngredients/GetShoppingListIngredients";
import AddShoppingList from "./Endpoints/ShoppingLists/AddShoppingList/AddShoppingList";
import AddMealPlan from "./Endpoints/MealPlans/AddMealPlan/AddMealPlan";
import GetMealPlans from "./Endpoints/MealPlans/GetMealPlans/GetMealPlans";
import EditDishName from "./Endpoints/DishNames/EditDishNames/EditDishName";

const Api_Endpoints = Router();

Api_Endpoints.use("/HealthCheck", HealthCheck);
Api_Endpoints.use("/Units", GetUnits, EditUnit, PostUnit);

Api_Endpoints.use(
  "/Ingredients",
  GetIngredients,
  PostNewIngredient,
  EditIngredient
);
Api_Endpoints.use("/Dishes", GetDishDetails, PostDish, EditDish);
Api_Endpoints.use("/DishNames", GetDishNames, PostDishName, EditDishName);
Api_Endpoints.use(
  "/ShoppingLists",
  GetShoppingLists,
  GetShoppingListIngredients,
  AddShoppingList
);

Api_Endpoints.use("/MealPlans", GetMealPlans, AddMealPlan);

export default Api_Endpoints;
