const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchmema = new Schema({
  id: {
    type: integer
  },
  name: {
    type: string
  },
  aisle: {
    type: string
  },
  imageUrl: {
    type: string
  },
  nutrition: {
    nutrients: [ 
      {
        name: {
        type: string
        },
        amount: {
          type: integer
        },
        unit: {
          type: string
        }
      }
    ]
  },
    category: {
      type: string
  }
})

module.exports = Ingredient = mongoose.model('ingredient',IngredientSchmema)