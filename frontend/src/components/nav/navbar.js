import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="logged-in-buttons">
                <button onClick={this.logoutUser} className="logout">Logout</button>
                <br/>
                <Link to="/recipe/create" className="create-recipe">Create Recipe</Link>
                <Link to="/recipes" className="ingredient-index-button">All Recipes</Link>
                <Link to="/aboutus">About Us</Link>
            </div>
        );
      } else {
        return (
            <div className="logged-out-buttons">
              <Link to={'/login'} className="login">Login</Link>
              <br/>
              <Link to={'/signup'} className="signup">Signup</Link>
              <Link to="/recipes" className="ingredient-index-button">All Recipes</Link>
              <Link to="/aboutus">About Us</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-head">
              <a href="http://localhost:3000/#/" className="logo">
                <img src="ALcme.png"></img>
              </a>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;