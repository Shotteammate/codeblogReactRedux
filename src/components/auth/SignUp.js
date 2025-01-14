import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../actions/authActions'
import '../layout/Navbar.css';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signUp(this.state);
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/codeblogReactRedux' />

    return (
      <div className='container navbarFixSignIn'>
        <form onSubmit={this.handleOnSubmit} className="white">
          <h5 className="grey-text tex-darken-3">Sign Up</h5>
          <div className="input-field">
            <label>Email</label>
            <input type="email" name="email" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" name="password" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label>First Name</label>
            <input type="text" name="firstName" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-2 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
            <div className="grey-text">**Guest Log in account<br/>Email: guest@guest.com<br/>Password: 123456</div>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = (state) => ({
  auth: state.firebaseRD.auth,
  authError: state.authRD.authError
})

const mapDispatch = {
  signUp: signUp
}

export default connect(mapState, mapDispatch)(SignUp);

