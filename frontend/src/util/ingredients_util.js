import axios from 'axios';


export const getIngredients = () => {
    return axios.get('/api/ingredients');
};

export const getIngredient = id => {
    return axios.get(`/api/ingredients/${id}`)
}
