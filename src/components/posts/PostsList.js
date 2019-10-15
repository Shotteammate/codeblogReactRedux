import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {
  console.log(posts);
  // should add a flag to check whether the "posts" props is null or not to prevent Dashboard issue

  const list = posts.map((post) => (
    <Link to={'/codeblogReactRedux/post/' + post.id} key={post.id} >
      <Post title={post.title} post={post} />
    </Link>
  ));

  // only render the list if posts exist
  return (
    <div className='section'>
      {posts && list}
    </div>
  )
}

export default PostsList;


