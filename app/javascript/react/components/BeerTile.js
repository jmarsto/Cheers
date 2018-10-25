import React from 'react';
import { Link } from 'react-router';

const BeerTile = props => {

  return(
    <div className="large-3 medium-6 small-12 column beer-tile row">
      <h3 className="beer-tile-name"><Link to={`/beers/${props.id}`}>{props.name}</Link></h3>
      {props.style}<br/>
      {props.abv}
      <button className="deleteButton" onClick ={props.handleDelete} type="delete" value="Delete" />
    </div>
  )
}

export default BeerTile
