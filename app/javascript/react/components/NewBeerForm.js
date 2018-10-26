import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NewBeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        style: "",
        description: "",
        ABV: "",
        errors: []
    };
    this.postNewBeer = this.postNewBeer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  postNewBeer(payload) {
    fetch(`/api/v1/beers.json`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        browserHistory.push(`/`)
      } else {
        return response.json()
        .then(response => {
          return response.errors
        })
        .then(errors => {
          this.setState({ errors: errors })
          console.log(this.state.errors);
        })
        .catch(console.log("ERROR in FETCH"));
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
      let payload = {
        name: this.state.name,
        style: this.state.style,
        description: this.state.description,
        ABV: this.state.ABV,
      };
      this.postNewBeer(payload);
  }

  render() {

    let errors
    if (this.state.errors.length) {
      errors = this.state.errors.map(error => {
        return (
          <div>{error}</div>
        )
      })
    }

    return(
      <div>
        <div className = "flash">
          {errors}
        </div>
        <h1 className="add-title"> Add A New Beer To Be Reviewed! </h1>

        <form className="add-beer-form" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={this.state.name}></input>

          <label htmlFor="style">Style:</label>
          <input type="text" name="style" value={this.state.style}></input>

          <label htmlFor="ABV">ABV:</label>
          <input type="text" name="ABV" value={this.state.ABV}></input>

          <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={this.state.description}></input>

          <input className="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewBeerForm;
