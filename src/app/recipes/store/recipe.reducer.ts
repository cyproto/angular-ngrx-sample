import { Recipe } from "../recipe.model";
import * as RecipesActions from "./recipe.actions";

export interface State {
  recipes: Recipe[];
}

const initiaState: State = {
  recipes: [],
};

export function recipeReducer(
  state = initiaState,
  action: RecipesActions.RecipesActions
) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
      break;
    default:
      return state;
      break;
  }
}
