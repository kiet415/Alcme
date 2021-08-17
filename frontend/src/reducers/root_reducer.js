import { combineReducers } from 'redux';
import session from './session_reducer';
import ingredients from './ingredient_reducer'
import recipes from './recipe_reducer'
const RootReducer = combineReducers({
  session,
  ingredients,
  recipes
});

export default RootReducer;