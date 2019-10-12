import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/authActions';
import { Redirect } from 'react-router-dom';
import '../layout/Navbar.css';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.signIn(this.state);
    //redirect to home page
    //console.log(this.props);
    this.props.history.push('/');
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/' />

    return (
      <div className='container navbarFixSignIn'>
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
  signIn: signIn
}

export default connect(mapState, mapDispatch)(SignIn);

