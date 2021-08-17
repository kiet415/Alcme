const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    usedIngredientCount: {
        type: Number
    },
    usedIngredients: {
        type: Array
    },
    instructions: {
        type: String
    },
    servings: {
        type: Number
    }
})

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);