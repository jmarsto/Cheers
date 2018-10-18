import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'

class ReviewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = this.props.reviews.map(review => {
      return (
        <ReviewTile
          key = {review.id}
          username = {review.username}
          body = {review.body}
          rating = {review.rating}
          createdAt = {review.created_at}
        />
      )
    })

    return(
      <div>
        <h3>Reviews for {this.props.beer}</h3>
        {reviews}
      </div>
    )
  }

}
export default ReviewContainer;
