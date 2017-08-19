import React from 'react';

const LogIn = (props) => {
  return(
    <form onSubmit={props.handleLogInSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input onChange={props.handleLogInEmailChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={props.emailValue} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input onChange={props.handleLogInPasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={props.passwordValue} />
      </div>
      <button type="submit" className="btn btn-outline-warning btn-lg btn-block">Log in</button>
    </form>
  );
}

export default LogIn;
