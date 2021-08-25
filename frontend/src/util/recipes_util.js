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
    console.log(data)
    return axios.post(`/api/recipes/create`, data)
}


export const getRecipesByIngredients = (ingredients) => {
    return axios.post(`/api/spoon/findRecipeByIngredients`, {params: {ingredients: ingredients}})
};


export const getRecipeInfo = id => {
    return axios.get(`/api/spoon/recipeinfo/${id}`)
}

export const deleteRecipe = id => {
    return axios.delete(`/api/recipes/delete/${id}`)
}

