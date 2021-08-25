import React from 'react';
import { Link } from 'react-router-dom'
import {AboutUs} from '../about/about'
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
          
                <button className="all-recipes"><Link to="/recipes" className="ingredient-index-button">All Recipes</Link></button>
                <button className="all-recipes"><Link to="/recipe/create" className="ingredient-index-button">Create Recipe</Link></button>
                <button className="all-recipes"><Link to="/aboutus" className="ingredient-index-button">About Us</Link></button>
                <button onClick={this.logoutUser} className="logout-login"><a>Logout</a></button>
            </div>
        );
      } else {
        return (
            <div className="buttons-top-right">
              <button className="all-recipes"><Link to="/recipes" className="ingredient-index-button">All Recipes</Link></button>
              <button className="all-recipes"><Link to="/aboutus" className="ingredient-index-button">About Us</Link></button>
              <button className="logout-login"><Link to={'/login'} >Login</Link></button>
              <button className="logout-login"><Link to={'/signup'} >Signup</Link></button>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-head">
              <a href="/" className="logo">
                <img src="ALcme.png"></img>
              </a>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;