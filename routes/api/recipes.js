const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Recipe = require('../../models/Recipe');

// import validations for recipe create

router.get('/', (req, res) => {
  Recipe.find({})
    .then(recipes =>
       res.json(recipes));
});

router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
      .catch(err =>
        res.status(401).json({
           noIngredientFound: "No recipe found with that ID" 
          })
    );
});

router.post('/create', (req, res) => {
  const rec = req.body.recipe;
  const recipe = new Recipe(rec)
  recipe.save()
  Recipe.findOne({ title: recipe.title })
    .then(newRecipe => {
      if (newRecipe) {
        return res.json(newRecipe)}
        else {
          error = {err: 'Recipe did not save'}
        }
        })
      .catch(err =>
         res.status(401).json(error))
})

router.delete('/delete/:id', (req, res) => {

  Recipe.findByIdAndRemove(req.params.id)
    .then( () =>
      Recipe.find({})
      .then(recipes => {
        res.json(recipes)
      }).catch(err => res.status(400).json(err))
    )
})  
// router.get('/:id', (req, res) => {
//   Recipe.findById(req.params.id)
//     .then(recipe =>
//       res.json(recipe)
//       ).catch(err =>
//       res.status(401).json({
//          noIngredientFound: "No recipe found with that ID" 
//         })
//       );
// });

module.exports = router;