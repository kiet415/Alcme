import axios from 'axios';


export const getRecipes = () => {
    return axios.get('/api/recipes');
};

export const getRecipe = id => {
    return axios.get(`/api/recipes/${id}`)
}

export const createRecipe = data => {
    return axios.post(`/api/recipes/create`, data)
}

export const getRecipesByIngredients = (ingredients) => {
    
    return axios.get(`/api/spoon/findRecipeByIngredients`, {params: {ingredients: ingredients}})
}
// router.get('/findRecipeByIngredients', (req, res) => {
//     const ingredients = req['query'].ingredients;
//     const findByIngredients = path + '/recipes/findByIngredients?ingredients='
//     + ingredients +'&number=10&limitLicense=false&ignorePantry=false&'+ spkey;
//      api_helper.make_API_call(findByIngredients).then(response => {
//         res.json(response);
//      })
//       .catch(error => {
//         res.send(error);
//       });
//   })