import React from 'react';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }
    componentDidMount() {
        if(this.props.match.params.id.length > 10) {
            console.log('hi')
            this.props.fetchRecipe().then(() => {
                this.setState({loading: false});
            });
        } else {
            console.log('bye')
            this.props.fetchRecipeInfo().then(() => {
                this.setState({loading: false});
            });
        }
    }
    handleClick = (id) => {
        this.props.removeRecipe(id);
    }
    renderDeleteButton() {
        if(this.props.user) {
            if(this.props.user.id === this.props.recipe.all.user_id) {
                return(
                    <button onClick={() => this.handleClick(this.props.recipe.all._id)}>Delete Recipe</button>
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
                    {this.renderDeleteButton()}
                    <img className="recipe-image" src={this.props.recipe.all.image}/>

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
            return (
                <div>
                    <img className="recipe-image" src={this.props.recipe.all[0].image}/>

                    <h1 className="h-title">{this.props.recipe.all[0].title}</h1>
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
                            <div className="recipe-show-instructions-list">{this.props.recipe.all[0].instructions}</div>
                        </div>
                        

                    </div>
                </div>
            )
        }
    }
    render() {
        if(!this.props.recipe) return null;
        console.log(this.props)
        return (
            
            <div>
                {this.renderRecipe()}
            </div>
        );
    }
}

export default RecipeShow;