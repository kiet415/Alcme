import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user); 
  }
  demoLogIn = (e) => {
    e.preventDefault();
    let demo = {
      username: "DEMO123",
      password: "DEMO123",
    }
    this.props.login(demo);
  }
  renderErrors() {
    return(
        <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        
        <form className="authpage"onSubmit={this.handleSubmit}>
        <h1>Log In</h1>
          <div>{this.renderErrors()}</div>
          <div>
              <input className="input" type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            <br/>
              <input className="input" type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input className="authbutton" type="submit" value="Submit" />
            
          </div>
          <button className="authbutton" onClick={this.demoLogIn}>Demo Log In</button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);