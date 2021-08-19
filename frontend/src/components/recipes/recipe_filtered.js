import React from 'react';
import { Link } from 'react-router-dom';
class RecipeFiltered extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        //this.props.fetchRecipes();
    }
    
    render() {
        //if(this.props.recipes === undefined) return null;
        let recipes = this.props.location.state.recipes
        
        return (
            <div>
                Recipe Filtered Page
                <div>
                    {recipes.map((recipe,index) => (
                        <div className="filtered-recipes"key={index}>
                            <Link  to={`/recipe/${recipe.id}`}>
                                <div>{recipe.title}</div>
                                <div><img src={recipe.image}/></div>

        
                            </Link>
                            <div>Items used from list
                            {recipe.usedIngredients.map(ingredient => (
                                <div>{ingredient.name}</div>
                            ))}
                            </div>
                            <div>Items needed
                            {recipe.missedIngredients.map(ingredient => (
                                <div>{ingredient.name}</div>
                            ))}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default RecipeFiltered;