import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';

const SignInLink = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/codeblogRedux/addpost'>Add Post</NavLink></li>
      <li><a onClick={props.signOut} >Log Out</a></li>
      <li><NavLink to='/codeblogRedux/dashboard' className='btn btn-floating blue darken-2'>{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatch = {
  signOut: signOut
}

export default connect(null, mapDispatch)(SignInLink);
