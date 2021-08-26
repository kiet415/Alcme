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
                <h1 className="recipe-index-title">Recipes with your ingredients</h1>
                <div className="recipe-row-div">
                    {recipes.map((recipe,index) => (
                        <div className="filtered-recipes"key={index}>
                            <Link to={`/recipe/${recipe.id}`} className="filtered-left">
                                <div>{recipe.title}</div>
                                <br/>
                                <div className= "filt-rec-img"><img src={recipe.image}/></div>

        
                            </Link>
                            <div className="filtered-middle">
                                Items used from list:
                            {recipe.usedIngredients.map(ingredient => (
                                <ul className="filtered-list-items" id="title">
                                    <div>{ingredient.name}</div>
                                </ul>
                            ))}
                            </div>
                            <div className="filtered-right">
                                Items needed:
                            {recipe.missedIngredients.map((ingredient, idx) => {
                                if (idx < 6) {
                                    return (
                                        <ul className="filtered-list-items">
                                            <div>{ingredient.name}</div>
                                        </ul>
                                    )
                                }
                                })}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default RecipeFiltered;