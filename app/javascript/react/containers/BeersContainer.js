import React, { Component } from 'react';
import { Link } from 'react-router'
import NewBeerForm from '../components/NewBeerForm'
import BeerTile from '../components/BeerTile'

class BeersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: [],
      error: ""
    }
    this.deleteBeer = this.deleteBeer.bind(this)
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

  deleteBeer(id) {
    event.preventDefault();
    fetch(`/api/v1/beers/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      if(body.error) {
        throw body.error
      } else {
        let newBeers = this.state.beerList.filter(beer => {
          return(
            beer.id !== body.beer_id
          )
        })
        this.setState({beerList: newBeers})
      }
    })
    .catch(error => {
      this.setState({error: error})
      console.log(error);
      console.log("ERROR in FETCH")
    })
  }

  render() {
    let beerTiles = this.state.beerList.map(beer => {
      let handleDelete = () => {
	      this.deleteBeer(beer.id)
	    }

      return(
        <BeerTile
          handleDelete = {handleDelete}
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
        {this.state.error}
        <h1 className="cheers">CHEERS</h1>
        <h2 className="classy">A Boston Local Brew Review Site</h2>
        <h3 className="review-title"></h3>
        <div className="beer-tiles">
          {beerTiles}
        </div>
        <div className="add-a-beer">
          <Link to={`/beer/new`}>Click Here To Add A New Beer</Link>
        </div>
      </div>
    )
  }
}

export default BeersContainer;
