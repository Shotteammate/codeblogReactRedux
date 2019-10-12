import React from 'react';
import './Post.css';
import moment from 'moment';

const Post = (props) => {
  const { title, post } = props;
  //console.log(props);

  return (
    <div className="card z-depth-0 postStyle">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>Posted by: {post.firstName} {post.lastName}</p>
        <p className='grey-text'>Date: {moment(post.createAt.toDate().toString()).format('LLL')}</p>
      </div>
    </div>
  )
}

export default Post;
