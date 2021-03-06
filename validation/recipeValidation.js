const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRecipeFormat(recipe) {
  let errors = {};

//   recipe.title = validText(recipe.title) ? recipe.title : '';
  recipe.usedIngredients = validText(recipe.usedIngredients) ? recipe.usedIngredients : '';
  recipe.instructions = validText(recipe.instructions) ? recipe.instructions : '';
}