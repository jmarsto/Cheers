import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: "",
      errors: []
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formPayload = this.formPayload.bind(this);
    this.postNewReview = this.postNewReview.bind(this)
    this.clearState = this.clearState.bind(this)
  }

  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  formPayload(){
    return {
      body: this.state.body,
      rating: this.state.rating,
      beer_id: this.props.params.id
    };
  }
  postNewReview(payload) {
    fetch(`/api/v1/beers/${this.props.params.id}/reviews.json`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        browserHistory.push(`/beers/${payload.beer_id}`)
      } else {
        return response.json()
      }
    })
    .then(response => {
      return response.errors
    })
    .then(errors => {
      this.setState({ errors: errors })
      console.log(this.state.errors);
    })
    .catch(console.log("ERRORSZ"));
  }

  clearState() {
    this.setState({
      body: "",
      rating: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
      let payload = this.formPayload();
      this.postNewReview(payload);
      // set errors
      // render errors
      // rerender component or something
  }

  render() {
    let errors
    if (!!this.state.errors.length) {
      errors = this.state.errors.map(error => {
        return (
          <div>{error}</div>
        )
      })
    }

    return(
      <div>
      <h1> Add A Review </h1>
      <div className= "reviewForm">
        {errors}
        <form className="formlabels" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
          <label htmlFor="body">Body:</label>
          <input type="text" name="body" value={this.state.body}></input>
          <label htmlFor="rating">Answer:</label>
          <input type="number" name="rating" value={this.state.rating}></input>
          <input className="submitButton" type="submit" value="Submit" />
        </form>
      </div>
      </div>
    )
  }

}
export default ReviewForm;
