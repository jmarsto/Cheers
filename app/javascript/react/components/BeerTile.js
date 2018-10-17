import React from 'react';
import { Link } from 'react-router'

const BeerTile = props => {
  return(
    <div className="large-2 medium-2 small-2 column beerTile">
      <h3><Link to={`/beers/${props.id}`}>{props.name}</Link></h3>
      {props.style}<br/>
      {props.abv}
    </div>
  )
}

export default BeerTile
