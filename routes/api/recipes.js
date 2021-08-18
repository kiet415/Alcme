const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Recipe = require('../../models/Recipe');
// import validations 

// router.get '/' index
router.get('/', (req, res) => {
  Recipe.find({}).then(recipes => res.json(recipes));
})
router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err =>
      res.status(401).json({ noIngredientFound: "No recipe found with that ID" })
    );
});
// router.post('/create', (req, res) => {
//   req.json
// })
// router.post '/' create recipe
  
// router.get '/' + wildcard #=> find specific
router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err =>
      res.status(401).json({ noIngredientFound: "No recipe found with that ID" })
    );
});

module.exports = router;