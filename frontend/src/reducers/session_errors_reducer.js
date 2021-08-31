import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS,
  } from '../actions/session_actions';
  
  const SessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return nextState;
      case CLEAR_SESSION_ERRORS:
        return nextState;
      default:
        return state;
    }
  };
  
  export default SessionErrorsReducer;