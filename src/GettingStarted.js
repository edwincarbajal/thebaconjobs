import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import styles from './GettingStarted.css';

import LogIn from './LogIn';
import SignUp from './SignUp';

class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: {
        display: false,
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      logIn: {
        display: false,
        email: '',
        password: ''
      }
    };
    // This function get's binded in the contructor because it uses the async/await keywords
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
  }

  showSignUpForm = () => {
    this.setState({
      signUp: { display: !this.state.signUp.display },
      logIn: this.state.logIn.display && { display: !this.state.logIn.display }
    });
  };

  showLogInForm = () => {
    this.setState({
      logIn: { display: !this.state.logIn.display },
      signUp: this.state.signUp.display && {
        display: !this.state.signUp.display
      }
    });
  };

  handleFirstNameChange = e => {
    const first_name = update(this.state.signUp, {
      first_name: { $set: e.target.value }
    });
    this.setState({ first_name });
  };

  handleLastNameChange = e => {
    const last_name = update(this.state.signUp, {
      last_name: { $set: e.target.value }
    });
    this.setState({ last_name });
  };

  handleSignUpEmailChange = e => {
    const email = update(this.state.signUp, {
      email: { $set: e.target.value }
    });
    this.setState({ email });
  };

  handleLogInEmailChange = e => {
    const email = update(this.state.logIn, {
      email: { $set: e.target.value }
    });
    this.setState({ email });
  };

  handleSignUpPasswordChange = e => {
    const password = update(this.state.signUp, {
      password: { $set: e.target.value }
    });
    this.setState({ password: password });
  };

  handleLogInPasswordChange = e => {
    const password = update(this.state.logIn, {
      password: { $set: e.target.value }
    });
    this.setState({ password: password });
  };

  createUser = () => {
    return axios.post('http://localhost:3001/v1/users', {
      user: {
        first_name: this.state.first_name.first_name,
        last_name: this.state.last_name.last_name,
        email: this.state.email.email,
        password: this.state.password.password
      }
    });
  };

  getUserPermission = () => {
    return axios.post('http://localhost:3001/user_token', {
      auth: {
        email: `${this.state.email.email}`,
        password: `${this.state.password.password}`
      }
    });
  };

  async handleSignUpSubmit(e) {
    e.preventDefault();

    try {
      const user = await this.createUser();
      const token = await this.getUserPermission();
      localStorage.setItem('jwt', token.data.jwt);
      this.props.history.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  handleLogInSubmit = e => {
    e.preventDefault();

    const config = {
      headers: { 'Content-Type': 'application/json' }
    };
    axios
      .post(
        'http://localhost:3001/user_token',
        {
          auth: {
            email: `${this.state.email.email}`,
            password: `${this.state.password.password}`
          }
        },
        config
      )
      .then(response => {
        localStorage.setItem('jwt', response.data.jwt);
        this.props.checkLocalStorage();
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="row getting-started-container">
        <div className="signup-container col-md-6 text-center">
          {this.state.signUp.display
            ? <SignUp
                handleSignUpSubmit={this.handleSignUpSubmit}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
                handleSignUpEmailChange={this.handleSignUpEmailChange}
                handleSignUpPasswordChange={this.handleSignUpPasswordChange}
                first_nameValue={this.state.signUp.first_name}
                last_nameValue={this.state.signUp.last_name}
                emailValue={this.state.signUp.email}
                passwordValue={this.state.signUp.password}
              />
            : <div>
                <h2>I want to sign up</h2>
                <p>
                  I want to shape the future by joining one of the fastest
                  growing technology startups on TheBacon.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg btn-block"
                  onClick={this.showSignUpForm}
                >
                  Sign up
                </button>
              </div>}
        </div>
        <div className="login-container col-md-6 text-center">
          {this.state.logIn.display
            ? <LogIn
                handleLogInSubmit={this.handleLogInSubmit}
                handleLogInEmailChange={this.handleLogInEmailChange}
                handleLogInPasswordChange={this.handleLogInPasswordChange}
                emailValue={this.state.logIn.email}
                passwordValue={this.state.logIn.password}
              />
            : <div>
                <h2>I want to log in</h2>
                <p>
                  I want to continue my job search<br />or post a new job
                  posting.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg btn-block"
                  onClick={this.showLogInForm}
                >
                  Log In
                </button>
              </div>}
        </div>
      </div>
    );
  }
}

export default GettingStarted;
