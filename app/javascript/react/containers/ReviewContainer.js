import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'

class ReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  render() {
    let reviews = this.props.reviews.map(review => {
      return (
        <ReviewTile
          key = {review.id}
          body = {review.body}
        />
      )
    })

    return(
      <div>
        {reviews}
      </div>
    )
  }

}
export default ReviewContainer;
