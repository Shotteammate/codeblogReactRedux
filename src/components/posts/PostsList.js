import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
  const list = posts.map((post)=>(
    <Post 
      key={post.id} 
      title={post.title}
    />
  ));

  // only render the list if posts exist
  return (
    <div className='section'>
      {posts && list}
    </div>
  )
}

export default PostsList;


