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
  handleClick = (e) => {
    //console.log(e.target.innerText)
    if(!this.state.ingredients.includes(e.target.innerText)) {
      this.setState({ingredients: this.state.ingredients.concat(e.target.innerText) })
    } else {
      let idx = this.state.ingredients.indexOf(e.target.innerText)
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
  render() {
    if(this.props.ingredients[0] === undefined) return null;
    // let imgUrl = "https://spoonacular.com/cdn/ingredients_500x500/"
    console.log(this.props)
    return (
      <div className="main-window">
        <div className="index-home"> 
        <h1>List of all ingredients</h1>
          <div className="ingredient-list-component">
            
            <ul className="index-ul">
              {this.props.ingredients[0].map((ingredient, index) => (
                <div className="index-div" key={index}>
                  <li className="index-ingredient" key={index} onClick={((e) => this.handleClick(e))} key={index}>
                    <div className="ingredient-name">{ingredient['name']}</div>
                    <br/>
                    <div className=".ingredient-index-image-div">
                      <img src={ingredient.imageUrl} className="ingredient-index-image"/>
                    </div>
                  </li>
                  <IngredientIndexItem 
                     id={index} ingId={ingredient.id}
                  />
                </div>
              ))}
  
            </ul>
            <div className="selected-ingredients">
              <h1>Selected Ingredients</h1>
              {this.state.ingredients.map(ingredient => (
                <div>{ingredient} </div>
              ))}
              <button onClick={this.handleSubmit} className="selected-ingredients-button">Click to Search for Recipes</button>
            </div>
          </div >
        </div>
      </div>
    );
  }
}

export default IngredientIndex;