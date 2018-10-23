import React from 'react';
import { Link } from 'react-router'

const BeerTile = props => {
  return(
<<<<<<< HEAD
      <div className="large-3 medium-6 small-12 column beerTile row">
        <h3 id = "beerTile"><Link to={`/beers/${props.id}`}>{props.name}</Link></h3>
        {props.style}<br/>
        {props.abv}
      </div>
=======
    <div className="large-2 medium-2 small-2 column beerTile">
      <h3><Link to={`/beers/${props.id}`}>{props.name}</Link></h3>
      {props.style}<br/>
      {props.abv}<br/>
    </div>
>>>>>>> master
  )
}

export default BeerTile
