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


export const getRecipesByIngredients = (ingredients) => {
    return axios.post(`/api/spoon/findRecipeByIngredients`, {params: {ingredients: ingredients}})
};
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

