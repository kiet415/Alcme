import { connect } from 'react-redux';
import { createRecipe } from '../../actions/recipe_actions';
import RecipeCreate from './recipe_create';

const mapStateToProps = state => {
    return {
        user: state.session.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    createRecipe: recipe => dispatch(createRecipe(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreate);