import { RECEIVE_INGREDIENTS, RECEIVE_INGREDIENT } from "../actions/ingredient_actions";

const IngredientsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_INGREDIENTS:
            newState.all = action.ingredients.data;
            return newState;
        case RECEIVE_INGREDIENT:
            newState['ingredient'] = action.ingredient.data;
            return newState;
        default:
            return state;
    }
}

export default IngredientsReducer