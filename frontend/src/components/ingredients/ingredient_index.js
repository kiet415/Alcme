import React from 'react';
import IngredientIndexItem from './ingredient_index_item';
import { Link } from 'react-router-dom';
class IngredientIndex extends React.Component {

  render() {
    return (
      <div>
        <h1>Alcme</h1>
        <div className="index-home"> 
          <Link to="/recipe/hi">Recipe show page</Link>
           <br/>
          <Link to="/recipe/create">Create Recipe</Link>

          
            <h1>List of all ingredients</h1>
            <ul className="index-ul">
              <li className="index-ingredient">
                Ingredient name and img here
                <IngredientIndexItem />
              </li>

              <li className="index-ingredient">
                Ingredient name and img here
                <IngredientIndexItem />
              </li>
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