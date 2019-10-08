import React from 'react';
import {NavLink} from 'react-router-dom';


const SignInLink = () => {
  return (
    <ul className="right">
      <li><NavLink to='/addpost'>Add Post</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating blue darken-2'>temp</NavLink></li>
    </ul>
  )
}

export default SignInLink;
