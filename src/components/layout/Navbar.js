import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import { connect } from 'react-redux';
import './Navbar.css';
//import 'materialize-css/dist/css/materialize.min.css';
import M from '../../../node_modules/materialize-css/dist/js/materialize';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import { signOut } from '../../actions/authActions';
//'materialize-css/dist/js/materialize.min.js'



class Navbar extends Component {

  componentDidMount() {
    document.addEventListener('click', function () {
      console.log("click in componentDidMount");
      const slide_menu = document.querySelectorAll('.sidenav');
      M.Sidenav.init(slide_menu, {});
    });
  }

  handleSideNav = () => {
    document.addEventListener('click', function () {
      //console.log("click in handleSideNav");
      const slide_menu = document.querySelectorAll('.sidenav');
      M.Sidenav.init(slide_menu, {});
    });
  }

  render() {
    const { auth, profile } = this.props;

    return (
      <React.Fragment>
        <nav className="nav-wrapper grey darken-3 navBar">
          <div className="container">
            <Link to='/codeblogReactRedux' className='brand-logo'>Code Blog</Link>

            <a className='sidenav-trigger' data-target="slide-out" onClick={this.handleSideNav}>
              <i className='material-icons'>menu</i></a>
            {auth.uid ? <SignInLink profile={profile} /> : <SignOutLink />}
          </div>
        </nav>

        {auth.uid ?
          <ul className="sidenav" id='slide-out'>
            <li><Link className="sidenav-close" to="/codeblogReactRedux/addpost">Add Post</Link></li>
            <li><Link className="sidenav-close" to="/codeblogReactRedux/signin" onClick={this.props.signOut}>Logout</Link></li>
          </ul>
          : <ul className="sidenav" id='slide-out'>
            <li><Link className="sidenav-close" to="/codeblogReactRedux/signup">SignUp</Link></li>
            <li><Link className="sidenav-close" to="/codeblogReactRedux/signin">SignIn</Link></li>
          </ul>
        }
      </React.Fragment>
    )
  }
}

const mapState = (state) => {
  //console.log(state);
  return {
    auth: state.firebaseRD.auth,
    profile: state.firebaseRD.profile
  };
}

const mapDispatch = {
  signOut: signOut
}

export default connect(mapState, mapDispatch)(Navbar);
