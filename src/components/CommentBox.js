import React, { Component } from 'react';

class CommentBox extends Component {

  state = {
    comment: '',
  };

  handleChangeComment = ({ target: { value: comment } }) => {
    this.setState({ comment })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ comment: '' });
  }

  render() {
    const {
      comment
    } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea 
          value={comment}
          onChange={this.handleChangeComment}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
