import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.all
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);