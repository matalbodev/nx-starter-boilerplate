import { IngredientInMeal, MealInCalendar } from './web-app-meals';
import { Meal } from './web-app-meals';
export function countCaloriesInMeal(meal: Meal, servings?: number): number {
  if (!meal) return 0;
  const { ingredients } = meal;
  if (!ingredients) return 0;

  console.log(servings)

  const result = ingredients?.reduce(
    (acc, el) => Math.round((el.qty / 100) * el.ingredient.calories) + acc,
    0
  );

  return servings ? Math.round(result / (1 / servings)) : Math.round(result);
}

export const countTotalCaloriesForMeals = (meals: MealInCalendar[]) => {
  if (!meals) return;
  return Math.round(
    meals.reduce(
      (acc, mealInCalendar) => countCaloriesInMeal(mealInCalendar.meal, mealInCalendar.servings || 1) + acc,
      0
    )
  );
};

const sliceNWords = (phrase: string, n: number) => {
  const newPhrase = phrase.split(' ').slice(0, n);
  newPhrase.push('...');
  return newPhrase.join(' ');
};

export const resumeIngredients = (ingredients: IngredientInMeal[]) => {
  return sliceNWords(
    ingredients?.map((item) => `${item.ingredient.name},`).join(' '),
    8
  );
};
