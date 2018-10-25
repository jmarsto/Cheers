import React from 'react';
import { Link } from 'react-router';

const BeerTile = props => {

  return(
      <div className="large-3 medium-6 small-12 column beer-tile row">
        <Link to={`/beers/${props.id}`}>
          <div className="tile-contents">
            <h3 className="beer-tile-name">{props.name}</h3>
            {props.style}<br/>
            ABV: {props.abv}
            <button className="deleteButton" onClick ={props.handleDelete} type="delete" value="Delete" />
          </div>
        </Link>
      </div>
  )
}

export default BeerTile
