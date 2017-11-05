import React from "react";

function NewsButton({ text, title, onButtonClick }) {
  return (
    <input
      type="button"
      value={text}
      data-title={title}
      onClick={onButtonClick}
    />
  );
}

export default NewsButton;

//change title to id for buttons
