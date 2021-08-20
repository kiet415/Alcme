const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const RecipeSchema = new Schema ({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    readyInMinutes: Number,
    servings: Number,

    image: {
        type: String
    },
    ingredients: {
        type: Array
    },
    usedIngredients: {
        type: Array
    },
    instructions: {
        type: Array
    },
    cuisines: Array,
    user_id: {
        type: String
    }
});
  
module.exports = Recipe = mongoose.model('recipe', RecipeSchema);