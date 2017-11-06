import React from "react";

function NewsButton({ text, id, onButtonClick }) {
  return (
    <input type="button" value={text} data-id={id} onClick={onButtonClick} />
  );
}

export default NewsButton;
