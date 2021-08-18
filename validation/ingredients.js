const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateIngredientFormat(ingredient) {
  let errors = {};

  ingredient.name = validText(ingredient.name) ? ingredient.name : '';
}