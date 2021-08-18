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
      this.props.fetchRecipeByIngredients(this.state.ingredients.join(", "));
    }
  }
  render() {
    
    if(this.props.ingredients[0] === undefined) return null;
    // let imgUrl = "https://spoonacular.com/cdn/ingredients_500x500/"
    //console.log(this.state.ingredients)
    return (
      <div>
        <h1>Alcme</h1>
        <div className="index-home"> 
          <Link to="/recipes">Recipe index page</Link>
           <br/>
          <Link to="/recipe/create">Create Recipe</Link>

            <h1>Current ingredients chosen </h1>
            {this.state.ingredients.map(ingredient => (
              <div>{ingredient} </div>
            ))}
            <h1>List of all ingredients</h1>
            <ul className="index-ul">
              {this.props.ingredients[0].map((ingredient, index) => {
                if (ingredient.imageUrl)
                return (
                
                <div className="index-div">
                  <li className="index-ingredient"  onClick={((e) => this.handleClick(e))} key={index}>
                    <div>
                      <img height='100px' src={ingredient.imageUrl} />
                      {ingredient['name']}</div>
                  </li>
                  <IngredientIndexItem 
                     id={index}
                  />
                </div> 
                )
              })}
  
            </ul>
            
            
            <button onClick={this.handleSubmit}>Click to Search for Recipes</button>
        </div>
      </div>
    );
  }
}

export default IngredientIndex;