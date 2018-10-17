import React, { Component } from 'react';
import ReviewContainer from './ReviewContainer'

class BeersShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerData: {
        beer: {
          ABV: "",
          name: "",
          style: "",
          id: ""

        },
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
    .then((showData) => {
      this.setState({ beerData: showData })
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.beerData.beer.name}</h1>
        <ReviewContainer
          reviews = {this.state.beerData.reviews}
          />
      </div>
    )
  }
}

export default BeersShowContainer;
