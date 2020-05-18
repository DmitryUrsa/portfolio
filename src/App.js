import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// Modules import
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import Wrapper from "./modules/Wrapper";

// Pages import
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Project from "./pages/Project";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/project/:slug" component={Project} />
            <Route exact path="/about/" component={About} />
            <Route exact path="/" component={Home} />
            <Route component={Error} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
