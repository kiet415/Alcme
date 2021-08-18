import { connect } from 'react-redux';
import { fetchIngredients } from '../../actions/ingredient_actions';
import { fetchRecipeByIngredients } from '../../actions/recipe_actions';
import IngredientIndex from './ingredient_index';

const mapStateToProps = (state) => {
    return {
        ingredients: Object.values(state.ingredients)
    };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchIngredients: () => dispatch(fetchIngredients()),
    fetchRecipeByIngredients: (ingredients) => dispatch(fetchRecipeByIngredients(ingredients))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientIndex);