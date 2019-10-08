import React from 'react';
import './Post.css';

const Post = (props) => {
  const { title, author, date } = props;

  return (
    <div className="card z-depth-0 postStyle">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>Posted by: {author}</p>
        <p className='grey-text'>Date: {date}</p>
      </div>
    </div>
  )
}

export default Post;
