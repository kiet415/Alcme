import React from 'react';
import { Link } from 'react-router-dom';
class RecipeFiltered extends React.Component {
    
    render() {
        //if(this.props.recipes === undefined) return null;
        let recipes = this.props.location.state.recipes
        return (
            <div>
                <h1 className="recipe-index-title">Recipes with your ingredients</h1>
                <div className="recipe-row-div">
                    {recipes.map((recipe,index) => (
                        <div className="filtered-recipes"key={index+'x'}>
                            <Link to={`/recipe/${recipe.id}`} className="filtered-left" key={index+'v'}>
                                <div>{recipe.title}</div>
                                <br/>
                                <div className= "filt-rec-img"><img src={recipe.image} alt="recipe"/></div>

        
                            </Link>
                            <div className="filtered-middle" key={index+'w'}>
                                Items used from list:
                            {recipe.usedIngredients.map(ingredient => (
                                <ul className="filtered-list-items" id="title" key={index}>
                                    <div key={index+'ha'} >{ingredient.originalName}</div>
                                </ul>
                            ))}
                            </div>
                            <div className="filtered-right" key={index+'y'}>
                                Items needed:
                            {recipe.missedIngredients.map((ingredient, idx) => {
                                if (idx < 4) {
                                    return (
                                        <ul className="filtered-list-items" key={idx} >
                                            <div key={idx+'za'}>{ingredient.originalName}</div>
                                        </ul>
                                    )
                                } else  {
                                    return null;
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