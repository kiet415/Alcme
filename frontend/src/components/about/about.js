import React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="about-us-page">
                <h1 className="about-us-title">Meet the Developers</h1>
                <div className="about-us-info">
                    Alcme is a project created by three passionate engineers from 
                    App Academy where we wanted to provide a means of inspiration
                    for cooks at home. Alcme allows users to select ingredients
                    that they have and filters out what possible recipes that they
                    can make from them.
                </div>
                <div className="about-us">
                    <div>
                        <h3 className="dev-title">Kiet Nguyen</h3>
                        <h5 className="dev-role">Project Lead and Frontend</h5>
                        <div className="about-dev">
                            <img className="dev-image" src="kiet.jpg" alt="icon"></img>
                            <p className="dev-oneliner">The genius behind Alcme... "I always have food in my fridge but never know what to make"</p>
                        </div>
                        <div className="icons">
                            <div className="linked-in-icon">
                            <a href="https://www.linkedin.com/in/kietnguyen7/">
                                <img className="linked-in-logo" src="linkedin.png" alt="icon" ></img>
                            </a>
                            </div>
                            <div className="git-hub-icon">
                                <a href="https://github.com/kiet415">
                                    <img className="github-logo" src="github.png" alt="icon" ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                    <h3 className="dev-title">Joshua Elliott</h3>
                    <h5 className="dev-role">Backend and API</h5>
                        <div className="about-dev">
                            <img className="dev-image" src="josh.png" alt="icon" ></img>
                            <p className="dev-oneliner">Former fine-dining chef turned software developer... "I just can't leave food behind"</p>
                        </div>
                        <div className="icons">
                            <div className="linked-in-icon">
                                <a href="https://www.linkedin.com/in/joshua-elliott-a044b0209/">
                                    <img className="linked-in-logo" src="linkedin.png" alt="icon" ></img>
                                </a>
                            </div>
                            <div className="git-hub-icon">
                                <a href="https://github.com/brassmacks">
                                    <img className="github-logo" src="github.png" alt="icon" ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                    <h3 className="dev-title">Luca Brilli</h3>
                    <h5 className="dev-role">User Auth and Float</h5>
                        <div className="about-dev">
                            <img className="dev-image" src="luca.jpeg" alt="icon"></img>
                            <p className="dev-oneliner">Techie, foodie, and software developer... "I love good food"</p>
                        </div>
                        <div className="icons">
                            <div className="linked-in-icon">
                                <a href="https://www.linkedin.com/in/lucabrilli/">
                                    <img className="linked-in-logo" src="linkedin.png" alt="icon"></img>
                                </a>
                            </div>
                            <div className="git-hub-icon">
                                <a href="https://github.com/lbrilli">
                                    <img className="github-logo" src="github.png" alt="icon"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;




