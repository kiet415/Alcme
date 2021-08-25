import React from 'react';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import { Route } from 'react-router';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import IngredientShow from './ingredients/ingredient_show_container';
import RecipeShowContainer from './recipes/recipe_show_container';
import RecipeCreateContainer from './recipes/recipe_create_container';
import IngredientIndexContainer from './ingredients/ingredient_index_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import RecipeFiltered from './recipes/recipe_filtered';
import AboutUs from './about/about';
import Splash from './splash/splash';
const App = () => (
  <div className="root-home">
    <NavBarContainer />
    <Switch>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        
        <Route exact path="/ingredients" component={IngredientIndexContainer} />
        <Route exact path="/ingredient/:id" component={IngredientShow }/>
        <Route exact path="/recipes" component={RecipeIndexContainer}/>
        <Route exact path="/recipe/create" component={RecipeCreateContainer}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/recipe/filtered" component={RecipeFiltered}/>
        <Route exact path="/" component={Splash} />
        <Route exact path="/recipe/:id" component={RecipeShowContainer}/>

    </Switch>
  </div>
);

export default App;