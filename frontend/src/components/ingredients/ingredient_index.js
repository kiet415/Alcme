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
        // console.log(data)
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
          <div className="ingredient-list-component">
            <h1>List of all ingredients</h1>
            <ul className="index-ul">
              {this.props.ingredients[0].map((ingredient, index) => (
                <div className="index-div">
                  <li className="index-ingredient"  onClick={((e) => this.handleClick(e))} key={index}>
                    <div className="ingredient-name">{ingredient['name']}</div>
                    <div><img src={ingredient.imageUrl}/></div>
                  </li>
                  <br/>
                  <IngredientIndexItem 
                     id={index}
                  />
                </div>
              ))}
  
            </ul>
                <div className="selected-ingredients">
                  <h1>Selected Ingredients</h1>
                  {this.state.ingredients.map(ingredient => (
                    <div>{ingredient} </div>
                  ))}
                </div>
          </div>
            <button onClick={this.handleSubmit}>Click to Search for Recipes</button>
        </div>
      </div>
    );
  }
}

export default IngredientIndex;