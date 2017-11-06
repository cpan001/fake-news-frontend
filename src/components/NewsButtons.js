import React from "react";
import NewsButton from "./NewsButton";

function NewsButtons({ onButtonClick, id }) {
  return (
    <div>
      <NewsButton text="FAKE NEWS!" onButtonClick={onButtonClick} id={id} />
      <NewsButton text="Nah, it's real" onButtonClick={onButtonClick} id={id} />
    </div>
  );
}

export default NewsButtons;

//change title to ID for buttons
