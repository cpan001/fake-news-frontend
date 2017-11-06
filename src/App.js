import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsContainer from "./containers/NewsContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const Home = () => (
  <div>
    <NewsContainer />
  </div>
);
const About = () => <div>Ran out of time...</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
