export interface Ingredient {
  id: string;
  name: string;
  calories: number;
  ingredientCategory: string;
}
export interface IngredientWithQty extends Ingredient {
  qty: number;
}
export interface IngredientInMeal {
  id: string;
  ingredient: Ingredient;
  qty: number;
}
export interface Meal {
  id: string;
  name: string;
  picture?: string;
  ingredients: IngredientInMeal[];
}
export interface MealInCalendar {
  id: string;
  mealTime: string;
  mealId: string;
  meal: Meal;
  servings?: number;
}
