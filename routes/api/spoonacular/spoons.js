const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const api_helper = require('./apiHelper');
const { spkey } = require('../../../config/keys_dev');
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
  console.log(ingredients)
  const findByIngredients = path + '/recipes/findByIngredients?ingredients='
  + ingredients +'&number=10&limitLicense=false&ignorePantry=false&'+ spkey; 
   api_helper.make_API_call(findByIngredients).then(response => {
      res.json(response);
   })
    .catch(error => {
      res.send(error);
    });
})

router.get('/findIngredients', (req, res) => {
  const ingredient = req['query'].ingredient;
  const findIngredient = path + 'food/ingredients/search?query=' + ingredient
    + '&number=10&' + spkey
  api_helper.make_API_call(findIngredient).then(response => {
    res.json(response);
  })
    .catch(error => {
      res.send(error); 
    });
})

router.get('/ingredientWidget', (req, res) => {
  const id = req['query'].id;
  const getWidget = path + '/recipes/'+ id + '/ingredientWidget?defaultCss=false';

  api_helper.make_API_call(getWidget).then(response => {
    res.send(response);
  })
    .catch(error => {
      res.send(error);
    });
});

// 'https://api.spoonacular.com/food/ingredients/search?query=potato&number=10&apiKey=7feb8ca6835644a58fb03fa022cff140'

// const routes = {
// GET / query / count 
// "https://api.spoonacular.com/recipes/autocomplete?query=tu&number=10&apiKey=7feb8ca6835644a58fb03fa022cff140"

// recipeAutoFill = path + '/recipes/autocomplete?query=' + string + '&number=5&' + spkey,

// GET / food / ingredients / { string } / opts: {basic ingredients w id} 

// 'https://api.spoonacular.com/food/ingredients/search?query=potato&number=10&apiKey=7feb8ca6835644a58fb03fa022cff140'

// searchIngredients: path + '/food/ingredients/search?query=' + queryString + '&number=' + String(count) + '&' + spkey,
  
// GET / ingredients / count 

  // 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=onions,%20carrots,%20celery&number=10&ignorePantry=false&apiKey=7feb8ca6835644a58fb03fa022cff140'

// findRecipeByIngredients: path + '/recipes/findByIngredients?ingredients=' + string +'&number=' + number + '&limitLicense=false&ignorePantry=false',

// GET / recipes / 'type of food' / 'ingredients to include' / include recipe instructions? / count 

  // // findRecipeByMeal: path + "/recipes/complexSearch?query=" + string + "&includeIngredients=" + string + "&instructionsRequired="+ boolean + "&number="+ number,
  
// GET / recipes / { id } / analyzedInstructions

// recipeSteps: path + '/recipes/'+ {id} + '/similar?limitLicense=false&' + spkey

// POST 
// } 
module.exports = router; 