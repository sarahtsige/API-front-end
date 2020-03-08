import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main>
          <Route path="/" component={Home} />
          <Route path="/countries" component={Countries} />
          <Route
            path="/country-details/:name"
            render={routerProps => <CountryDetails {...routerProps} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
