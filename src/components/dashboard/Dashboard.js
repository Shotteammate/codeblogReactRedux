import React, { Component } from 'react';
import PostsList from '../posts/PostsList';
import Profile from './Profile';
import {connect} from 'react-redux';


class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const {posts} = this.props;

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
const mapState = (state) => ({
  posts: state.postRD.posts
});

export default connect(mapState)(Dashboard);