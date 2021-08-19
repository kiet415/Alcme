import React from 'react';
import IngredientIndexItem from './ingredient_index_item';
import { Link } from 'react-router-dom';
class IngredientIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }

  render() {
    if(this.props.ingredients[0] === undefined) return null;
    // let imgUrl = "https://spoonacular.com/cdn/ingredients_500x500/"
    return (
      <div className="main-window">
        <h1>Alcme</h1>
          <Link to="/recipes" className="ingredient-index-button">View Recipes</Link>
          <br/>
          <Link to="/recipe/create" className="ingredient-index-button">Create Recipe</Link>
          <br/>    
        <div className="index-home">       
          <div className="ingredient-list-component">
            <h1>List of all ingredients</h1>
            <ul className="index-ul">
              {this.props.ingredients[0].map((ingredient, index) => (
                <li className="index-ingredient" key={index}>
                  <div className="ingredient-name">{ingredient['name']}</div>
                  <br/>
                  <IngredientIndexItem 
                    id={index}
                  />
                </li>
              ))}
  
            </ul>
          </div>
                                          {/* {(this.state.ingredients.length !== 0) ?  */}
          <div className="selected-ingredients">
            <h3>Selected Ingredients</h3>
              {/* add logic for only showing when ingredients are selected */}
          </div> 
          {/* } */}
            
            
            {/* {this.props.ingredients.map(ingredient => (
                <div>
                    <img src={ingredient.image}/>
                    <img src={ingredient.name}/>
                    <IngredientIndexItem
                        ingredient={ingredient}
                    />
                </div>
            ))} */}
        </div>
      </div>
    );
  }
}

export default IngredientIndex;