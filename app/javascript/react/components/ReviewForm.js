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
    this.postNewReview = this.postNewReview.bind(this)
    this.clearState = this.clearState.bind(this)
  }

  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  postNewReview(payload) {
    fetch(`/api/v1/beers/${this.props.params.id}/reviews`, {
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
        .then(response => {
            return response.errors
        })
        .then(errors => {
          this.setState({ errors: errors })
        })
        .catch(console.log("ERROR in FETCH"));
      }
    })
  }

  clearState() {
    this.setState({
      body: "",
      rating: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
      let payload = {
        body: this.state.body,
        rating: this.state.rating,
        beer_id: this.props.params.id
      };
      this.postNewReview(payload);
  }

  render() {
    let errors
    if (this.state.errors.length) {
      errors = this.state.errors.map(error => {
        return (
          <div>
            {error}
          </div>
        )
      })
    }

    return(
      <div>
        <h1 className="cheers">CHEERS</h1>
        <h2 className="classy">A Boston Local Brew Review Site</h2>
        <h1 className="add-a-review"> Add A Review </h1>
        <div className= "review-form">
          <div className = "flash">
          {errors}
          </div>
          <form className="formlabels" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
            <label htmlFor="body">Review:</label>
            <input type="text" name="body" value={this.state.body}></input>
            <label htmlFor="rating">Rating (out of 5):</label>
            <input type="number" name="rating" value={this.state.rating}></input>
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }

}
export default ReviewForm;
