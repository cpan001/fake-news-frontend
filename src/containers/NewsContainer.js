import React from "react";
import NewsCard from "../components/NewsCard";

const API_KEY = "75902674a2224ead888b19efccfe6bc1";
const SOURCE = "techcrunch";
const URL = `https://newsapi.org/v1/articles?source=${SOURCE}&apiKey=${API_KEY}`;
const SOURCES_URL = "https://newsapi.org/v1/sources";

export default class NewsContainer extends React.Component {
  state = {
    articles: [],
    sources: []
  };

  fetchTopStories = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => {
        let articles = json.articles;
        const source = json.source;
        articles = articles.map(article => {
          article["source"] = source;
          article["fake"] = 0;
          article["real"] = 0;
          return article;
        });
        this.setState({ articles });
      });
  };

  fetchNewsAPISources = () => {
    fetch(SOURCES_URL)
      .then(resp => resp.json())
      .then(json => {
        const sources = json.sources;
        console.log("sources", sources);
        this.setState({ sources });
      });
  };

  fetchAPI = () => {
    fetch("http://localhost:3000/api/v1/articles")
      .then(resp => resp.json())
      .then(json => console.log(json));
  };

  componentDidMount() {
    // this.fetchNewsAPISources();
    // this.fetchTopStories();
    // this.fetchAPI();
  }

  //change to setstate
  handleButtonClick = e => {
    const currArticle = this.findArticleByTitle(e.target.dataset.title);
  };

  findArticleByTitle = title => {
    if (this.state.articles.length > 0) {
      return this.state.articles.find(article => article.title === title);
    }
  };

  render() {
    const articles =
      this.state.articles.length > 0
        ? this.state.articles.map(article => (
            <NewsCard
              article={article}
              key={article.title}
              onButtonClick={this.handleButtonClick}
            />
          ))
        : null;
    console.log("hit newscontainer");
    return <div>{articles}</div>;
  }
}
