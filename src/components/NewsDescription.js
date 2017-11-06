import React from "react";

const titleStyle = {
  fontWeight: "bold"
};

function NewsDescription({
  title,
  description,
  provider,
  fakeVotes,
  realVotes
}) {
  return (
    <div>
      <p className="title" style={titleStyle}>
        {title}
      </p>
      <p>
        Stats: Fake News Votes {fakeVotes} | Real Votes {realVotes}
      </p>
      <p>By {provider}</p>
      <p>{description}</p>
    </div>
  );
}

export default NewsDescription;
