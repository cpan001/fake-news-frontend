import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsContainer from "./containers/NewsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <NewsContainer />
      </div>
    );
  }
}

export default App;
