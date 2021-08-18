import * as APIUtil from '../util/recipes_util.js'

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_NEW_RECIPE = "RECEIVE_NEW_RECIPE"

export const receiveRecipes = recipes => ({
    type: RECEIVE_RECIPES,
    recipes
});

export const receiveRecipe = recipe => ({
    type: RECEIVE_RECIPE,
    recipe
});

export const receiveNewRecipe = recipe => ({
    type: RECEIVE_NEW_RECIPE,
    recipe
});

export const fetchRecipes = () => dispatch => {
    return (
        APIUtil.getRecipes()
            .then(recipes => dispatch(receiveRecipes(recipes)))
            .catch(err => console.log(err))
    )};


export const fetchRecipe = (id) => dispatch => {
    return (
        APIUtil.getRecipe(id)
            .then(recipe => dispatch(receiveRecipe(recipe)))
            .catch(err => console.log(err))
    )};

export const fetchRecipeByIngredients = (id) => dispatch => {
    return (
        APIUtil.getRecipesByIngredients(id)
            .then(recipe => dispatch(receiveRecipes(recipe)))
            .catch(err => console.log(err))
    )};    

export const createRecipe = (data) => dispatch => {
    return (
        APIUtil.createRecipe(data)
            .then(recipe => dispatch(receiveRecipe(recipe)))
            .catch(err => console.log(err))
    )};