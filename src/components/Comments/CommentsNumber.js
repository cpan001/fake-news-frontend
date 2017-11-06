import React from "react";

function CommentsNumber({ comments, onCommentClick, id }) {
  return (
    <p onClick={onCommentClick} data-id={id} className="main-comments">
      {comments.length} Comments
    </p>
  );
}

export default CommentsNumber;
