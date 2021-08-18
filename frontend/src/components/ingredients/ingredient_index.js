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
      <div>
        <h1>Alcme</h1>
        <div className="index-home"> 
          <Link to="/recipes">Recipe index page</Link>
           <br/>
          <Link to="/recipe/create">Create Recipe</Link>

          
            <h1>List of all ingredients</h1>
            <ul className="index-ul">
              {this.props.ingredients[0].map((ingredient, index) => (
                <li className="index-ingredient" key={index}>
                  <div>{ingredient['name']}</div>
                  <IngredientIndexItem 
                    id={index}
                  />
                </li>
              ))}
  
            </ul>
            
            
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