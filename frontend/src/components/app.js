import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from 'react-router';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import IngredientShowContainer from './ingredients/ingredient_show_container';
import RecipeShowContainer from './recipes/recipe_show_container';
import CreateRecipe from './recipes/recipe_create'
import IngredientIndexContainer from './ingredients/ingredient_index_container';
import RecipeIndexContainer from './recipes/recipe_index_container'
const App = () => (
  <div className="root-home">
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={IngredientIndexContainer} />
        <Route exact path="/ingredient/:id" component={IngredientShowContainer}/>
        <Route exact path="/recipes" component={RecipeIndexContainer}/>
        <Route exact path="/recipe/:id" component={RecipeShowContainer}/>
        <Route exact path="/recipe/create" component={CreateRecipe}/>
    </Switch>
  </div>
);

export default App;