const SpoonacularApi = require('spoonacular_api');
const SpApiKey = require("../../../config/keys").spoonApiKey

const defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
const apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = SpApiKey;
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyScheme.apiKeyPrefix['apiKey'] = "Token"

const api = new SpoonacularApi.DefaultApi()
// const username = dsky; // {String} The username.
// const hash = 4b5v4398573406; // {String} The private hash for the username.
const inlineObject11 = new SpoonacularApi.InlineObject11(); // {InlineObject11} 
const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addToMealPlan(username, hash, inlineObject11, callback);

module.exports = spoonApi;