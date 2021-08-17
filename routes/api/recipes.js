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
router.post('/create', (req, res) => {
  req.json
})
// router.post '/' create recipe
  
// router.get '/' + wildcard #=> find specific

module.exports = router;