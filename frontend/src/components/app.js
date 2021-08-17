import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from 'react-router';
import IngredientIndex from './ingredients/ingredient_index';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import IngredientShow from './ingredients/ingredient_show';
import RecipeShow from './recipes/recipe_show';
import CreateRecipe from './recipes/recipe_create'
const App = () => (
  <div className="root-home">
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={IngredientIndex} />
        <Route exact path="/ingredient/hi" component={IngredientShow}/>
        <Route exact path="/recipe/hi" component={RecipeShow}/>
        <Route exact path="/recipe/create" component={CreateRecipe}/>
    </Switch>
  </div>
);

export default App;