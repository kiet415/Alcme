import React from 'react';

class Splash extends React.Component {
    continueButton = (e) => {
        e.preventDefault();
        this.props.history.push("/ingredients")
    }
    render() {
        return (
            <div className="splash-page">
                <h1 className="splash-title">Welcome to Alcme!</h1>
                <div className="splash-info">
                    Have you ever found yourself with the urge to cook, but came up short on ideas? 
                    If so, then Alcme might just be the perfect addition to your kitchen. Just start by selecting a few ingredients  
                    and you’ll be provided a list of recipes to choose from. Whether you’re not sure what sounds good to eat or you’re 
                    curious about what you can make with what you’ve got in the fridge, Alcme has you covered.  
                    If you find something you’d like to try but it doesn’t quite fit the moment, just sign in and you can save your recipes to your
                    profile. You can even use Alcme to upload and edit your own creations. 
                    Don’t let a lack of inspiration come between you and your next meal, try Alcme today!
                </div>
                <button onClick={this.continueButton}>Continue</button>
                <br/>
                <img src="ALcme.png" alt="icon"/>
            </div>
        )
    }
}

export default Splash;




