import * as APIUtil from '../util/ingredients_util.js'

export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";
export const RECEIVE_INGREDIENT = "RECEIVE_INGREDIENT";


export const receiveIngredients = ingredients => ({
    type: RECEIVE_INGREDIENTS,
    ingredients
});

export const receiveIngredient = ingredient => ({
    type: RECEIVE_INGREDIENT,
    ingredient
});
// differentiate from spoonApi call 
export const fetchIngredients = () => dispatch => {
    return (
        APIUtil.getIngredients()
            .then(ingredients => dispatch(receiveIngredients(ingredients)))
            //.catch(err => console.log(err))
    )};

// differentiate from spoonApi call 
export const fetchIngredient = (id) => dispatch => {
    return (
        APIUtil.getIngredient(id)
            .then(ingredient => dispatch(receiveIngredient(ingredient)))
            //.catch(err => console.log(err))
    )};

//needs util / reducer                  
// export const fetchNutrition = (id) => dispatch => {
//     return (
//         APIUtil.getNutrition(id)
//             .then(
//             nutrition => dispatch(receiveNutrition(nutrition)))
//             .catch(err => console.log(err))
//         )}

