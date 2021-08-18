const SpoonacularApi = require('spoonacular_api');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const SpApiKey = require("../config/keys").spoonApiKey
    

router.get('/', (req, res) => {
 
let defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme

const apiKeyScheme = defaultClient.authentications['apiKeyScheme'];  
apiKeyScheme.apiKey = '7feb8ca6835644a58fb03fa022cff140';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
apiKeyScheme.apiKeyPrefix = 'apiKey'; 
const apiInstance = new SpoonacularApi.DefaultApi(defaultClient);

let id = 715538; // Number | The id of the source recipe for which similar recipes should be found.
let opts = { 
  '_number': 1, // Number | The number of random recipes to be returned (between 1 and 100).
  'limitLicense': true // Boolean | Whether the recipes should have an open license that allows display with proper attribution.
}; 

  apiInstance.getSimilarRecipes(id, opts, (error, data, response) => {  
    if (error) {  
      // console.log(error)
      res.json(error);   
    } else {
      res.json('API called successfully. Returned data: ', {data: data}); 
    }
  });
  
})

module.exports = router;