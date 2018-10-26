import React from 'react';
import { Link } from 'react-router';

const BeerTile = props => {

  return(
      <div className="large-3 medium-6 small-12 column beer-tile row">
          <div className="tile-contents">
          <button className="delete-button" onClick ={props.handleDelete} type="delete" value="x" >
          <span className="delete-x">x</span>
          </button>
          <Link to={`/beers/${props.id}`}>
            <h3 className="beer-tile-name">{props.name}</h3>
            {props.style}<br/>
            ABV: {props.abv}
            </Link>

          </div>
      </div>
  )
}

export default BeerTile
