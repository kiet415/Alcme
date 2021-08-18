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
        console.log(this.props)
        return (
            <div>
                Recipe Filtered Page
                <div>
                    {/* {this.props.recipes.map((recipe,index) => (
                        <div key={index}>
                            <Link to={`recipe/${index}`}>
                                
                                {recipe.title}
                                <img src={recipe.image}/>
                            </Link>
                        </div>
                    ))} */}
                </div>
            </div>
        );
    }
}

export default RecipeFiltered;