import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';
import '../layout/Navbar.css';

const PostDetail = (props) => {
  //console.log(props);
  // we can only get props-id, then use the id to fetch other data online (in this case: connect to Firestore)
  //const id = props.match.params.id;
  const { post, auth } = props; 
  if(!auth.uid) return <Redirect to='/codeblogReactRedux/signin' />

  //check post exist
  if(post){
    return (
      <div className='container section navbarFixPostDetail'>
        <div className="card z-depth-0 postDetailStyle">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by: {post.firstName} {post.lastName}</div>
            <div>test date: {moment(post.createAt.toDate().toString()).format('LLL')}</div>
          </div>
        </div>
      </div>
    )
  }else {
    return (
      <div className="container center">
        <p>Loading post...</p>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const posts = state.firestoreRD.data.posts; 
  const post = posts ? posts[id] : null;

  return {
    post: post,
    auth: state.firebaseRD.auth
  }
};

export default compose(
  connect(mapState),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetail);
