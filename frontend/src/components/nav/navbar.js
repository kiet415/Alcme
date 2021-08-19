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

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser} className="logout-button">Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'} className="signup-button">Signup</Link>
                <Link to={'/login'} className="login-button">Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-head">
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;