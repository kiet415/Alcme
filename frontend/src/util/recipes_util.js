import axios from 'axios';


export const getRecipes = () => {
    return axios.get('/api/recipes');
};

export const getRecipe = id => {
    return axios.get(`/api/recipes/${id}`)
}
