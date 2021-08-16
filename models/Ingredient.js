const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchmema = new Schema({
  id: {
    type: Integer
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
    nutrients: [ 
      {
        name: {
        type: String
        },
        amount: {
          type: Integer
        },
        unit: {
          type: String

        }
      }
    ]
  },
    category: {
      type: String
  }
})

module.exports = Ingredient = mongoose.model('ingredient',IngredientSchmema)