import React from "react";
import NewsButton from "./NewsButton";

function NewsButtons({ onButtonClick, title }) {
  return (
    <div>
      <NewsButton
        text="FAKE NEWS!"
        onButtonClick={onButtonClick}
        title={title}
      />
      <NewsButton
        text="Nah, it's real"
        onButtonClick={onButtonClick}
        title={title}
      />
    </div>
  );
}

export default NewsButtons;

//change title to ID for buttons
