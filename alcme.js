const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys_dev').mongoURI;
const passport = require('passport');
const users = require('./routes/api/users')
const ingredients = require('./routes/api/ingredients');
const recipes = require("./routes/api/recipes");

const spoon = require('./routes/api/spoonacular/spoons')
const path = require("path")


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// check deprecation status of bodyParser
// preceding lines could be outdated

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  // added useUnifiedTopology as a fix for deprecation warnings
  .then(() => console.log("Connected to MongoDB successfully"))
  //.catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use('/api/ingredients', ingredients);
app.use('/api/recipes', recipes);

app.use('/api/spoon', spoon);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`));

