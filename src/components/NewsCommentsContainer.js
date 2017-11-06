import React from "react";
import CommentsNumber from "./Comments/CommentsNumber";
import CommentsCard from "./Comments/CommentsCard";

export default class NewsCommentsContainer extends React.Component {
  state = {
    showComments: null
  };

  handleCommentClick = () => {
    let showComments = this.state.showComments ? false : true;
    this.setState({ showComments });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("form", e.target);
  };

  render() {
    const commentCardStyle = this.state.showComments
      ? { display: "block" }
      : { display: "none" };

    return (
      <div>
        <CommentsNumber
          comments={this.props.comments}
          id={this.props.id}
          onCommentClick={this.handleCommentClick}
        />
        <CommentsCard
          comments={this.props.comments}
          id={this.props.id}
          style={commentCardStyle}
          onSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}
