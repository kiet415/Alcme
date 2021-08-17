import { combineReducers } from 'redux';
import session from './session_reducer';
import ingredients from './ingredient_reducer'
const RootReducer = combineReducers({
  session,
  ingredients
});

export default RootReducer;