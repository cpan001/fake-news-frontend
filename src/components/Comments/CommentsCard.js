import React from "react";
import CommentForm from "./CommentForm";
import CommentBrowser from "./CommentBrowser";

function CommentsCard({ comments, id, style, onSubmit }) {
  return (
    <div style={style} data-id={id}>
      <CommentForm onSubmit={onSubmit} id={id} />
      {/* <CommentBrowser /> */}
    </div>
  );
}

export default CommentsCard;
