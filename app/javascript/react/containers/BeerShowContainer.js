import React, { Component } from 'react';
import ReviewContainer from './ReviewContainer'

class BeerShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ABV: "",
        name: "",
        style: "",
        id: "",
        description: ""
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
      this.setState({
        name: data.beer.name,
        id: data.beer.id,
        description: data.beer.description,
        ABV: data.beer.ABV,
        style: data.beer.style
      })
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.name}</h1>
        <div>
          <p>{this.state.style}</p>
          <p>ABV: {this.state.ABV}%</p>
          <p>{this.state.description}</p>
        </div>
        <ReviewContainer
          beerId = {this.props.params.id}
           />
      </div>
    )
  }
}

export default BeerShowContainer;
