const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const request = require('request');
const axios = require('axios')
const api_helper = require('./apiHelper');
const { spkey } = require('../../../config/keys_dev.js');
const { response } = require('express');
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

router.get('/findRecipeByIngredients', (req, res) => {
  // 
  const ingredients = req['query'].ingredients;
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
  const getWidget = path + '/recipes/'+ id + '/ingredientWidget?defaultCss=false' + spkey;

  api_helper.make_API_call(getWidget).then(response => {
    res.send(response);
  })
    .catch(error => {
      res.send(error);
    });
});

router.get('/populateIngredients', (req, res) => {
  let diet = ''
  // const diet = req['query'].diet
  // to be added when dietary restrictions are implemented
  const recipes = path +'/recipes/random?limitLicense=false&tags=' + diet + '&number=20&' + spkey 
  let ingredients = []

  api_helper.make_API_call(recipes).then(
    response => {
      const ignore = 'Baking Spices and Seasonings Condiments Bakery/Bread Pasta and Rice Beverages Frozen Canned and Jarred'
      const ingredients = []
      response.recipes.forEach(recipe => {

      recipe.extendedIngredients.forEach(ingredient => {
        if (ignore.includes(ingredient.aisle) || ingredients.includes(ingredient.name)) {
        } else {
          
          ingredients.push({
            id: ingredient.id,
            name: ingredient.name,
            aisle: ingredient.aisle,
            imageUrl: "https://spoonacular.com/cdn/ingredients_500x500/" + ingredient.imageimgUrl 
          })

        }});
      });
      res.json(ingredients)
    }).catch(error=>{
      res.send(error);
    });
})


// https://api.spoonacular.com/recipes/random?limitLicense=<boolean>&tags=<string>&number=<number>



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