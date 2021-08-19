import React from 'react';

class RecipeCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ingredients : [],
            instructions : [],
            img: '',
            finishedIngredients: [],
            finishedInstructions: [],
        }
    }
    
    handleAdd = (e) => {
        e.preventDefault();
        if(this.state.ingredients) {
            this.setState({finishedIngredients: this.state.finishedIngredients.concat(this.state.ingredients) });
        }
        if (this.state.instructions) {
            this.setState({finishedInstructions: this.state.finishedInstructions.concat(this.state.instructions) });
        }
        this.setState({ingredients : ''});
        this.setState({instructions : ''});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const recipe = {
            title: this.state.title,
            img: this.state.img,
            ingredients: this.state.finishedIngredients,
            instruction: this.state.finishedInstructions,
        }
        this.props.createRecipe(recipe);
        console.log(recipe)
        //this.props.history.push(`/recipes`)
    }

    update(field, e) {
        
        this.setState({ [field]: e.currentTarget.value});
    }
    render() {
        return (
            <div className = "recipe-create-page"> 
                <h1>CREATE RECIPE PAGE</h1>
                <div className="form-page">
                        
                    <div className="review-box"> 
                        <form onSubmit={this.handleAdd}>
                            <div>
                                <label>Title </label>
                                <input
                                    type="text"
                                    value={this.state.img}
                                    onChange={(e) => this.update("img", e)}
                                    className="input"
                                />
                                <br/>
                                <br/>
                                <label>Image URL: </label>
                                <input
                                    type="text"
                                    value={this.state.title}
                                    onChange={(e) => this.update("title", e)}
                                    className="input"
                                    placeholder="optional"
                                />
                            </div>
                            <div> 
                                <br/>
                                <div className="form-dir">Fill in ingredients and instructions one by one. After each ingredient/instruction, click to add!</div>
                                <br/>
                                <label>Add to Ingredients: </label>
                                <input
                                    type="text"
                                    value={this.state.ingredients}
                                    onChange={(e) => this.update("ingredients", e)}
                                    className="input"
                                />
                                <br/>
                                <br/>
                                <label>Add to Instructions: </label>
                                
                                <textarea
                                    value={this.state.instructions}
                                    onChange={(e) => this.update('instructions', e)}
                                    placeholder="Instructions here"
                                    className="input"
                                /> 
                            </div>

                           
                            <br/>
                            <div className="form-btns">
                                <input className="ins-btn" type="submit" value="Add an instruction/ingredient"/>
                            
                                <button className="rec-btn"onClick={this.handleSubmit}>Add Recipe!</button>
                            </div>
                        </form>
                        <br/>
                    </div>
                        <div className="create-recipe-lists">
                            <div className="create-recipe-ingredients-list">List of Ingredients Added </div>
                            {this.state.finishedIngredients.map((ingredient, index) => (
                                <div key={index}>{index+1}. {ingredient}</div>
                            ))}
                            <br/>
                            <div className="create-recipe-directions-list">List of Instructions Added </div>
                            {this.state.finishedInstructions.map((instruction, index) => (
                                <div key={index}>{index+1}. {instruction}</div>
                            ))}
                        </div>
                </div>
            </div>
        );
    }
}

export default RecipeCreate;