import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
import {Redirect} from 'react-router-dom';
import '../layout/Navbar.css';

class AddPost extends Component {
  state = {
    title: '',
    content: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    //console.log(this.props.profile);
    this.props.addPost(this.state, this.props.profile);
    //redirect
    this.props.history.push('/codeblogReactRedux');
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to='/codeblogReactRedux/signin' />

    return (
      <div className='container navbarFixSignIn'>
        <form onSubmit={this.handleOnSubmit} className="white">
          <h5 className="grey-text tex-darken-3">Add Post</h5>
          <div className="input-field">
            <label>Title</label>
            <input type="text" name="title" onChange={this.handleOnChange} />
          </div>
          <div className="input-field">
            <label>Content</label>
            <textarea className='materialize-textarea' name='content' onChange={this.handleOnChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue darken-2 z-depth-0">Add</button>
          </div>
        </form>
      </div>
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
  addPost: addPost
}

export default connect(mapState, mapDispatch)(AddPost);

