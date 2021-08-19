import React from 'react';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchRecipeInfo();
    }
    render() {
        if(!this.props.recipe) return null;
        let recipe = this.props.recipe.all[0]
        console.log(recipe)
        return (
            <div className="recipe-show-page">
                {this.props.recipe.title}
            <br/>
            <br/>
                <img src={recipe.image}/>

                <div> 
                    Instructions
                    {recipe.instructions}
                </div>
            </div>
        );
    }
}

export default RecipeShow;