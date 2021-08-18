const SpoonacularApi = require('spoonacular_api');
const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const SpApiKey = require("../config/keys").spoonApiKey

const spoon = 'https://api.spoonacular.com/'
// const spoonRoutes = [
//   // { name: "recipeInfo", url: spoon + 'recipes/'+ recipeID + '/information'},
//   { name: "recipeInfo", url: spoon },
//   { name: "recipeInfo", url: spoon },
//   { name: "recipeInfo", url: spoon },
//   { name: "recipeInfo", url: spoon }
// ]

// router.get('/', (req, res) => {
//   res.send("https://api.spoonacular.com/recipes/716429/information?apiKey=7feb8ca6835644a58fb03fa022cff140&includeNutrition=true")
// })