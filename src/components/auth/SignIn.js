import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleOnSubmit} className="white">
          <h5 className="grey-text tex-darken-3">Sign In</h5>
          <div className="input-field">
            <label>Email</label>
            <input type="email" name="email" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" name="password" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-2 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;

