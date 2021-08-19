import { connect } from 'react-redux';
import { fetchRecipe, fetchRecipeInfo } from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {
   
    return {
        recipe: state.recipes
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    // fetchRecipe: () => dispatch(fetchRecipe(ownProps.match.params.id)),
    fetchRecipeInfo: () => dispatch(fetchRecipeInfo(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);