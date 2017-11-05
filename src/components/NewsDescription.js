import React from "react";

const titleStyle = {
  fontWeight: "bold"
};

function NewsDescription({ title, description, provider, fake, real }) {
  return (
    <div>
      <p className="title" style={titleStyle}>
        {title}
      </p>
      <p>
        Stats: Fake News Votes {fake} | Real Votes {real}
      </p>
      <p>By {provider}</p>
      <p>{description}</p>
    </div>
  );
}

export default NewsDescription;
