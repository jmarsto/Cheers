import React from 'react';


const ReviewTile = props => {
  console.log(props)
  return(
    <div>
      <img alt="Icon" src={props.profilePhoto.url} width="50" height="50"/>
      <h4>Username: {props.username}</h4>
      <p>Review: {props.body}</p>
      <p>Rating: {props.rating}</p>
      <p>{props.createdAt}</p>
    </div>
  )
}

export default ReviewTile;
