import axios from 'axios';

// change to get user recipes from db
export const getRecipes = () => {
    return axios.get('/api/recipes');
};
// change to get user recipe from db
export const getRecipe = id => {
    return axios.get(`/api/recipes/${id}`)
}
// change to create recipe in db
export const createRecipe = data => {
    return axios.post(`/api/recipes/create`, data)
}

// <----add 
// update recipe in db

// export const updateRecipe = data => {
    // return axios.post('/api/recipes/update', data)
// }

// export const spoonIngredients
    // return axios.post

// ---> done