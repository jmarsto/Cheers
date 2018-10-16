import React, { Component } from 'react';


class BeersShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    fetch(`/api/v1/beers/${this.props.params.id}`)
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
    .then((showData) => {
      console.log(showData);
    })
  }

  render() {

    return(
      <div>
        <h1>here is A beer</h1>

      </div>
    )
  }
}

export default BeersShowContainer;
