import React from "react";
import NewsPhoto from "./NewsPhoto";
import NewsComments from "./NewsComments";
import NewsButtons from "./NewsButtons";
import NewsDescription from "./NewsDescription";

function NewsCard({ article, onButtonClick }) {
  console.log("hit newscard", article);
  return (
    <div className="card">
      <div className="card-container">
        <div className="photo-container">
          <NewsPhoto photoURL={article.urlToImage} articleURL={article.url} />
        </div>
        <div className="description-container">
          <NewsDescription
            title={article.title}
            description={article.description}
            provider={article.source}
            fakeVotes={article.fake}
            realVotes={article.real}
          />
          <NewsComments />
        </div>
        <div className="buttons-container">
          <NewsButtons onButtonClick={onButtonClick} title={article.title} />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

//change title to ID for buttons
