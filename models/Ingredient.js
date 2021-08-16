const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  // id => integer
  // original == name => string
  // aisle =>string
  //image url => string
  // nutrition obj => {
  //  nutrients => []
  // }


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
<<<<<<< Updated upstream
  // nutrition: {
  //   type: Schema.Types.ObjectID,
  //   ref: 'nutrients'
  // }
=======
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
>>>>>>> Stashed changes
})

module.exports = Ingredient = mongoose.model('ingredient',IngredientSchmema)