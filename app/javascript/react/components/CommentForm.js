import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      errors: []
    }
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearState = this.clearState.bind(this)
  };

  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  postComment(payload) {
    fetch(`/api/v1/reviews/${this.props.reviewId}/comments`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response.json()
        .then(response => {
          this.props.addComment(response.comment)
        })
      } else {
        return response.json()
        .then(response => {
            return response.errors
        })
        .then(errors => {
          this.setState({ errors: errors })
        })
        .catch(console.log("ERROR in FETCH"));
      }
    })
  }

  clearState() {
    this.setState({
      body: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
      let payload = {
        body: this.state.body
      };
      this.postComment(payload);
      this.clearState()
  }

  render(){
    return(
      <div>
        <div className="comment-form">
          <form className="form" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
            <input className="comment-input" type="text" name="body" value={this.state.body}></input>
            <input className="submit-button" type="submit" value="Comment on this review" />
          </form>
        </div>
      </div>
    )
  }
}
export default CommentForm;
