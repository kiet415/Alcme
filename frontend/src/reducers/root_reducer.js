import { combineReducers } from 'redux';
import sessionLogout from './session_reducer';
import session from './session_api_reducer'
import ingredients from './ingredient_reducer'
import recipes from './recipe_reducer'
import errors from './errors_reducer'

const RootReducer = combineReducers({
  sessionLogout,
  session,
  ingredients,
  recipes,
  errors
});

export default RootReducer;