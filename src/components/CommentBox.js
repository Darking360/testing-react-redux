import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {

  state = {
    comment: '',
  };

  handleChangeComment = ({ target: { value: comment } }) => {
    this.setState({ comment })
  }

  handleSubmit = (e) => {
    const {
      saveComment,
    } = this.props;

    const {
      comment,
    } = this.state;
    
    e.preventDefault();
    saveComment(comment);
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

export default connect(null, actions)(CommentBox);
