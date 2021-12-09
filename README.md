# README
<center><img src="frontend\public\ALcme.png"></center>


## Table of contents
+ [About the App](#about-the-app)
+ [Features and their challenges](#features-and-their-challenges)
+ [How to use](#how-to-use)
+ [Technologies](#technologies)
+ [Future Features](#future-features)

## About the app
Have you ever found yourself with the urge to cook, but came up short on ideas? If so, then Alcme might just be the perfect addition to your kitchen. Just start by selecting a few ingredients  and you'll be provided a list of recipes to choose from. Whether you're not sure what sounds good to eat or you're curious about what you can make with what you've got in the fridge, Alcme has you covered.  

If you find something you'd like to try but it doesn't quite fit the moment, just sign in and you can save your recipes to your profile. You can even use Alcme to upload and edit your own creations. 

Don't let a lack of inspiration come between you and your next meal, try Alcme today!


## Features and their challenges
+ Our project sourced ingredients and recipes from the Spoonacular API. Integrating it into Alcme was challenging as there are a lot of routes in the API and we had to format the data to fit our structure.
+ The filtered recipes page was also challenging as it required collecting ingredients from the user and making an API call that filtered for the recipes containing at least some of the ingredients mentioned. We then had to render which ingredients were used from the user entry and which ingredients would be needed to make the recipe. 

## How to Use
Select ingredients from the list of ingredients:
![Ingredients](https://alcme.s3.us-west-1.amazonaws.com/ingredientschosen.jpg)

As you select them, they will populate in the selected ingredients section.

Search recipes:
After you’ve added ingredients to the list, click the search for recipes button in selected ingredients to search for recipes. You will be shown a list of recipes that tells you which ingredients you selected that it uses and any other ingredients you might need.

![Recipes](https://alcme.s3.us-west-1.amazonaws.com/recipes.jpg)

Finally, choose the recipe that's right for you and get cooking:

![Recipe Instructions](https://alcme.s3.us-west-1.amazonaws.com/recipeInstructions.jpg)

## Technologies
+ Node.js
+ React
+ Express
+ MongoDB
+ Spoonacular’s food api

## Future Features
+ CRUD for personalized ingredients
+ Filters for recipe searches, such as dietary restrictions and allergies
