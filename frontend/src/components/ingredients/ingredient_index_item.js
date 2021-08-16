import React from 'react';
import { Link } from 'react-router-dom';

class IngredientIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div>

            <div>
                {/* <Link className="item-name" to={`/ingredient/${this.props.ingredient.id}`} > */}
                <Link className="item-name" to={`/ingredient/hi`}>
                    
                    Nutrition Data
                </Link>
            </div>
        </div>
    );
  }
}

export default IngredientIndexItem;