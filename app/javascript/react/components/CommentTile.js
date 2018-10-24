import React from 'react';

const CommentTile = props => {
  return(
    <div>
      <div className="comment">
        <p>User: {props.userName}
          <br></br>
          {props.body}
          <br></br>
          {props.createdAt}
        </p>
      </div>
    </div>
  )
}

export default CommentTile;
