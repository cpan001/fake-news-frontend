import React from "react";

export default class CommentForm extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit} data-id={this.props.id}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add Comment" />
      </form>
    );
  }
}
