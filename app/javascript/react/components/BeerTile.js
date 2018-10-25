import React from 'react';
import { Link } from 'react-router';

const BeerTile = props => {

  return(
    <div className="large-2 medium-2 small-2 column beerTile">
      <h3><Link to={`/beers/${props.id}`}>{props.name}</Link></h3>
      {props.style}<br/>
      {props.abv}<br/>
      <button className="deleteButton" onClick ={props.handleDelete} type="delete" value="Delete" />
    </div>
  )
}

export default BeerTile
