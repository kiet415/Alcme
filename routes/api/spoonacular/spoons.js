const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const request = require('request');
const api_helper = require('./apiHelper');
const { response } = require('express');
const { spkey } = require('../../../config/keys_dev');
const Recipe = require('../../../models/Recipe')
const Ingredient= require('../../../models/Ingredient')
const path = 'https://api.spoonacular.com/';

router.get('/recipeAutofill', (req, res) => {
  const qry = String(req['query'].query)
  const recipeAutoFill = path + '/recipes/autocomplete?query=' + qry + '&number=5&' + spkey;
  api_helper.make_API_call(recipeAutoFill).then(response => { 
    res.json(response);
  })
  .catch(error => {
    res.send(error); 
  }); 
});


router.post('/findRecipeByIngredients', (req, res) => {
  const ingredients = String(req.body.params.ingredients); 
  
  const findByIngredients = 
    path + '/recipes/findByIngredients?ingredients='
    + ingredients +'&number=10&limitLicense=false&ignorePantry=false&'+ spkey; 

  api_helper.make_API_call(findByIngredients).then(response => {
    res.json(response);
      }).catch(error => {
        res.send(error);
        });
});

router.get('/findIngredients', (req, res) => {
  const ingredient = req['query'].ingredient;
  
  const findIngredient = path + 'food/ingredients/search?query=' + ingredient + '&number=10&' + spkey
  
  api_helper.make_API_call(findIngredient).then(response => {
    res.json(response);
      }).catch(error => {
        res.send(error); 
        });
});

router.get('/ingredientWidget', (req, res) => {
  const id = req['query'].id;
  
  const getWidget = path + '/recipes/'+ id + '/ingredientWidget?defaultCss=false' + spkey;

  api_helper.make_API_call(getWidget).then(response => {
    res.send(response)})
      .catch(error => {
        res.send(error);
      });
});

router.get('/nutrition/:id', (req, res) => {      
  api_helper.make_API_call(
    path + `food/ingredients/${req.params.id}`
      + `/information?amount=1 &unit=oz&` + spkey)
        .then(response => { 
          res.json(response);      
          }).catch(err =>
            res.status(404)
              );
});


//get recipe details 
router.get('/recipinfo/:id', (req, res) => {

  api_helper.make_API_call(
    path + `/recipes/informationBulk?ids=${req.params.id}`
      + `&includeNutritioin=true&` + spkey)
        .then(response => {
          res.json(response)
            })
          .catch(err => 
            res.status(404)
              );
});
  // // findRecipeByMeal: path + "/recipes/complexSearch?query=" + string + "&includeIngredients=" + string + "&instructionsRequired="+ boolean + "&number="+ number,
  
// GET / recipes / { id } / analyzedInstructions

// recipeSteps: path + '/recipes/'+ {id} + '/similar?limitLicense=false&' + spkey  

// POST 
// } 
module.exports = router; 