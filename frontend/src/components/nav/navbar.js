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
            <div className="buttons-logged-in">
                <Link to="/recipe/create" className="ingredient-index-button">Create Recipe</Link>
                <button onClick={this.logoutUser} className="logout-button">Logout</button>
            </div>
        );
      } else {
        return (
            <div>
              <br/>
              <Link to="/recipes" className="ingredient-index-button">Recipe index page</Link>
              <Link to={'/signup'} className="signup-button">Signup</Link>
              <Link to={'/login'} className="login-button">Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-head">
              <a href="http://localhost:3000/#/">
                <img src="ALcme.png"></img>
              </a>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;