import React, { Component } from 'react';
import CommentTile from './CommentTile'
import CommentForm from './CommentForm'

class ReviewTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    }
    this.addComment = this.addComment.bind(this)
  }

  addComment(comment) {
    let newCommentsArray = this.state.comments.concat(comment)
    this.setState({ comments: newCommentsArray })
  }

  render() {

  let comments = this.state.comments.map(comment => {
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

  if(this.props.profilePhoto) {
    img = <img alt="Icon" src={this.props.profilePhoto.url} width="50" height="50"/>
  }

  return(
    <div>
      {img}
      <h4>Username: {this.props.username}</h4>
      <p>Review: {this.props.body}</p>
      <p>Rating: {this.props.rating}</p>
      <p>{this.props.createdAt}</p>
      {comments}
      <CommentForm
        addComment = {this.addComment}
        beerId = {this.props.beerId}
        reviewId = {this.props.id}
      />
    </div>
  )
}
}

export default ReviewTile;
