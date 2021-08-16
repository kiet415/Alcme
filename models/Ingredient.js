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
  // nutrition: {
  //   type: Schema.Types.ObjectID,
  //   ref: 'nutrients'
  // }
})

module.exports = Ingredient = mongoose.model('ingredient',IngredientSchmema)