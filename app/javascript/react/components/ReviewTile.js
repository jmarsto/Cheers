import React from 'react';


const ReviewTile = props => {
  return(
    <div>
      <h4>Username: {props.username}</h4>
      <p>Review: {props.body}</p>
      <p>Rating: {props.rating}</p>
      <p>{props.createdAt}</p>
    </div>
  )
}

export default ReviewTile;
