import React from 'react';

const CommentTile = props => {
  return(
    <div>
      <div className="comment-tile">
        <p>{props.userName}: "{props.body}"
          <br></br>
          {props.createdAt}
        </p>
      </div>
    </div>
  )
}

export default CommentTile;
