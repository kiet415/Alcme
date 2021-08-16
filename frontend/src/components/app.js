import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from 'react-router';
import IngredientIndex from './ingredients/ingredient_index';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import IngredientShow from './ingredients/ingredient_show';
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={IngredientIndex} />
        <Route exact path="/ingredient/hi" component={IngredientShow}/>
        
    </Switch>
  </div>
);

export default App;