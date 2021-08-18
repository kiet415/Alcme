import axios from 'axios';


export const getIngredients = () => {
    return axios.get('/api/spoon/populateIngredients');
};

export const getIngredient = id => {
    return axios.get(`/api/ingredients/${id}`)
}


// get to api/spoon/findRecipeByIngredients
// <- 