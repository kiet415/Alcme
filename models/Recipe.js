const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
    id: {
        type: integer
    }, 
    title: {
        type: string
    }, 
    image: {
        type: string
    },
    servings: {
        type: integer
    },
    ingredients: {
        type: [string]
    },
    instructions: {
        type: string
    },
})

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);