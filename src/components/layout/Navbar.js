import React from 'react';
import { Link } from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import { connect } from 'react-redux';
import './Navbar.css';

const Navbar = (props) => {
  const { auth, profile } = props;
  //console.log(props);

  return (
    <nav className="nav-wrapper grey darken-3 navBar">
      <div className="container">
        <Link to='/codeblogRedux/dashboard' className='brand-logo'>Code Blog</Link>
        {auth.uid ? <SignInLink profile={profile}/> : <SignOutLink />}
      </div>
    </nav>
  )
}

const mapState = (state) => {
  //console.log(state);
  return {
    auth: state.firebaseRD.auth,
    profile: state.firebaseRD.profile
  };
}

export default connect(mapState)(Navbar);
