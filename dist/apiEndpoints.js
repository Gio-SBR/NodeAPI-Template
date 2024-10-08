"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HealthCheck_1 = __importDefault(require("./Endpoints/HealthCheck"));
const GetUnits_1 = __importDefault(require("./Endpoints/Units/GetUnits/GetUnits"));
const GetIngredients_1 = __importDefault(require("./Endpoints/Ingredients/GetIngredients/GetIngredients"));
const PostIngredients_1 = __importDefault(require("./Endpoints/Ingredients/PostIngredients/PostIngredients"));
const GetDishes_1 = __importDefault(require("./Endpoints/Dishes/GetDishes/GetDishes"));
const GetDishNames_1 = __importDefault(require("./Endpoints/DishNames/GetDishNames/GetDishNames"));
const EditIngredient_1 = __importDefault(require("./Endpoints/Ingredients/EditIngredient/EditIngredient"));
const EditUnit_1 = __importDefault(require("./Endpoints/Units/EditUnits/EditUnit"));
const PostUnit_1 = __importDefault(require("./Endpoints/Units/PostUnit/PostUnit"));
const PostDishName_1 = __importDefault(require("./Endpoints/DishNames/PostDishName/PostDishName"));
const PostDish_1 = __importDefault(require("./Endpoints/Dishes/PostDish/PostDish"));
const EditDish_1 = __importDefault(require("./Endpoints/Dishes/EditDish/EditDish"));
const GetShoppingLists_1 = __importDefault(require("./Endpoints/ShoppingLists/GetShoppingLists/GetShoppingLists"));
const GetShoppingListIngredients_1 = __importDefault(require("./Endpoints/ShoppingLists/GetShoppingListIngredients/GetShoppingListIngredients"));
const AddShoppingList_1 = __importDefault(require("./Endpoints/ShoppingLists/AddShoppingList/AddShoppingList"));
const AddMealPlan_1 = __importDefault(require("./Endpoints/MealPlans/AddMealPlan/AddMealPlan"));
const GetMealPlans_1 = __importDefault(require("./Endpoints/MealPlans/GetMealPlans/GetMealPlans"));
const EditDishName_1 = __importDefault(require("./Endpoints/DishNames/EditDishNames/EditDishName"));
const Api_Endpoints = (0, express_1.Router)();
Api_Endpoints.use("/HealthCheck", HealthCheck_1.default);
Api_Endpoints.use("/Units", GetUnits_1.default, EditUnit_1.default, PostUnit_1.default);
Api_Endpoints.use("/Ingredients", GetIngredients_1.default, PostIngredients_1.default, EditIngredient_1.default);
Api_Endpoints.use("/Dishes", GetDishes_1.default, PostDish_1.default, EditDish_1.default);
Api_Endpoints.use("/DishNames", GetDishNames_1.default, PostDishName_1.default, EditDishName_1.default);
Api_Endpoints.use("/ShoppingLists", GetShoppingLists_1.default, GetShoppingListIngredients_1.default, AddShoppingList_1.default);
Api_Endpoints.use("/MealPlans", GetMealPlans_1.default, AddMealPlan_1.default);
exports.default = Api_Endpoints;
