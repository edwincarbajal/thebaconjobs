import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

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
    }
  }

  showSignUpForm = () => {
    this.setState({
      signUp: {display: !this.state.signUp.display},
      logIn: this.state.logIn.display && {display: !this.state.logIn.display}
     })
  }

  showLogInForm = () => {
    this.setState({
      logIn: {display: !this.state.logIn.display},
      signUp: this.state.signUp.display && {display: !this.state.signUp.display}
     })
  }

  handleEmailChange = (e) => {
    const email = update(this.state.logIn, {
       email: {$set: e.target.value}
    });
    this.setState({ email: email })
  }

  handlePasswordChange = (e) => {
    const password = update(this.state.logIn, {
       password: {$set: e.target.value}
    });
    this.setState({ password: password })
  }

  handleLogInSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {'Content-Type': 'application/json'}
    };
    axios.post('http://localhost:3001/user_token',
      {
        auth: {
          email: `${this.state.email.email}`,
          password: `${this.state.password.password}`
        }
      },
      config
    )
    .then((response) => {
      localStorage.setItem('jwt', response.data.jwt);
      this.props.checkLocalStorage();
      this.props.history.push('/')
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-6 text-center" onClick={this.showSignUpForm}>
          {
            this.state.signUp.display ? (
              "sign up"
            ) : (
              <div>
                <h2>I want to sign up</h2>
                <p>I want to shape the future by joining one of the fastest growing technology startups on TheBacon.</p>
              </div>
            )}
        </div>
        <div className="col-md-6 text-center">
          {
            this.state.logIn.display ? (
              <form onSubmit={this.handleLogInSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input onChange={this.handleEmailChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.logIn.email} />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.logIn.password} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            ) : (
              <div>
                <h2>I want to log in</h2>
                <p>I want to continue my job search or post a new job posting.</p>
                <button type="button" className="btn btn-primary" onClick={this.showLogInForm}>Log In</button>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default GettingStarted;
