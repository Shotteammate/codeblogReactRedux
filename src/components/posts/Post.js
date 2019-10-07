import React from 'react';

const Post = (props) => {
  const { title, author, date } = props;

  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">TEST{title}</span>
        <p>Posted by: {author}</p>
        <p className='grey-text'>Date: {date}</p>
      </div>
    </div>
  )
}

export default Post;
