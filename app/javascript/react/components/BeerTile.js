import React from 'react';

const BeerTile = props => {
  return(
    <div className="beerTile row">
      <h3>{props.name}</h3>
      {props.style}<br/>
      {props.abv}
    </div>
  )
}

export default BeerTile
