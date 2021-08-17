import React from 'react';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchRecipe();
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.recipe.title}
                <img src={this.props.recipe.image}/>
            </div>
        );
    }
}

export default RecipeShow;