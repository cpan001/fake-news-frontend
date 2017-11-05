import React from "react";

function NewsPhoto({ photoURL, articleURL }) {
  return (
    <a href={articleURL} target="_blank">
      <img height="200px" width="200px" src={photoURL} alt="" />
    </a>
  );
}

export default NewsPhoto;
