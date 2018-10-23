import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'
import { Link } from 'react-router'

class ReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/beers/${this.props.beerId}/reviews`)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
        }
      })
    .then((response) => response.json())
    .then((data) => {
      this.setState({ reviews: data.reviews })
    })
  }

  render() {
    let reviews = this.state.reviews.map(review => {
      return (
        <ReviewTile
          key = {review.id}
          id = {review.id}
          profilePhoto = {review.profile_photo}
          username = {review.username}
          body = {review.body}
          rating = {review.rating}
          createdAt = {review.created_at}
          user = {review.user}
          comments = {review.comments}
          beerId = {this.props.beerId}
        />
      )
    })
    return(
      <div>
        <h3>Reviews:</h3>
        {reviews}
        <Link to={`/beers/${this.props.beerId}/reviews/new`}>New Review</Link>
      </div>
    )
  }

}
export default ReviewContainer;
