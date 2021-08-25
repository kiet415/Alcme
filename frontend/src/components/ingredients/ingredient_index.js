import React from 'react';
import IngredientIndexItem from './ingredient_index_item';
import { Link } from 'react-router-dom';
class IngredientIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients : [],

    }
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }
  handleClick = (item) => {
    if(!this.state.ingredients.includes(item)) {
      this.setState({ingredients: this.state.ingredients.concat(item) })
    } else {
      let idx = this.state.ingredients.indexOf(item)
      let newArray = this.state.ingredients.slice(0,idx).concat(this.state.ingredients.slice(idx+1, this.state.ingredients.length))
      this.setState({ingredients: newArray})
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.ingredients.length === 0) {
      alert("Please select at least 1 ingredient")
    } else {
      this.props.fetchRecipeByIngredients(this.state.ingredients.join(", "))
      .then( res => {
        const data = this.props.recipes[0];
        this.props.history.push({pathname:'/recipe/filtered', state: {recipes:data}}) ;
        
      });
    }

  }
  splashPage = (e) => {
    e.preventDefault();
    return (
      <div>

      </div>
    )
  }
  
  render() {
    if(this.props.ingredients[0] === undefined) return null;
    // let imgUrl = "https://spoonacular.com/cdn/ingredients_500x500/"
    return (
      <div className="main-window">
          <div>
            <img src="" />
            <h1>Welcome to Alcme!</h1>
            <div>
              Have you ever found yourself with the urge to cook, but came up short on ideas? 
              If so, then Alcme might just be the perfect addition to your kitchen. Just start by selecting a few ingredients  
              and you’ll be provided a list of recipes to choose from. Whether you’re not sure what sounds good to eat or you’re 
              curious about what you can make with what you’ve got in the fridge, Alcme has you covered.  
              If you find something you’d like to try but it doesn’t quite fit the moment, just sign in and you can save your recipes to your
              profile. You can even use Alcme to upload and edit your own creations. 
              Don’t let a lack of inspiration come between you and your next meal, try Alcme today!
            </div>
          </div>
        <div className="index-home"> 
        <h1>List of all ingredients</h1>
          <div className="ingredient-list-component">
            
            <ul className="index-ul">
              {this.props.ingredients[0].map((ingredient, index) => (
                <div className="index-div">
                  <li className="index-ingredient" onClick={() => this.handleClick(ingredient['name'])} key={index}>
                    <div className="ingredient-name" key={index}>{ingredient['name']}</div>
                    
                    <div className="ingredient-index-image-div" >
                      <img src={ingredient.imageUrl} onClick={() =>this.handleClick(ingredient['name'])} className="ingredient-index-image"/>
                    </div>
                  </li>
                  <IngredientIndexItem 
                     id={index} ingId={ingredient.id} 
                  />
                </div>
              ))}
  
            </ul>
            <div className="selected-ingredients">

              <div className="instructions">
                <h1>Instructions</h1>
    
                <div>Simply just click on any of these ingredients and it will be
                  added to the list. If you want to remove the item, just click on it again.
                  Once you're done click the "Search for Recipe" button to see your results.
                </div>
              </div>

              <div>
                <h1>Selected Ingredients</h1>
                {this.state.ingredients.map(ingredient => (
                  <div className="ingredient-item">{ingredient} </div>
                ))}
                <button onClick={this.handleSubmit} className="selected-ingredients-button">Click to Search for Recipes</button> 
              </div>

             
            </div>
          </div >
        </div>
      </div>
    );
  }
}

export default IngredientIndex;