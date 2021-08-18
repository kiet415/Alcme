import { connect } from 'react-redux';
import { fetchIngredient } from '../../actions/ingredient_actions';
import IngredientShow from './ingredient_show';

const mapStateToProps = (state, ownProps) => {
    
    return {
        ingredient: state.ingredients.all[ownProps.match.params.id]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchIngredient: () => dispatch(fetchIngredient(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientShow);