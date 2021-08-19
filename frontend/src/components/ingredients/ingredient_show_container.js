import { connect } from 'react-redux';
import { fetchIngredient } from '../../actions/ingredient_actions';
import IngredientShow from './ingredient_show';

const mapStateToProps = (state, ownProps) => ({
        ingredients: Object.values(state.ingredients),
        ingredient: state.ingredients.ingredient,
    });

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchIngredient: () => dispatch(fetchIngredient(ownProps.match.params.id))

});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientShow);