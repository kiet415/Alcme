const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchmema = new Schema({
  id: {
    type: Number 
  },
  name: {
    type: String
  },
  aisle: {
    type: String
  },
  imageUrl: {
    type: String
  },

  nutrition: {
    nutrients: Array
  },
    category: {
      type: String
  }
})

module.exports = Ingredient = mongoose.model('ingredient',IngredientSchmema)