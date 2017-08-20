import React from 'react';

const SignUp = props => {
  return (
    <form onSubmit={props.handleSignUpSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputFirstName4" className="col-form-label">
            First Name
          </label>
          <input
            onChange={props.handleFirstNameChange}
            type="text"
            className="form-control"
            id="inputFirstName4"
            placeholder="First Name"
            value={props.first_nameValue}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputLastName4" className="col-form-label">
            Last Name
          </label>
          <input
            onChange={props.handleLastNameChange}
            type="text"
            className="form-control"
            id="inputLastName4"
            placeholder="Last Name"
            value={props.last_nameValue}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail" className="col-form-label">
          Email
        </label>
        <input
          onChange={props.handleSignUpEmailChange}
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
          value={props.emailValue}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword2" className="col-form-label">
          Password
        </label>
        <input
          onChange={props.handleSignUpPasswordChange}
          type="password"
          className="form-control"
          id="inputPassword2"
          placeholder="password"
          value={props.passwordValue}
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-warning btn-lg btn-block"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignUp;
