const express = require('express');
const router = express.Router();
const mogoose = require('mongoose');
const passport = require('passport');

const Ingredient = require('../../models/Ingredient')
// const validText = require('./valid-text');

router.get('/', (req, res) => {
  Ingredient.all();
})


router.post('/create', (req, res) => {
  // import and define validations
  const newIngredient = new Ingredient({
    name: req.body.name,
    aisle: req.body.aisle,
    imageUrl: req.body.imageUrl,
    nutrition: req.body.nutrition,
    category: req.body.category
  });
  newIngredient.save()
    .then(newIngredient => {
    res.json({
      msg: "Success",
      newIngredient
    }).catch(err => console.log(err))});
})
module.exports = router;