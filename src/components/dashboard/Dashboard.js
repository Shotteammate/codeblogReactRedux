import React, { Component } from 'react';
import PostsList from '../posts/PostsList';


class Dashboard extends Component {
  render() {
    return (
      <div className='container'>
        <PostsList />
      </div>
    )
  }
}

export default Dashboard;