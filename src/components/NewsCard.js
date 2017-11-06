import React from "react";
import NewsPhoto from "./NewsPhoto";
import NewsCommentsContainer from "./NewsCommentsContainer";
import NewsButtons from "./NewsButtons";
import NewsDescription from "./NewsDescription";

function NewsCard({ article, onButtonClick, onCommentClick }) {
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
          <NewsCommentsContainer comments={article.comments} id={article.id} />
        </div>
        <div className="buttons-container">
          <NewsButtons onButtonClick={onButtonClick} id={article.id} />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
