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

    if(this.props.profilePhoto.url) {
      img = <img alt="Icon" src={this.props.profilePhoto.url} width="50" height="50"/>
    }

    return(
      <div>
        <div className="review-tile">
          <div className="entire-review">
            {img}
            <h4 className="reviewer-name">{this.props.username}</h4>
            <p className="review-rating">Review: {this.props.body}</p>
            <p className="review-rating">Rating: {this.props.rating}</p>
            <p>{this.props.createdAt}</p>
          </div>
          <div className="comments-container">
            {comments}
            <CommentForm
              addComment = {this.addComment}
              beerId = {this.props.beerId}
              reviewId = {this.props.id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewTile;
