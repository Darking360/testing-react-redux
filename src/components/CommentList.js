import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  renderComments = () => {
    const {
      comments
    } = this.props;

    return comments.map((comment) => {
      return(
        <li key={comment}>{comment}</li>
      );
    });
  }

  render() {
    return(
      <ul>
        { this.renderComments() }
      </ul>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return {
    comments
  }
};

export default connect(mapStateToProps)(CommentList);
