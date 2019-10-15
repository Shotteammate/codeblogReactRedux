import React from 'react';
import {NavLink} from 'react-router-dom';


const SignOutLink = () => {
  return (
    <ul className="right">
      <li><NavLink to='/codeblogReactRedux/signup'>Sign Up</NavLink></li>
      <li><NavLink to='/codeblogReactRedux/signin'>Login</NavLink></li>
    </ul>
  )
}

export default SignOutLink;
