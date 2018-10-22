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
  return(
    <div>
      <h4>Username: {props.username}</h4>
      <p>Review: {props.body}</p>
      <p>Rating: {props.rating}</p>
      <p>{props.createdAt}</p>
      {comments}
    </div>
  )
}

export default ReviewTile;
