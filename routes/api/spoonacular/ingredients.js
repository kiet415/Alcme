
// const spoonApi = require("./spoonApi");
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const SpApiKey = require("../../../config/keys").spoonApiKey
// const ApiClient = require('ApiClient')  
const SpoonacularApi = require('../../../SpoonApi/ApiClient')
const D = require('../../../SpoonApi/DefaultApi')

let defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = SpApiKey;
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyScheme.apiKeyPrefix = 'Token';


  
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