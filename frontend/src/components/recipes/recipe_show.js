import React from 'react';
import { Link } from 'react-router-dom';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div>

            <div>
                <h1>Recipe Title here</h1>
                <div>List of Ingredients</div>
                <div>Directions</div>
            </div>
        </div>
    );
  }
}

export default RecipeShow;