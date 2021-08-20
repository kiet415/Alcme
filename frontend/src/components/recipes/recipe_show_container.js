import { STATES } from 'mongoose';
import { connect } from 'react-redux';
import { fetchRecipe, fetchRecipeInfo, removeRecipe } from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = state => {
    console.log(state)
    return {
        recipe: state.recipes,
        user: state.session.user
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchRecipeInfo: () => dispatch(fetchRecipeInfo(ownProps.match.params.id)),
    fetchRecipe: () => dispatch(fetchRecipe(ownProps.match.params.id)),
    removeRecipe: (id) => dispatch(removeRecipe(id)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);