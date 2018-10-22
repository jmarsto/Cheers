import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'
import { Link } from 'react-router'

class ReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [{
        key: null,
        id: 1,
        username: "",
        body: "",
        rating: null,
        createdAt: null,
        user: {},
        comments: []
      }]
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
          username = {review.username}
          body = {review.body}
          rating = {review.rating}
          createdAt = {review.created_at}
          user = {review.user}
          comments = {review.comments}
        />
      )
    })
    return(
      <div>
        <h3>Reviews for {this.props.beer}</h3>
        {reviews}
        <Link to={`/beers/${this.props.beerId}/reviews/new`}>New Review</Link>
      </div>
    )
  }

}
export default ReviewContainer;
