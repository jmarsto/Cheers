import React from 'react';

const BeerTile = props => {
  return(
    <div className="large-2 medium-2 small-2 column beerTile">
      <h3>{props.name}</h3>
      {props.style}<br/>
      {props.abv}
    </div>
  )
}

export default BeerTile
