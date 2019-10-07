import React from 'react'

const PostDetail = (props) => {
  //console.log(props);
  const id = props.match.params.id;
  const { title, content, author , date} = props;

  return (
    <div className='container section'>
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Test title-{id}{title}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere tempore commodi, reiciendis nihil quis dolorum quod, maiores debitis tenetur iste. Nesciunt, ratione! Illo consequuntur culpa, facilis eius voluptates cupiditate!
            {content}
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: {author}</div>
          <div>test date: {date}</div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail;
