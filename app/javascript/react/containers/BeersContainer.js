import React, { Component } from 'react';
import BeerTile from '../components/BeerTile'
class BeersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: []
    }
  }
  componentDidMount() {
    fetch("/api/v1/beers")
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
      this.setState({ beerList: data.beers })
    })
  }
  render() {
    let beerTiles = this.state.beerList.map(beer => {
      return(
        <BeerTile
          key={beer.id}
          id={beer.id}
          name={beer.name}
          style={beer.style}
          abv={beer.ABV}
        />
      )
    })
    return(
      <div>
        <h1 className="Cheers">CHEERS</h1>
        <h2 className="classy">A classy beer review Website</h2>
        <h3 className="reviewTitle">Click a Beer</h3>
        <div className="beerTiles">
          {beerTiles}
        </div>
      </div>
    )
  }
}

export default BeersContainer;
