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

                <Link key={this.props.id}className="item-name" to={`/ingredient/${this.props.ingId}`}>
                    
                    Nutrition Data

                </Link>
            </div>
        </div>
    );
  }
}

export default IngredientIndexItem;