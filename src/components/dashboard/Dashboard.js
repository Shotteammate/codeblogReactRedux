import React, { Component } from 'react';
import PostsList from '../posts/PostsList';
import Profile from './Profile';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {
  render() {
    //console.log(this.props.posts);
    const { posts, auth } = this.props;
    //const reversePosts = posts.reverse(); //reverse posts, new post comes first

   // if(!auth.uid) return <Redirect to='/codeblogRedux/signin' />
    
    return (
      <div className='container'>
        <div className="row">
          <div className="col s12 m4">
            <Profile />
          </div>
          <div className="col s12 m8">
            <PostsList posts={posts} />
          </div>
        </div>
      </div>
    )
  }
}

//state is the whole store
const mapState = (state) => {
  //console.log(state);
  return {
    auth: state.firebaseRD.auth,
    posts: state.firestoreRD.ordered.posts||state.postRD.posts, /* getting a "TypeError: Cannot read property 'map' of undefined". This is because on the initial rendering firestore hasn't had a chance to grab the latest data. You can see the console.log(state) inside mapStateToProps and see that the ordered object is empty initially. To combat this issue, you need to pass a fallback content when mapping state to props */
  }
};

export default compose(
  connect(mapState),
  firestoreConnect([          // mapState of Firebase
    { collection: 'posts' }
  ])
)(Dashboard);