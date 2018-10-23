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
        created_at: null,
        profile_photo: {
          url: null
        },
        user: {
          id: null,
          email: "",
          first_name: "",
          last_name: "",
          user_name: "",
          created_at: "",
          updated_at: "",
          age: null,
          profile_photo: {
            url: null
          }
        },
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
          profilePhoto = {review.profile_photo}
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
