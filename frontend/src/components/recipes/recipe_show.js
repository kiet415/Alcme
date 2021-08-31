import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
    componentDidMount() {
        if(this.props.match.params.id.length > 10) {
            this.props.fetchRecipe().then(() => {
                this.setState({loading: false});
            });
        } else {
            this.props.fetchRecipeInfo().then(() => {
                this.setState({loading: false});
            });
        }
    }
    handleClick = (id) => {
        this.props.removeRecipe(id);
    }
    renderEditButton() {
        if(this.props.user) {
            if(this.props.user.id === this.props.recipe.all.user_id) {
                return <button id="edit-recipe">
                    Edit Recipe
                </button>
            }
        }
    }
    renderDeleteButton() {
        if(this.props.user) {
            if(this.props.user.id === this.props.recipe.all.user_id) {
                return(
                    <button id="edit-recipe">

                        <a href="/recipes" onClick={() => this.handleClick(this.props.recipe.all._id)}>Delete Recipe</a>
                    </button>
                )
            }
        }
    }
    renderRecipe() {
        if(this.state.loading) {
            return (
                <div>Loading</div>
            )
        }
        if(this.props.match.params.id.length > 10) {
            return (
                
                <div>
                    <div id="recipe-manage">
                    {this.renderDeleteButton()}
                    {this.renderEditButton()}
                    </div>

                    { this.props.recipe.all.image ?
                     
                     <img className="recipe-image" src={this.props.recipe.all.image} alt="recipe" /> :
                        <div className="recipe-image">
                            <img src='ALcme.png' width="400px" alt="logo" />
                        </div>
                    }

                    <h1 className="h-title">{this.props.recipe.all.title}</h1>
                    <div className="recipe-show-box">
                        <div className="recipe-show-title">
                            
                           
                            <div className="recipe-show-ingredients">
                                <div className="recipe-show-ingredients-title">Ingredients</div>
                                {this.props.recipe.all.ingredients.map(ingredient => (
                                    <div className="recipe-show-ingredients-name">{ingredient}</div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="recipe-show-instructions">
                            <div className="recipe-show-instructions-title">Instructions</div>
                            <div className="recipe-show-instructions-list">
                            {this.props.recipe.all.instructions.map(instruction => (
                                <div>{instruction}</div>
                            ))}
                            </div>
                        </div>
                        

                    </div>
                </div>
            )
        } else {
            const instr = this.props.recipe.all[0].instructions;
            const instrHTML = ReactHtmlParser(instr)
            
            
            return (
                <div>
                    <img className="recipe-image" src={this.props.recipe.all[0].image} alt="recipe"/>

                    <h1 className="h-title">{this.props.recipe.all[0].title}</h1>
                    <div className="recipe-link"><a  href={this.props.recipe.all[0].spoonacularSourceUrl} >Link to Original Recipe </a></div>
                    <div className="recipe-show-box">
                        <div className="recipe-show-title">
                        
                           
                            <div className="recipe-show-ingredients">
                                <div className="recipe-show-ingredients-title">Ingredients</div>
                                
                                {this.props.recipe.all[0].extendedIngredients.map(ingredient => (
                                    <div className="recipe-show-ingredients-name">{ingredient.name}</div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="recipe-show-instructions">
                            <div className="recipe-show-instructions-title">Instructions</div>
                            <div className="recipe-show-instructions-list">{instrHTML}</div>
                        </div>
                        

                    </div>
                    
                </div>
            )
        }
    }
    render() {
        if(!this.props.recipe) return null;
        console.log(this.props.recipe)
        return (
            
            <div>
                {this.renderRecipe()}
            </div>
        );
    }
}

export default RecipeShow;