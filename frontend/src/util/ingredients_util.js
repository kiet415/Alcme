import axios from 'axios';

//*changed to reg api call
export const getIngredients = () => {
    return axios.get('/api/ingredients');
};

export const getIngredient = id => {
    return axios.get(`/api/spoon/nutrition/${id}`)
}

export const getNutrition = id => {
    return axios.get(`/api/spoon/nutrition/${id}`)
}