import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    return {
        recipe: state.recipes.all[ownProps.match.params.id]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchRecipe: () => dispatch(fetchRecipe(ownProps.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);