import React from "react";

function NewsDescription({
  title,
  description,
  provider,
  fakeVotes,
  realVotes
}) {
  return (
    <div>
      <p className="title">{title}</p>
      <p className="stats">
        Stats: Fake News Votes {fakeVotes} | Real Votes {realVotes}
      </p>
      <p className="provider">By {provider}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default NewsDescription;
