// const spoonApi = require("./spoonApi");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const SpApiKey = require("../../../config/keys").spoonApiKey
// const ApiClient = require('ApiClient')  
const SpoonacularApi = require('spoonacular_api')

let defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = SpApiKey;
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyScheme.apiKeyPrefix = 'Token';

let apiInstance = new SpoonacularApi.DefaultApi();
debugger
let id = 9266; // Number | The ingredient id.
let opts = {
  'amount': 150, // Number | The amount of this ingredient.
  'unit': 'grams' // String | The unit for the given amount.
};
     
  
router.get('/', (req, res) => {

  apiInstance.getIngredientInformation(id, opts, (error, data, response) => {
    if (error) {
      res.json(error);
    } else {
      res.json('API called successfully. Returned data: ' + data);
    }
  });

});

module.exports = router;