import React from "react";

function CommentsNumber({ comments, onCommentClick, id }) {
  return (
    <p onClick={onCommentClick} data-id={id}>
      {comments.length} Comments
    </p>
  );
}

export default CommentsNumber;
