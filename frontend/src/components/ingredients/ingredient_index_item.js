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
                <Link key={this.props.id}className="item-name" to={`/ingredient/${this.props.id}`}>               
                    <div className="nutrition-data">Nutrition Data</div>
                </Link>
            </div>
        </div>
    );
  }
}

export default IngredientIndexItem;