import React from 'react';
import CommentTile from './CommentTile'

const ReviewTile = props => {
  let comments = props.comments.map(comment => {
    return(
      <CommentTile
        key = {comment.id}
        id = {comment.id}
        body = {comment.body}
        userName = {comment.username}
        createdAt = {comment.created_at}
        updatedAt = {comment.updated_at}
        />
    )
  })
  
  let img;

  if(props.profilePhoto.url) {
    img = <img alt="Icon" src={props.profilePhoto.url} width="50" height="50"/>
  }

  return(
    <div>
      {img}
      <h4>Username: {props.username}</h4>
      <p>Review: {props.body}</p>
      <p>Rating: {props.rating}</p>
      <p>{props.createdAt}</p>
      {comments}
    </div>
  )
}

export default ReviewTile;
