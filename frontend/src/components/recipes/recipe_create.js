import React from 'react';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ingredients : [],
            instructions : [],
            userIngredients: [],
            userInstructions: [],
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({userIngredients: this.state.userIngredients.concat(this.state.ingredients) });
        this.setState({userInstructions: this.state.userInstructions.concat(this.state.instructions) });
        this.setState({ingredients : ''});
        this.setState({instructions : ''});

    }
    update(field, e) {
        
        this.setState({ [field]: e.currentTarget.value});
    }
    render() {
        
        return (
            <div> 
                <h1>CREATE RECIPE PAGE</h1>
                <div className="form-page">
                        
                    <div className="review-box"> 
                        <form onSubmit={this.handleSubmit}>
                        <label>List of Ingredients</label>
                            <input
                                type="text"
                                value={this.state.ingredients}
                                onChange={(e) => this.update("ingredients", e)}
                                
                            />
                            <br/>
                            <label>List of Instructions</label>
                            <br/>
                            <textarea
                                value={this.state.instructions}
                                onChange={(e) => this.update('instructions', e)}
                                placeholder="Instructions here"
                            /> 

                            <input className="form-btn" type="submit" value="Upload Recipe"/>
                        </form>
                    </div>
                    {this.state.userIngredients}
                    <br/>
                    {this.state.userInstructions}
                </div>
            </div>
        );
    }
}

export default RecipeShow;