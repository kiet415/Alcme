# README
<center><img src="ALcme.png"></center>

<h3 style="text-align: center;">A lightweight calendar web app for organizing your life</h3>

## Table of contents
[About the App](#about-the-app)
[Features](#features)
[How to use](#how-to-use)

[Future direction of the project](#future-direction-of-the-project)

## About the app
Have you ever found yourself with the urge to cook, but came up short on ideas? If so, then Alcme might just be the perfect addition to your kitchen. Just start by selecting a few ingredients  and you’ll be provided a list of recipes to choose from. Whether you're not sure what sounds good to eat or you're curious about what you can make with what you’ve got in the fridge, Alcme has you covered.  

If you find something you’d like to try but it doesn’t quite fit the moment, just sign in and you can save your recipes to your profile. You can even use Alcme to upload and edit your own creations. 

Don’t let a lack of inspiration come between you and your next meal, try Alcme today!


## Features and their challenges
+ Creating events was fun to implement and render. The difficulty came in in deciding how to handle times and dates for those events, with respect to both the input and reconciling that input on the backend. I was able to come up with a way by having the user inputs be separate fields in the form but smashed together in a dateTime object on the backend, only requiring the single object to hold date and time. 
+ Creating and rendering the calendar was not an overly difficult task when the calendar is empty, but as I began to work on filling it with events things got extremely tricky. I am still working this functionality out. 

## How to Use
gCal was made to be user friendly – simply visit https://gcal.herokuapp.com/ and create an account. From there you may begin creating calendars and events.
![Ingredients](https://alcme.s3.us-west-1.amazonaws.com/ingredientschosen.jpg)
![Recipes](https://alcme.s3.us-west-1.amazonaws.com/recipes.jpg)
![Recipe Instructions](https://alcme.s3.us-west-1.amazonaws.com/recipes.jpg)
