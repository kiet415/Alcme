import axios from 'axios';

//*changed to reg api call
export const getIngredients = () => {
    return axios.get('/api/ingredients');
};

export const getIngredient = id => {
    return axios.get(`/api/ingredients/${id}`)
}


// get to api/spoon/findRecipeByIngredients
// <- 