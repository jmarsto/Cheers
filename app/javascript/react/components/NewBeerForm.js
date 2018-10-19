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
    this.formPayload = this.formPayload.bind(this)
    this.postNewBeer = this.postNewBeer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  formPayload(){
    return {
      name: this.state.name,
      style: this.state.style,
      description: this.state.description,
      ABV: this.state.ABV,
    };
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

  handleSubmit(event) {
    event.preventDefault();
      let payload = this.formPayload();
      this.postNewBeer(payload);
  }


  // validateInput(input) {
  //   if (input === '') {
  //     let new Error = { articleTitle: 'You must enter both Name and Style.'}
  //     this.setState({ errors: Object.assign( this.state.errors, newError) })
  //     return false
  //   } else {
  //     errorState = this.state.errors
  //     delete errorState.beerTitle
  //     this.setState({ errors: errorState })
  //     return true
  //   }
  // }



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
        {errors}
        <h1> Post A New Beer! </h1>

        <form className="form" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>

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
