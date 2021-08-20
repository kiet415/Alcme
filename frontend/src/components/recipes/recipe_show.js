import React from 'react';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        if(this.props.match.params.id.length > 10) {
            this.props.fetchRecipe();
        } else {
            this.props.fetchRecipeInfo();
        }
    }
    
    render() {
        if(!this.props.recipe) return null;
        let recipe = "42342342";
        if(this.props.match.params.id.length > 10) {
            recipe = this.props.recipe.all
        } else {
            recipe = this.props.recipe.all[0]
        }
        console.log(recipe)
        
        return (
            <div className="recipe-show-page">
                {recipe.title}
                {recipe.image ? 
                    <div><img src={recipe.image}/></div>
                    : null}

                <div> 
                    Instructions
                    <div>{recipe.instructions}</div>
                </div>
            </div>
        );
    }
}

export default RecipeShow;