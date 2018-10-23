import React, { Component } from 'react';
import ReviewContainer from './ReviewContainer'

class BeerShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerData: {
        ABV: "",
        name: "",
        style: "",
        id: "",
        description: "",
        reviews: []
      }
    }
  }

  componentDidMount() {
    fetch(`/api/v1/beers/${this.props.params.id}`)
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
      this.setState({ beerData: data.beer })
    })
  }

  render() {
    console.log(this.state.beerData.reviews)
    return(
      <div>
        <h1>{this.state.beerData.name}</h1>
        <div>
          <p>{this.state.beerData.style}</p>
          <p>ABV: {this.state.beerData.ABV}%</p>
          <p>{this.state.beerData.description}</p>
        </div>
        <ReviewContainer
          beer = {this.state.beerData.name}
          reviews = {this.state.beerData.reviews}
          beerId = {this.state.beerData.id}
          />
      </div>
    )
  }
}

export default BeerShowContainer;
