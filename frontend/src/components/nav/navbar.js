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
            <div className="buttons-top-right">
                <button onClick={this.logoutUser} className="logout-login">Logout</button>
                <Link to="/recipe/create" className="ingredient-signup">Create Recipe</Link>
                <Link to="/recipes" className="ingredient-index-button">All Recipes</Link>
            </div>
        );
      } else {
        return (
            <div className="buttons-top-right">
              <Link to={'/login'} className="logout-login">Login</Link>
              <Link to={'/signup'} className="ingredient-signup">Signup</Link>
              <Link to="/recipes" className="ingredient-index-button">All Recipes</Link>
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