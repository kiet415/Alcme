import { RECEIVE_RECIPES, RECEIVE_RECIPE, RECEIVE_NEW_RECIPE, DELETE_RECIPE } from "../actions/recipe_actions";

const RecipeReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_RECIPES:
            newState.all = action.recipes.data;
            return newState;
        case RECEIVE_RECIPE:
            newState.all = action.recipe.data;
            return newState;
        case RECEIVE_NEW_RECIPE:
            newState.new = action.recipe.data
            return newState;
        case DELETE_RECIPE:
            return null;
        default:
            return state;
    }
}

export default RecipeReducer