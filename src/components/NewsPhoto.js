import React from "react";

const style = { alignSelf: "center" };

function NewsPhoto({ photoURL, articleURL }) {
  return (
    <div className="news-image">
      <a href={articleURL} target="_blank">
        <img height="200px" width="200px" src={photoURL} alt="" />
      </a>
    </div>
  );
}

export default NewsPhoto;
