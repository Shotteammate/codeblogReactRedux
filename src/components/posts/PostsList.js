import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
  console.log(posts);
  // should add a flag to check whether the "posts" props is null or not to prevent Dashboard issue

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


