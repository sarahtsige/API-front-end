import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";
import Regions from "./components/Regions";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { details: {} };
  }
  
  setCountryDetails = (details) => {
    this.setState({ details: details });
  }

  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main>
          <Route path="/" component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/regions" component={Regions} />
          <Route
            path="/country-details/:name"
            render={routerProps => <CountryDetails setCountryDetails={this.setCountryDetails} {...routerProps} {...this.state} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
