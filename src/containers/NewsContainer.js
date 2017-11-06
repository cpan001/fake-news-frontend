import React from "react";
import NewsCard from "../components/NewsCard";

const API_KEY = "75902674a2224ead888b19efccfe6bc1";
// const SOURCE = "techcrunch";
const URL = `https://newsapi.org/v1/articles?source=`;
const SOURCES_URL = "https://newsapi.org/v1/sources";
let article_id = 0;

export default class NewsContainer extends React.Component {
  state = {
    articles: {},
    sources: [
      "the-new-york-times"
      // "techcrunch",
      // "buzzfeed",
      // "breitbart-news",
      // "espn"
      // "hacker-news",
      // "the-huffington-post",
      // "the-wall-street-journal",
      // "the-washington-post",
      // "entertainment-weekly"
    ]
  };

  fetchAllStories = () => {
    article_id = 0;
    // debugger;
    this.state.sources.forEach(source => this.fetchTopStories(source));
  };

  fetchTopStories = newsSource => {
    fetch(`${URL}${newsSource}&apiKey=${API_KEY}`)
      .then(resp => resp.json())
      .then(json => {
        let newArticles = json.articles;
        const source = json.source;
        newArticles = newArticles.map(article => {
          article["source"] = source;
          article["fake"] = 0;
          article["real"] = 0;
          article["comments"] = [];
          return article;
        });
        newArticles = newArticles.reduce((acc, art) => {
          art["id"] = article_id;
          acc[article_id] = art;
          ++article_id;
          return acc;
        }, {});
        const articles = { ...this.state.articles, ...newArticles };
        this.setState({ articles });
      });
  };

  //for all sources - not used right now
  // fetchNewsAPISources = () => {
  //   fetch(SOURCES_URL)
  //     .then(resp => resp.json())
  //     .then(json => {
  //       const sources = json.sources;
  //       console.log("sources", sources);
  // this.setState({ sources }, () => this.fetchAllStories());
  //     });
  // };

  componentDidMount() {
    // this.fetchNewsAPISources();
    this.fetchAllStories();
  }

  //change to setstate
  handleButtonClick = e => {
    console.log("button info", e.target, e.target.dataset.id);
    let currArticle = this.state.articles[e.target.dataset.id];
    e.target.value === "FAKE NEWS!"
      ? ++currArticle["fake"]
      : ++currArticle["real"];
    const newArticles = Object.assign({}, this.state.articles, {
      [e.target.dataset.id]: currArticle
    });
    this.setState({ articles: newArticles }, () =>
      console.log(this.state.articles, "new state")
    );
  };

  render() {
    let articles = Object.values(this.state.articles);
    articles =
      articles.length > 0
        ? articles.map(article => (
            <NewsCard
              article={article}
              key={article.title}
              onButtonClick={this.handleButtonClick}
              onCommentClick={this.handleCommentClick}
            />
          ))
        : null;
    console.log("hit newscontainer", articles);
    return (
      <div className="home-news-container">
        <h1>Fake News Site</h1>
        {articles}
      </div>
    );
  }
}
